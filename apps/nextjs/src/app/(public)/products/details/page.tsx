import { getOneProduct, getProducts, paymentLink } from "@acme/payment";

const DetailsPage = async () => {
  const products = await getProducts();

  if (products[0]?.id === undefined) {
    return <div>no products</div>;
  }

  const payment = await paymentLink(products[0].id);

  return (
    <main className="flex-1">
      <span>url: {payment.url}</span>
    </main>
  );
};

export default DetailsPage;
