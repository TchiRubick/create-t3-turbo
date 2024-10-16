"use client";

import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  message: string;
  phone: string;
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
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-1">
        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Jane Doe"
          {...register("fullName", { required: true })}
          className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-background dark:text-gray-300 dark:focus:border-blue-300"
        />
        {errors.fullName && (
          <span className="text-red-500">Full Name is required</span>
        )}
      </div>

      <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
          Phone number
        </label>
        <input
          type="tel"
          placeholder="+123 456 789"
          {...register("phone", { required: true })}
          className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-background dark:text-gray-300 dark:focus:border-blue-300"
        />
        {errors.phone && (
          <span className="text-red-500">Number phone is required</span>
        )}
      </div>

      <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
          Email address
        </label>
        <input
          type="email"
          placeholder="janedoe@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-background dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>

      <div className="mt-6 w-full">
        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-background dark:text-gray-300 dark:focus:border-blue-300 md:h-48"
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <span className="text-red-500">Message is required</span>
        )}
      </div>

      <button className="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
        get in touch
      </button>
    </form>
  );
};
