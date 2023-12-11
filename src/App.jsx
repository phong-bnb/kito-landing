import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import ProudOf from "./components/ProudOf";
import Footer2 from "./components/foot2";
import Header from "./components/contents/Header";
import HeaderOne from "./components/header/header";
import Headermobie from "./components/headermobi";

function App() {
  return (
    <div>
      <div className="tb:block hidden">
        <HeaderOne />
        <Header />
      </div>
      <div className="tb:hidden">
        <Headermobie/>

      </div>

      <div className="flex flex-col tb:w-[1460px] m-auto tb:bg-inherit bg-gray ">
        <AboutUs />
        <ProudOf />
        <OurTeam />
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
