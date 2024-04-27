// import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";
import { Context } from "./StateContext";
import { useParams } from "react-router-dom";
export default function TourPackageBooking() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {id}=useParams();
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState(false)
  let [strr,setStrr]=useState('');
  const [description, setDescription] = useState('');
  let [perks, setPerks] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [cost,setCost] = useState(100);
  const [img, setImg] = useState();
  useEffect(()=>{
    fetch("http://localhost:4000/package-list/"+id,{
      headers:{
        authorization:"bearer "+JSON.parse(localStorage.getItem('token'))
      }
    }).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
        setImg(result.img);
        setDescription(result.description);
        setExtraInfo(result.extraInfo);
        setMaxGuests(result.maxGuests);
        setCost(result.cost);
        setStrr(result.strr)
        setPerks([result.strr.split(',')].flatMap((i)=>i));
  
  
      })
    })
  },[])
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [place,setPlace] = useState('place');
  const {startDate}:any = Context()
  const {endDate}:any = Context()
const photo='/public/skardu.jpg'
    
  return (
    <div className="mt-4 bg-gray-100  px-8 pt-8 justify-center ">
      <h1 className="text-3xl">
        {/* {place.title} */}
        
         {name} trip
        </h1>
      <AddressLink>
        {/* {place.address} */}
        {price}
        </AddressLink>
      <PlaceGallery photo={img} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl ">Description</h2>
            {/* {place.description} */}
       {description}


          </div>
          <div className="font-bold">
          Departure: 
          {/* {place.checkIn} */}
          {startDate ? `${startDate.toLocaleDateString()} ` : ``}
          <br />
          Arrival: 
          {endDate ? `${endDate.toLocaleDateString()} ` : ``}
          {/* {place.checkOut} */}
         
          <br />
          Max number of persons:
         {maxGuests}      {/* {place.maxGuests} */}
          </div>
    
        </div>
        <div>
          {console.log("cost",cost)}
          <BookingWidget cost={cost} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          {extraInfo}
          </div>
                <div className="font-bold flex">
            Perks:{perks.toString()}
          </div>
      </div>
    </div>
  );
}
