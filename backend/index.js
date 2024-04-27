require("./config")
const Package = require("./Package")
const Car = require("./Car")
const Hotel=require("./Hotels")
const Guide=require("./Guide")
const User = require("./User")
const express = require("express");
const cors = require("cors");
const stripe=require("stripe")("sk_test_51NWaa1ELjlQVNZy6cUNpnJzKAInJFv9328LUdZk9PHkE92P2L1j68XAB1i7gw5UiL5f95GvjJK8hGZ5FqhvMZ58l00IAgmUx7d")
const path = require("path")
const app = express();
const mongoose = require('mongoose');
const { PythonShell } = require('python-shell');

app.use(express.json())
app.use(cors())

// Define a function to call the Python script
function getRecommendedCities(inputCity,callback) {
  let options = {
    mode: 'text',
    pythonPath: 'python', // Change this to your Python executable path if necessary
    pythonOptions: ['-u'], // get print results in real-time
    args: [inputCity]
  };

  PythonShell.run('recommend_cities.py', options).then( results =>{
   
    console.log(results)
    console.log('python script finished')
    callback(null, results)

})  .catch(err => {
  console.error('Error:', err);
  callback(err);
});
}

app.get("/", async (req, resp) => {
  const inputCity = req.body.place;

if (inputCity) {
    getRecommendedCities(inputCity, function(err, results) {
        if (err) {
            console.error(err);
            // resp.status(500).send("Internal Server Error");
        } else {
            resp.send(results);
            console.log("machine learining results: " ,results)
        }
    });

   
} 

});



app.post("/login", async (req, resp) => {
  const result = await User.findOne(req.body);
  if (req.body.email && req.body.password) {
    if (result) {
      console.log(result)
      resp.send(result)
    } else {
      resp.send({ result: "plz check both email and password" })
    }
  } else {
    resp.send({ result: "enter both email and password" })
  }
})
app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  if (req.body.email && req.body.password && req.body.name) {
    if (result) {
      resp.send(result)
    } else {
      resp.send({ result: "something went wrong" })
    }
  } else {
    resp.send({ result: "Fill all fields" })
  }
})


app.post("/add-package", async (req, resp) => {
  let package = new Package(req.body);
  let result = await package.save();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "package not added" })
  }
})

app.post("/add-car", async (req, resp) => {
  let car = new Car(req.body);
  let result = await car.save();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "Car not added" })
  }
})
app.post("/add-hotel", async (req, resp) => {
  let hotel = new Hotel(req.body);
  let result = await hotel.save();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "Hotel not added" })
  }
})
app.post("/add-guide", async (req, resp) => {
  let guide = new Guide(req.body);
  let result = await guide.save();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "Hotel not added" })
  }
})

app.get("/package-list", async (req, resp) => {
  const result = await Package.find();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "No Packages found" })
  }
})
app.get("/car-list", async (req, resp) => {
  const result = await Car.find();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "No Cars found" })
  }
})
app.get("/hotel-list", async (req, resp) => {
  const result = await Hotel.find();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "No Hotels found" })
  }
})
app.get("/guide-list", async (req, resp) => {
  const result = await Guide.find();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "No Guides found" })
  }
})



app.get("/package-list/:id", async (req, resp) => {
  let result = await Package.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  }
  else if (!result) {
    resp.send({ "result": "No Product with this id" })
  }
})
app.get("/car-list/:id", async (req, resp) => {
  let result = await Car.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  }
  else if (!result) {
    resp.send({ "result": "No Car with this id" })
  }
})
app.get("/hotel-list/:id", async (req, resp) => {
  let result = await Hotel.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  }
  else if (!result) {
    resp.send({ "result": "No Hotel with this id" })
  }
})
app.get("/guide-list/:id", async (req, resp) => {
  let result = await Guide.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  }
  else if (!result) {
    resp.send({ "result": "No Guide with this id" })
  }
})
app.put("/package-list/:id", async (req, resp) => {
  let result = await Package.updateOne({ _id: req.params.id }, { $set: req.body })
  resp.send(result)
})
app.put("/car-list/:id", async (req, resp) => {
  let result = await Car.updateOne({ _id: req.params.id }, { $set: req.body })
  resp.send(result)
})
app.put("/hotel-list/:id", async (req, resp) => {
  let result = await Hotel.updateOne({ _id: req.params.id }, { $set: req.body })
  resp.send(result)
})
app.put("/guide-list/:id", async (req, resp) => {
  let result = await Guide.updateOne({ _id: req.params.id }, { $set: req.body })
  resp.send(result)
})
app.delete("/package-list/:id", async (req, resp) => {
  let result = await Package.deleteOne({ _id: req.params.id })
  resp.send(result)
})
app.delete("/car-list/:id", async (req, resp) => {
  let result = await Car.deleteOne({ _id: req.params.id })
  resp.send(result)
})
app.delete("/hotel-list/:id", async (req, resp) => {
  let result = await Hotel.deleteOne({ _id: req.params.id })
  resp.send(result)
})
app.delete("/guide-list/:id", async (req, resp) => {
  let result = await Guide.deleteOne({ _id: req.params.id })
  resp.send(result)
})

app.get("/search/:key", async (req, resp) => {
  let result = await Package.find({
    "$or": [
      {
        name: { "$regex": req.params.key }
      },
      {
        price: { "$regex": req.params.key }
      }
    ]
  })
  resp.send(result)
})
app.get("/searchCar/:key", async (req, resp) => {
  let result = await Car.find({
    "$or": [
      {
        name: { "$regex": req.params.key }
      },
      {
        price: { "$regex": req.params.key }
      }
    ]
  })
  resp.send(result)
})
app.get("/searchHotel/:key", async (req, resp) => {
  let result = await Hotel.find({
    "$or": [
      {
        name: { "$regex": req.params.key }
      },
      {
        price: { "$regex": req.params.key }
      }
    ]
  })
  resp.send(result)
})
app.get("/searchGuide/:key", async (req, resp) => {
  let result = await Guide.find({
    "$or": [
      {
        name: { "$regex": req.params.key }
      },
      {
        price: { "$regex": req.params.key }
      }
    ]
  })
  resp.send(result)
})

app.post("/create-checkout-session", async (req, resp) => {
  const { cart } = req.body; // Assuming your request body contains a 'cart' array

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart.map(item => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe expects price in cents
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: "http://localhost:5173/",
    cancel_url: "http://localhost:5173/",
  });

  resp.json({ id: session.id });
});

  // --------------stripe code here starts-----------------
// app.post("/create-checkout-session",async(req,resp)=>{
//   const {products}=req.body;
//   const lineItems=products.map((product)=>({
//     price_data:{
//       currency:"usd",
//       product_data:{
//         name:"hamza"
//       }
//     },
//     quantity:"5kg"

//   }))
// })


// const session=await stripe.checkout.sessions.create({
//   payment_method_types:["card"],
//   line_items:lineItems,
//   mode:"payment",
//   success_url:"",
//   cancel_url:""
// })
// resp.json({id:session.id
// })


  // --------------stripe code here ends-----------------

// app.post("/image-upload", upload, (req, resp) => {
//   Image.create({ image: req.file.filename }).then((result) => resp.json(result)).catch((err) => console.log(err))
// })
// app.get('/getImage', (req, resp) => {
//   Image.find().then((result) => resp.json(result)).catch((err) => resp.json(err))
// })

app.listen(4000)