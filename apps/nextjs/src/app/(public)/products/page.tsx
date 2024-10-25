import { getProducts } from "@acme/payment";

import { ProductCard } from "./_components/product-card";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
