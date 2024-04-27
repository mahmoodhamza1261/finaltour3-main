import React from 'react'

const FallIntoTravel = ({
  heading,
  title,
  details,
  description1,
  description2,
  description3,
  description4,
  i1,
  i2,
  i3,
  i4
}:any) => {

  // const handleClick=()=>{
   
  // }
  return (
    <div>

       <div className=" mt-20 mb-20 ">
       <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
            <b className="relative tracking-[0.2em] uppercase text-secondarycolor">{heading}</b>
            <b className="relative text-29xl  text-black md:w-[469px] inline-block md:whitespace-nowrap mb-8">
            {title}
            </b>
          </div>
         
    {/* <p className="h-9 self-stretch text-[40px] font-bold mb-7  ">{heading}</p> */}
<div className="flex flex-col md:flex-row md:gap-x-10 gap-y-6 mt-[25px]">
<div>
<img src={i1} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl "/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold  rounded-lg ">{description1}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4 ">{details}</button>

</div>
<div>
<img src={i2} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold  ">{description2}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4">{details}</button>

</div>
<div>
<img src={i3} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold  ">{ description3}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4">{details}</button>

</div>
<div>
<img src={i4} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="text-white text-[24px] -mt-10 ml-2 font-extrabold ">{  description4}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4 font-medium" >{details}</button>

</div>


</div>


  </div>
    </div>
   
  )
}

export default FallIntoTravel