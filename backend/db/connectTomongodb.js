import mongoose from 'mongoose'


 const connectTomongodb = async() => {
  try{
    await mongoose.connect(process.env.MONGO_DB_URI,)
    console.log("COnnected to MongoDb")
  }
  catch(error){
    console.log("Error connecting to Mongodb",error.message)
  }
}

export default connectTomongodb