import Form from "@/components/Form";

export default function Ops(){
    return(
        <main className="h-screen flex justify-center ">
            <div className="flex flex-col w-full items-center max-w-[550px] ">
            <div className="px-2 mt-10 w-full">
                <h1 className="text-4xl font-bold mb-3">OOOpss</h1>
                <p className="font-medium">Estamos sem cupons disponíveis</p>
                <p className="font-medium">Deixe seu email para avisarmos quando tiverem disponível</p>
            </div>
            <div className="px-2 w-full">
                <Form/>
            </div>
            </div>
          
        </main>
    )
}