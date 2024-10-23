import Image from "next/image";

import type { Stripe } from "@acme/payment";
import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@acme/ui/carousel";

export const ProductCard = ({ product }: { product: Stripe.Product }) => {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {product.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <Card>
                    <Image src={image} alt={image} width={300} height={300} />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="text-muted-foreground">{product.description}</p>
        <p className="text-2xl font-bold">
          ${product.default_price?.toString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};
