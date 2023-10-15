import connectToDB from "@/lib/db";
import City from "@/lib/models/cityModel";
import ts from "typescript";

export async function GET(req:Request){
     try {
        // Use your bus model to get all buses
        await connectToDB();
        const url = new URL(req.url);
        const city = url.searchParams.get('q');
        console.log(city)
        const buses = await City.findOne({name:city});
        // console.log(buses)/
        return new Response(JSON.stringify(buses), {status:200}); 
    } catch (err) {
        // Send an error response if there was an issue getting the buses
        // @ts-ignore
        return new Response(JSON.stringify({msg: err.message}), {status: 500});
    }
}