import Banner from "@/components/Banner";
import Link from "next/link";

export default function Thanks(){
    return(
        <main className="flex h-screen justify-center mt-32">
            <div className="flex flex-col items-center">
                <Banner/>
                <div className="flex flex-col items-center px-5">   
                    <h1 className="text-2xl text-center font-medium">Obrigado por fazer parte da família</h1>
                    <h1 className="text-3xl font-bold mb-5">Café de Bar</h1>
                    <Link href="/" className="w-full"><button className="text-white bg-black w-full p-2 font-medium rounded-xl cursor-pointer">Voltar Home</button></Link>
                </div>

            </div>
        </main>
    )
}