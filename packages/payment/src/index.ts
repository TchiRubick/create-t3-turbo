import Stripe from "stripe";

export const name = "payment";

if (!process.env.STRIPE_SECRET) {
  throw new Error("Please set STRIPE_SECRET in your .env file");
}

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2024-09-30.acacia",
});

export { Stripe };

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

export const getProducts = async () => {
  const products = await stripe.products.list({
    active: true,
  });

  return products.data;
};
