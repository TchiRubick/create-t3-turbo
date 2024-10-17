import Link from "next/link";

import { getSection } from "@acme/cms";
import { signup } from "@acme/lucia/actions";
import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

const signupFormSection = getSection("signup-form");

const SignupPage = () => (
  <div className="flex min-h-screen flex-col justify-center">
    <form action={signup} className="mx-auto max-w-sm">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">{signupFormSection.title}</CardTitle>
          <CardDescription>{signupFormSection.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">
                {signupFormSection.fields[0]?.label}
              </Label>
              <Input
                id="username"
                name="username"
                placeholder={signupFormSection.fields[0]?.placeholder}
                required
                aria-invalid={Boolean(
                  signupFormSection.fields[0]?.errorMessage,
                )}
                aria-errormessage={signupFormSection.fields[0]?.errorMessage}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                {signupFormSection.fields[1]?.label}
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder={signupFormSection.fields[1]?.placeholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">
                {signupFormSection.fields[2]?.label}
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder={signupFormSection.fields[2]?.placeholder}
              />
            </div>
            <Button type="submit" className="w-full">
              {signupFormSection.button}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {signupFormSection.alreadyHaveAccountText}
            <Link href="/auth" className="underline">
              {signupFormSection.alreadyHaveAccountLinkText}
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  </div>
);

export default SignupPage;
