import { useSelector, useDispatch } from "react-redux";
/////
import Nav from "./comp/1/Nav";
/////
import Hero from "./comp/2/Hero";
/////
import PopularProducts from "./comp/3/PopularProducts";
/////
import SuperQuality from "./comp/4/SuperQuality";
/////
import Services from "./comp/5/Services";
/////
import SpacialOffer from "./comp/6/SpacialOffer";
/////
import CustomerReviews from "./comp/7/CustemerReviews";
/////
import Subscribes from "./comp/8/Subscribes";
/////
import Footer from "./comp/9/Footer";
/////

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x padding-y">
        <Services />
      </section>
      <section className="padding">
        <SpacialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribes />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};
export default App;
