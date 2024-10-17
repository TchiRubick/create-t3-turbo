// To parse this data:
//
//   import { Convert, Content } from "./file";
//
//   const content = Convert.toContent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Content {
    "hero-section":    HeroSection;
    "price-section":   PriceSection;
    "login-form":      LoginForm;
    "signup-form":     SignupForm;
    "contact-section": ContactSection;
    "contact-form":    ContactForm;
}

export interface ContactForm {
    title:       string;
    description: string;
    button:      string;
    fields:      Field[];
}

export interface Field {
    label:        string;
    placeholder:  string;
    errorMessage: string;
}

export interface ContactSection {
    title:           string;
    description:     string;
    button:          string;
    socialMediaText: string;
    background:      string;
}

export interface HeroSection {
    "main-title":              string;
    "short-title-description": string;
    "last-title":              string;
    description:               string;
    quotes:                    string;
}

export interface LoginForm {
    title:             string;
    description:       string;
    fields:            Field[];
    button:            string;
    noAccountText:     string;
    noAccountLinkText: string;
}

export interface PriceSection {
    "main-title":        string;
    "title-description": string;
    note:                string;
    "price-list":        PriceList[];
}

export interface PriceList {
    title:    string;
    price:    string;
    unity:    string;
    special:  string;
    button:   string;
    features: Feature[];
}

export interface Feature {
    value: string;
}

export interface SignupForm {
    title:                      string;
    description:                string;
    fields:                     Field[];
    button:                     string;
    alreadyHaveAccountText:     string;
    alreadyHaveAccountLinkText: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toContent(json: string): Content {
        return cast(JSON.parse(json), r("Content"));
    }

    public static contentToJson(value: Content): string {
        return JSON.stringify(uncast(value, r("Content")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Content": o([
        { json: "hero-section", js: "hero-section", typ: r("HeroSection") },
        { json: "price-section", js: "price-section", typ: r("PriceSection") },
        { json: "login-form", js: "login-form", typ: r("LoginForm") },
        { json: "signup-form", js: "signup-form", typ: r("SignupForm") },
        { json: "contact-section", js: "contact-section", typ: r("ContactSection") },
        { json: "contact-form", js: "contact-form", typ: r("ContactForm") },
    ], false),
    "ContactForm": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "button", js: "button", typ: "" },
        { json: "fields", js: "fields", typ: a(r("Field")) },
    ], false),
    "Field": o([
        { json: "label", js: "label", typ: "" },
        { json: "placeholder", js: "placeholder", typ: "" },
        { json: "errorMessage", js: "errorMessage", typ: "" },
    ], false),
    "ContactSection": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "button", js: "button", typ: "" },
        { json: "socialMediaText", js: "socialMediaText", typ: "" },
        { json: "background", js: "background", typ: "" },
    ], false),
    "HeroSection": o([
        { json: "main-title", js: "main-title", typ: "" },
        { json: "short-title-description", js: "short-title-description", typ: "" },
        { json: "last-title", js: "last-title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "quotes", js: "quotes", typ: "" },
    ], false),
    "LoginForm": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "fields", js: "fields", typ: a(r("Field")) },
        { json: "button", js: "button", typ: "" },
        { json: "noAccountText", js: "noAccountText", typ: "" },
        { json: "noAccountLinkText", js: "noAccountLinkText", typ: "" },
    ], false),
    "PriceSection": o([
        { json: "main-title", js: "main-title", typ: "" },
        { json: "title-description", js: "title-description", typ: "" },
        { json: "note", js: "note", typ: "" },
        { json: "price-list", js: "price-list", typ: a(r("PriceList")) },
    ], false),
    "PriceList": o([
        { json: "title", js: "title", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "unity", js: "unity", typ: "" },
        { json: "special", js: "special", typ: "" },
        { json: "button", js: "button", typ: "" },
        { json: "features", js: "features", typ: a(r("Feature")) },
    ], false),
    "Feature": o([
        { json: "value", js: "value", typ: "" },
    ], false),
    "SignupForm": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "fields", js: "fields", typ: a(r("Field")) },
        { json: "button", js: "button", typ: "" },
        { json: "alreadyHaveAccountText", js: "alreadyHaveAccountText", typ: "" },
        { json: "alreadyHaveAccountLinkText", js: "alreadyHaveAccountLinkText", typ: "" },
    ], false),
};
