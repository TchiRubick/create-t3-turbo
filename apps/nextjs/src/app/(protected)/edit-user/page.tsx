import { UserCircleIcon } from "lucide-react";

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

const EditUserPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <Card className="mx-auto flex w-full max-w-3xl justify-evenly">
        <CardHeader className="h-full w-36 items-center justify-center">
          <UserCircleIcon className="h-36 w-36 items-center text-gray-600" />
          <div className="flex flex-col justify-center text-center">
            <Label className="text-xl font-bold">John Doe</Label>
            <Label className="text-gray-500">m@example.com</Label>
          </div>
        </CardHeader>
        <div className="w-2/3 min-w-20">
          <CardHeader>
            <CardTitle className="text-2xl">Edit Profile</CardTitle>
            <CardDescription>
              You can edit your information below.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullname">Full name</Label>
              <Input id="fullname" type="fullname" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profilePicture">Upload Profile Picture </Label>
              <Input id="profilePicture" type="file" accept="image/*" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="flex justify-end">
              Save
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default EditUserPage;
