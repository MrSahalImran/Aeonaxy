import Categories from "./section/Categories";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";

export default function App() {
  return (
    <div>
      <main className="container w-screen h-full mx-auto ">
        <Navbar/>
        <Hero/>
        <Categories/>
      <Footer/>
      </main>
    </div>    
  )
}