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

import { signin } from "../actions/signin";

const LoginPage = () => (
  <div className="flex min-h-svh flex-col justify-center">
    <form action={signin} className="mx-auto max-w-sm">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email adress</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                name="email"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                name="password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Login</Button>
        </CardFooter>
      </Card>
    </form>
  </div>
);

export default LoginPage;
