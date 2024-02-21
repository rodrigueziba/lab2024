// components
import { Navbar, Footer } from "@/components";
import FetchData from "./fetchData";
import FetchDataCard from "./fetchDataCard";
import SendData from "./sendData";
import VideoIntro from "./video-intro";
// sections
import Hero from "./hero";
import Feature from "./feature";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <VideoIntro />
      <div className="container mx-auto mt-4">
      <FetchDataCard />
      </div>
      <div className="container mx-auto mt-4">
      <FetchData />
      </div>
      <div className="container mx-auto mt-4"><SendData /></div>
      
    
      
      <Footer />
    </>
  );
}
