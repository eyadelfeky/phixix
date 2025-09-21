import Image from "next/image"
import Link from "next/link"

export default function courses(){
    return(
        <main className="bg-purple-500">
        <br /><br /><br /><br />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto w-8/10 courses-container">
          <Link href='\courses\Mechanics'>
            <div className="flex flex-col sm:flex-row items-center bg-[#1F66FF] overflow-hidden">  
                <Image className="course" src='/Mechanics.png'  width={250} height={250} alt="mechanincs logo" title="mechanics"/>
                <span className="mx-12 mb-4 text-3xl">Mechanics</span>
            </div>
          </Link>
            <div className="flex flex-col sm:flex-row items-center bg-[#320E3B] overflow-hidden">
                    <Image  className="course" src='/Optics.png' width={250} height={250} alt="optics logo" title="optics"/>
                    <span className="mx-12 mb-4 text-3xl">Optics</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-[#B0413E] overflow-hidden">  
                <Image  className="course" src='/Electromagnetism.png' width={250} height={250} alt="electromagnetism logo" title="electromagnetism"/>
                <span className="mx-12 mb-4 text-3xl">Electromagnetism</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-[#051923] overflow-hidden">  
                <Image  className="course" src='/relativity.png' width={250} height={250} alt="relativity logo" title="relativity"/>
                <span className="mx-12 mb-4 text-3xl">Relativity</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-[#9FB798] overflow-hidden">  
                <Image  className="course" src='/Thermodynamics.png' width={250} height={250} alt="thermodynamics logo" title="thermodynamics"/>
                <span className="mx-12 mb-4 text-3xl">Thermodynamics</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-[#FDE74C] overflow-hidden">  
                <Image  className="course" src='/Aerodynamics.png' width={250} height={250} alt="aerodynamics logo"/>
                <span className="mx-12 mb-4 text-3xl">Aerodynamics</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-[#84DCC6] overflow-hidden">  
                <Image  className="course" src='/waves.png' width={250} height={250} alt="oscillations and waves logo"/>
                <span className="mx-12 mb-4 text-3xl">Oscillations and Waves</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center bg-[#283D3B] overflow-hidden">  
                <Image  className="course" src='/Quantum.png' width={250} height={250} alt="quantum physics logo"/>
                <span className="mx-12 mb-4 text-3xl">Quantum physics</span>
            </div>
          </div>
         </main>
    )
}