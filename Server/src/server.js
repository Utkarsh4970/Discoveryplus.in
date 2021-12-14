const express = require("express")
const connect = require("./config/db")

const app = express()

const port = process.env.PORT || 3535;

app.use(express.json())
//controllers
const BestController = require("./controllers/BestController")
const FavhindiController = require("./controllers/FavhindiController")
const showloveController =require("./controllers/ShowloveController")
const FavtamilController = require("./controllers/FavtamilController")
const FreestreamController = require("./controllers/FreestreamController")
const IndioriginController =require("./controllers/IndiaoriginController")

const SuperstarController =require("./controllers/SuperstarController")
const newlyaddedController =require("./controllers/NewlyaddedController")
app.use("/Superstar", SuperstarController )
app.use("/Newlyadded", newlyaddedController )
app.use("/Favtamil", FavtamilController)
app.use("/Freestream", FreestreamController )
app.use("/Indiorigin", IndioriginController )
app.use("/best", BestController)
app.use("/Favhindi", FavhindiController )
app.use("/showlove", showloveController )

app.listen(port, async () => {

    await connect();

    console.log(`listening to ${port}`)
    
})