import { CheckCircle } from "lucide-react";

import { Button } from "@acme/ui/button";

export const CardsPrice = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for you. <br />
              To ensure that we can put in place and allocate the resources
              required to the infrastructure before the final delivery. You may
              pay 30% of the final price after the first demo.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-between rounded-lg border p-6 shadow-lg">
            <div>
              <h3 className="text-center text-2xl font-bold">Basics</h3>
              <div className="mt-4 text-center text-gray-500">
                <span className="text-4xl font-bold">$400</span>/ year
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Landing page
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Contact page linked to Email or Whatsapp
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />1
                  simple page on demand
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Free maintenance for a year
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Free domaine name for a year (.com, .mg)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Limited Database capacity
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  1GB of media storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  CDN
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  SEO expert intervention once
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-slate-950 hover:bg-slate-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-500">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
            <div>
              <h3 className="text-center text-2xl font-bold text-white">
                In-demand
              </h3>
              <div className="mt-4 text-center text-gray-300">
                <span className="text-4xl font-bold">~$600</span>/ year
              </div>
              <ul className="mt-4 space-y-2 text-white">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Everything in basics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  In-demand features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Unlimited pages
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Higher database capacity
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Better server performance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  More storage space
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-500">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border p-6 shadow-lg">
            <div>
              <h3 className="text-center text-2xl font-bold">In-house</h3>
              <div className="mt-4 text-center text-gray-500">
                <span className="text-4xl font-bold">~10$</span> / hour / talent
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Choose your talent(s)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Dedicated and exclusive developer(s) for you
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Take control of everything
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  White labeled
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-slate-950 hover:bg-slate-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-500">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs italic text-muted-foreground">
            Local client from Madagascar are proposed to a lower and different
            price range.
          </span>
        </div>
      </div>
    </section>
  );
};
