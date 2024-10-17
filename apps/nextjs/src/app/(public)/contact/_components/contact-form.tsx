"use client";

import { useForm } from "react-hook-form";

import { getSection } from "@acme/cms";
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
import { Textarea } from "@acme/ui/textarea";

type FormData = {
  fullName: string;
  email: string;
  message: string;
  phone: string;
};

const contactFormSection = getSection("contact-form");

const requiredMessage = {
  fullName: contactFormSection.fields[0]?.["error-message"],
  phone: contactFormSection.fields[1]?.["error-message"],
  email: contactFormSection.fields[2]?.["error-message"],
  message: contactFormSection.fields[3]?.["error-message"],
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mt-8 lg:mx-6 lg:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {contactFormSection.title}
            </CardTitle>
            <CardDescription>{contactFormSection.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullname">
                {contactFormSection.fields[0]?.label}
              </Label>
              <Input
                type="text"
                placeholder={contactFormSection.fields[0]?.placeholder}
                {...register("fullName", {
                  required: contactFormSection.fields[0]?.["error-message"],
                })}
                className="min-h-12"
              />
              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">
                {contactFormSection.fields[1]?.label}
              </Label>
              <Input
                type="tel"
                placeholder={contactFormSection.fields[1]?.placeholder}
                {...register("phone", {
                  required: requiredMessage.phone,
                })}
                className="min-h-12"
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                {contactFormSection.fields[2]?.label}
              </Label>
              <Input
                type="email"
                placeholder={contactFormSection.fields[2]?.placeholder}
                {...register("email", {
                  required: requiredMessage.email,
                })}
                className="min-h-12"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">
                {contactFormSection.fields[3]?.label}
              </Label>
              <Textarea
                {...register("message", {
                  required: requiredMessage.message,
                })}
                placeholder={contactFormSection.fields[3]?.label}
                className="min-h-32"
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">{contactFormSection.button}</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};
