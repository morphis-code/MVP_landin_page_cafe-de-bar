import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.CONNECTION

export async function POST(req){
    try{
        const client = new MongoClient(MONGO_URI)
        await client.connect()
        const db = client.db("rezeenha")
        const collection = db.collection("users")


        const data = await req.json()

        if(!data.nome || !data.email || !data.idade){
            return NextResponse.json({error:"Todos os campos não foram preenchidos"}, {status:400})
        }

        await collection.insertOne({data})
        await client.close()

        return NextResponse.json({message:"Dados Salvos"}, {status:200})


    }catch(error){
        return NextResponse.json({error:"Erro ao salvar os dados"}, {status:500})
    }
}