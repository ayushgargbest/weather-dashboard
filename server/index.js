const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const weatherRoute=require("./routes/weather");
const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/weather',weatherRoute);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})