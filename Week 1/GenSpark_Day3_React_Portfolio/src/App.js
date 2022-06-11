import "./assets/css/style.css"

import NavBar from "./components/homepage/navbar/navbar"
import Home from "./components/homepage/home/home"
import AboutMe from "./components/homepage/aboutme/aboutme"
import Services from "./components/homepage/services/services"
import Counter from "./components/homepage/counter/counter"
import Portfolio from "./components/homepage/portfolio/portfolio"
import Testimonial from "./components/homepage/testimonial/testimonial"
import Blog from "./components/homepage/blog/blog"
import ContactUs from "./components/homepage/contactus/contactus"
import Footer from "./components/homepage/footer/footer"

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonial />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}