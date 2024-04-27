import React from "react";
import mailbox from "/public/mailbox.svg";

import fb from "/public/fb.svg";
import instagram from "/public/instagram.svg";
import twitter from "/public/twitter.svg";
import youtube from "/public/youtube.svg";
const MyFooter = () => {
  return (
    <div className="bg-primarycolor w-fit md:w-full   ">
    <div className="mt-[240px] md:mx-[70px] ">
      <div className=" relative rounded-[20px] bg-secondarycolor  min-w-[350px] -top-[160px] mx-2 md:mx-0   ">
        <div className="md:ml-[24px] flex flex-row justify-between">
          <div>
            <p className="relative w-[100px] md:w-[364px]  text-[44px] leading-[54px] font-bold top-5 text-white  ">
              Subscribe Newsletter
            </p>
            <p className="mt-[24px] text-[20px] font-bold  text-white">
              {" "}
              The Travel
            </p>
            <p className="mt-[8px] text-white ">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className="flex mt-[24px]">
              <div className="max-w-[450px] mb-4">
                <input
                  placeholder="  Your Email Address"
                  className="h-[50px]  md:min-w-[250px] min-w-fit  mr-3 rounded-md "
                />
              </div>
              <button className="mb-4  text-sm font-semibold bg-[#112211] z-10 py-[12px] px-[16px] md:py-[16px] md:px-[20px] rounded-[4px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="invisible md:visible">
            <img src={mailbox} alt="mailbox" />
          </div>
        </div>
      </div>

  
    </div>

        <div className=" relative grid md:grid-cols-6 grid-cols-3 -top-12 mx-2 md:ml-[70px] ">
        <div className="flex flex-col space-y-7 ">
          <div className="flex items-center gap-1">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 hidden md:visible">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
     
        <span className="font-bold text-xl">TourMyPak</span>
    
          </div>
          <div className="flex space-x-2">
            <img src={fb} alt="fb icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            {" "}
            Our Destinations
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Canada
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            France
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Iceland
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            England
          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px] font-bold">
            
            Our Activities
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px]  ">
            Northern Lights
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Cruising & sailing
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Multi-activities
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Kayaing
          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            Travel Blogs
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Bali Travel Guide
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Sri Lanks Travel Guide
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Peru Travel Guide
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Bali Travel Guide
          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            About Us
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Our Story
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Work with us
          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
          Contact Us
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          Our Story
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          Work with us
          </p>
        
        </div>
      </div>
      </div>
  );
};

export default MyFooter;