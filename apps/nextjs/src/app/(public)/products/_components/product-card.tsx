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
    <Card className="mx-auto h-full w-full max-w-md">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Carousel className="flex w-full max-w-xs justify-center">
          <CarouselContent>
            {product.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <Card>
                    <Image
                      src={image}
                      alt={image}
                      width={700}
                      height={300}
                      className="h-48 w-full rounded-lg object-cover"
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      <CardContent className="flex flex-col">
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
