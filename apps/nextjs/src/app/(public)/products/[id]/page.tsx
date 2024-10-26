import Image from "next/image";
import Link from "next/link";

import { getOneProduct, paymentLink } from "@acme/payment";
import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";

const ProductsPage = async ({ params }: { params: { id: string } }) => {
  const product = await getOneProduct(params.id);
  const payment = await paymentLink(params.id);
  return (
    <main className="flex-1">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="p-1">
            <Card>
              {product.images.map((image) => (
                <div key={image} className="h-64 w-96">
                  <Image
                    src={image}
                    alt={image}
                    width={700}
                    height={300}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </Card>
          </div>
          <p className="text-muted-foreground">{product.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="text-2xl font-bold">
            $ {product.default_price?.toString()}
          </p>
          <Link href={payment.url}>
            <Button>Buy Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default ProductsPage;
