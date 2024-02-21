// components
import { Navbar, Footer } from "@/components";
import FetchData from "./fetchData";
import SendData from "./sendData";

// sections
import Hero from "./hero";
import Feature from "./feature";

export default function Campaign() {
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto mt-4">
      <FetchData />
      </div>
      <div className="container mx-auto mt-4"><SendData /></div>
      
    
      
      <Footer />
    </>
  );
}
