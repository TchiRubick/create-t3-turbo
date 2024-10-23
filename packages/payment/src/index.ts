import {
  getAuthenticatedUser,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";
import Stripe from "stripe";

export const name = "payment";

if (!process.env.LEMONSQUEEZY_API_KEY) {
  throw new Error("Please set LEMONSQUEEZY_API_KEY in your .env file");
}

if (!process.env.STRIPE_SECRET) {
  throw new Error("Please set STRIPE_SECRET in your .env file");
}

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2024-09-30.acacia",
});

export const payment = async () => {
  lemonSqueezySetup({
    apiKey: process.env.LEMONSQUEEZY_API_KEY,
    onError: (error) => console.error("Error!", error),
  });

  const { data, error } = await getAuthenticatedUser();

  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
};

export const createCustomer = async (email: string) => {
  const customer = await stripe.customers.create({
    email,
  });

  return customer;
};

export const createSubscription = async (customerId: string) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [
      {
        plan: "basic",
      },
    ],
  });

  return subscription;
};
