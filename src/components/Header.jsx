import Image from "next/image";

export default function Header(){
    return(
        <header className="p-2 shadow sticky top-0 bg-white w-full ">
            <div className="relative h-12 w-12">
                <Image
                src="/logo.svg"
                alt="Logo"
                layout="fill"
                />
            </div>
        </header>
    )
}