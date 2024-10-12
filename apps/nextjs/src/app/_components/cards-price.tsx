import { CheckCircle, Plus } from "lucide-react";

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
              Choose the plan that's right for you. All plans come with a 30-day
              money-back guarantee.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-between rounded-lg border border-blue-500 bg-blue-900 p-6 shadow-lg">
            <div>
              <h3 className="text-center text-2xl font-bold">Starter</h3>
              <div className="mt-4 text-center text-gray-500">
                <span className="text-4xl font-bold">$29</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />5
                  Projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Basic Analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  24/7 Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
            <div>
              <h3 className="text-center text-2xl font-bold text-white">Pro</h3>
              <div className="mt-4 text-center text-gray-300">
                <span className="text-4xl font-bold">$79</span>/ month
              </div>
              <ul className="mt-4 space-y-2 text-white">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Advanced Analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Priority Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-blue-500 bg-blue-900 p-6 shadow-lg">
            <div>
              <h3 className="text-center text-2xl font-bold">Enterprise</h3>
              <div className="mt-4 text-center text-gray-500">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Unlimited Everything
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  White-label Options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Dedicated Account Manager
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
