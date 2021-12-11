const mongoose = require('mongoose') 
 
const connectDB = async()=>{  
  try{
      
        const URI = 'mongodb+srv://mahadeva:mahadeva@cluster0.xu12m.mongodb.net/StudentDetails?retryWrites=true&w=majority'
        const con = await mongoose.connect(URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`connected to DB... ${con.connection.host}`)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectDB