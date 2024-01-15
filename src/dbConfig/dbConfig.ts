import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.DATABASE_URL!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("DATABASE Connected Successfully")
        })
        
        connection.on('error',(err)=>{
            console.log("Connection Error! Please Make Sure Mongo is Connected Successfully" +err)
            process.exit()
        })

    }catch(error){
        console.log("Something went wrong !")
        console.log(error)
    }
}