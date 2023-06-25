const mongoose=require('mongoose')

async  function  databaseConnection(){


mongoose.set("strictQuery", false);

try{
await mongoose.connect("mongodb+srv://gurpreetsingh:Shalu%401999@cluster0.apn6ahn.mongodb.net/?retryWrites=true&w=majority")
console.log("mongoDb connected")

}catch(error){
console.log(err)

}


}

module.exports=databaseConnection