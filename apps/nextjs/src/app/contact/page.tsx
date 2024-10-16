import { ContactForm } from "./_components/contact-form";
import { IconSocials } from "./_components/icon-socials";

const ContactPage = () => {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1709884735626-63e92727d8b6')",
      }}
    >
      <div className="flex min-h-screen flex-col bg-black/60">
        <div className="container mx-auto flex flex-1 flex-col px-6 py-12">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="text-white lg:mx-6 lg:w-1/2">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Contact us now.
              </h1>

              <p className="mt-6 max-w-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem quo aliquid molestiae hic incidunt beatae placeat
                accusantium! Alias ex quisquam ab tempora. Ratione autem
                doloremque ducimus numquam doloribus, error sed.
              </p>

              <button className="mt-6 transform rounded-md bg-blue-600 px-8 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                get in touch
              </button>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300">Follow us</h3>

                <IconSocials />
              </div>
            </div>

            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-background lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                  Contact form
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Ask us everything and we would love to hear from you
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
