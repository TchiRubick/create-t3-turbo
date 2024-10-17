import Link from "next/link";

import { getSection } from "@acme/cms";
import { signin } from "@acme/lucia/actions";
import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

const loginFormSection = getSection("login-form");

const SigninPage = async () => {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <form action={signin} className="mx-auto max-w-sm">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">{loginFormSection.title}</CardTitle>
            <CardDescription>{loginFormSection.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{loginFormSection.fields[0]?.label}</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder={loginFormSection.fields[0]?.placeholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">
                {loginFormSection.fields[1]?.label}
              </Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder={loginFormSection.fields[1]?.placeholder}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">{loginFormSection.button}</Button>
            <div className="mt-4 text-center text-sm">
              {loginFormSection.noAccountText}
              <Link href="/auth" className="underline">
                {loginFormSection.noAccountLinkText}
              </Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SigninPage;
