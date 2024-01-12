import Navbar from "../../components/home/Navbar";
import MiniNavbar from "../../components/home/MiniNavbar";
import HomePage from "../../components/home/HomePage";
import Mission from "../../components/home/Mission";
import Functionality from "../../components/home/Functionality";
import Company from "../../components/home/Company";
import Founder from "../../components/home/Founder";
import Footer from "../../components/home/Footer";
import Experts from "../../components/home/Experts";
import Organisation from "../../components/home/Organisation";
import Events from "../../components/home/Events";
import Testimonials from "../../components/home/Testimonials";
import Activity from "../../components/home/Activity";

export default function Home() {
  return (
    <main className="sm:px-12 px-6  bg-[#F5F1ED] flex flex-col gap-10 text-black relative overflow-hidden">
      <Navbar />
      <MiniNavbar />
      <HomePage />
      <Mission />
      <Functionality />
      <Experts />
      <Organisation />
      <Company />
      <Events />
      <Testimonials />
      <Founder />
      <Activity />
      <Footer />
    </main>
  );
}
