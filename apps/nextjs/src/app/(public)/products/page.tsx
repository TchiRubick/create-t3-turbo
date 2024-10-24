import { getProducts } from "@acme/payment";

import { ProductCard } from "./_components/product-card";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <main className="flex-1">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
};

export default ProductsPage;
