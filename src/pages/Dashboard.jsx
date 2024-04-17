import React from "react";
import bg1 from "../assests/pngs/bg1.jpg";
import Cards from "../components/Cards";
import Hero from "../components/Hero.jsx";
import Carddetails from "../components/Carddetails.jsx";
import Cardresult from "../components/Cardresult.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useState } from "react";
import mainpage from "../assests/videos/mainpage.mp4";

const Home = () => {
  const [mod, setMod] = useState(false);

  return (
    <div>
      {/* <div className='bg-center bg-cover' style={{backgroundImage: url(${bg1})
      }}>
        <SearchBar />
        <Cards />
      </div> */}
      <div>
        <video
          src={mainpage}
          autoPlay
          loop
          muted
          className="w-[100%] h-[100vh] object-cover"
        ></video>
        <div className="absolute top-20 sm:top-32 w-[100%] h-[100%]">
          <SearchBar />
          <Cards />
        </div>
      </div>
      <div>
        <Hero />
        <Carddetails mod={mod} setMod={setMod} />
        <Cardresult mod={mod} setMod={setMod} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;