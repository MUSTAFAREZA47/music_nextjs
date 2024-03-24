import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      {/* <h1 className="text-2xl text-center">Chai aur code</h1> */}
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs />
      <MusicSchoolTestimonial />
      <UpcommingWebinar />
      <Instructors/>
      <Footer />
    </main>
  );
}
