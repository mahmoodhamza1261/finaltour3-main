// import React from "react";
// // import Header from "../components/layout/Header";
// import TravelForm from "./TravelForm";
// import FallIntoTravel from "./FallIntoTravel";
// // import MyFooter from "./MyFooter";
// import mainimage from '../../public/main5.jpg'
// import TourPackageInfo from "./TourPackageinfo";
// import AboutUs from "./AboutUs";

// function Home() {
//   return (
   
 
//     <div className="">
  
//      <div className="">
//         <div className="">
//         <p className='absolute top-[150px] font-bold z-10 mx-[400px] text-normal md:text-4xl text-white   '>Trips, Hotels, Rentals & more.<br></br>
// Your Trip Starts Here</p>
//          <img src={mainimage} alt="Heroposter" className=" w-full h-[600px] object-cover"/>
//          </div>
     
//       <div className=" absolute top-[250px] ">
//         <TravelForm />
//       </div>
 
//       </div>
//       <div className="mx-[100px]">
//      {/* <AboutUs/> */}
//       {/* <TourPackageInfo/> */}
//       <FallIntoTravel
//       heading={"Top Tour Packages"}
//       details={"Book Tour"}
//       description1={" Isb-Chitral"}
//       description2={"Isb-Skardu"}
//       description3={"Isb-kaghan"}
//       description4={"Isb-Pirchinasi"}
//       i1={'/public/chitral.jpg'}
//       i2={'/public/skardu.jpg'}
//       i3={'/public/swat.jpg'}
//       i4={'/public/Attabad.jpg'}
//       />
//       <FallIntoTravel
//       heading={"Top Hotels"}
//       details={"Book Hotel"}
//       description1={"Skardu Hotel"}
//       description2={"Skardu Hotel"}
//       description3={"Skardu Hotel"}
//       description4={"Skardu Hotel"}
//       i1={'/public/hotel.jpeg'}
//       i2={'/public/hotel.jpeg'}
//       i3={'/public/hotel.jpeg'}
//       i4={'/public/hotel.jpeg'}
//       />
//       <FallIntoTravel
//       heading={"Top Car Bookings"}
//       details={"Book Car"}
//       description1={"Isb-Honda Civic"}
//       description2={"Isb-Honda Civic"}
//       description3={"Isb-Honda Civic"}
//       description4={"Isb-Honda Civic"}
//       i1={'../../public/civic.jpg'}
//       i2={'../../public/civic.jpg'}
//       i3={'../../public/civic.jpg'}
//       i4={'../../public/civic.jpg'}
//       />
    
 
//       </div>
//     </div>
   
   
//   );
// }

// export default Home;















import React, { useEffect } from "react";
// import Header from "../components/layout/Header";
import TravelForm from "./TravelForm";
import FallIntoTravel from "./FallIntoTravel";
// import MyFooter from "./MyFooter";
import mainimage from '../../public/mountain.jpg'
import AboutUs from "./AboutUs";
import Services from "./Services";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
   
 
    <div className="">
      {/* <Header/> */}
     <div className="">
        <div className=" ">
                 <p className='absolute top-[150px] font-bold  md:mx-[400px] text-xl md:text-4xl text-white   '>Trips, Hotels, Rentals & more.<br></br>
 Your Trip Starts Here</p>
         <img src={mainimage} alt="Heroposter" className=" w-full h-[600px] object-cover"/>
         </div>
     
      <div className=" absolute top-[250px]  left-1 right-1">
        <TravelForm />
      </div>
 
      </div>
     <div className="mx-2 md:ml-[70px]">
     <FallIntoTravel
      heading={"Top Rated Tour Packages"}
      title={"Unforgettable Adventures"}
      details={"Book Tour"}
      description1={" Isb-Chitral"}
      description2={"Isb-Skardu"}
      description3={"Isb-kaghan"}
      description4={"Isb-Pirchinasi"}
      i1={'/public/chitral.jpg'}
      i2={'/public/skardu.jpg'}
      i3={'/public/swat.jpg'}
      i4={'/public/Attabad.jpg'}
      />
      <AboutUs/>
      <FallIntoTravel
      heading={"Top Rated Hotels"}
      title={"Luxury Residences"}
      details={"Book Hotel"}
      description1={"Skardu Hotel"}
      description2={"Skardu Hotel"}
      description3={"Skardu Hotel"}
      description4={"Skardu Hotel"}
      i1={'/public/hotel.jpeg'}
      i2={'/public/hotel.jpeg'}
      i3={'/public/hotel.jpeg'}
      i4={'/public/hotel.jpeg'}
      />
      <Services/>
    
      
      <FallIntoTravel
      heading={"Top Rated Car Rentals"}
      title={"Drive with Excellence"}
      details={"Book Car"}
      description1={"Isb-Honda Civic"}
      description2={"Isb-Honda Civic"}
      description3={"Isb-Honda Civic"}
      description4={"Isb-Honda Civic"}
      i1={'../../public/civic.jpg'}
      i2={'../../public/civic.jpg'}
      i3={'../../public/civic.jpg'}
      i4={'../../public/civic.jpg'}
      />
    </div>

 
      
    </div>
   
   
  );
}

export default Home;