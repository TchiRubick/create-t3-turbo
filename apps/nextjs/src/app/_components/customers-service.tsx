export const CustomersService = () => (
  <section className="w-full bg-blue-950 py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our product.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
              "This product has completely transformed our workflow. It's
              intuitive, powerful, and a joy to use."
            </blockquote>
            <div className="flex items-center space-x-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg?height=40&width=40"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div>
                <div className="text-base font-medium">Sarah Johnson</div>
                <div className="text-sm text-gray-500">CEO, TechCorp</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
              "The customer support is outstanding. They're always there to help
              and go above and beyond."
            </blockquote>
            <div className="flex items-center space-x-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg?height=40&width=40"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div>
                <div className="text-base font-medium">Michael Lee</div>
                <div className="text-sm text-gray-500">CTO, InnovateCo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
