import Navbar from "./components/navbar/Navbar.tsx";
import MobileNavbar from "./components/navbar/MobileNavbar.tsx";
import Home from "./components/home/Home.tsx";
import Property from "./components/property/Property.tsx";
import Services from "./components/services/Services.tsx";
import Contact from "./components/contact/Contact.tsx";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="navbar">
          <Navbar />
          <MobileNavbar />
        </div>
        <Home />
      </main>
      <section className="section-cotainer" id="property">
        <Property />
      </section>
      <section className="section-cotainer" id="services">
        <Services />
      </section>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
