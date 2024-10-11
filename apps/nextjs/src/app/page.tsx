import { CardsPrice } from "./_components/cards-price";
import { CustomersService } from "./_components/customers-service";
import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/Hero-section";
import { NavBar } from "./_components/nav-bar";
import { OtherMenus } from "./_components/other-menus";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-blue-950">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <OtherMenus />
        <CustomersService />
        <CardsPrice />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
