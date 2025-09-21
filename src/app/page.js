'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect , useRef , useState } from "react";


export default function Home() {
  const scroll = useRef(null);
  const [isAtStart, setAtStart] = useState(false);
  const [isAtEnd, setAtEnd] = useState(false);

  useEffect(() =>{
  const element = scroll.current;
    element.scrollLeft = 500;
    const handleScroll = () =>{
      if(!element) return
      setAtStart(element.scrollLeft <= 0);
      setAtEnd(element.scrollLeft + element.clientWidth >= element.scrollWidth)
    }
      handleScroll();
      element.addEventListener('scroll',handleScroll);
      return () => element.removeEventListener('scroll',handleScroll);
  },[])
  const scrollLeft = () =>{
    const element = scroll.current
    element.scrollLeft -= 250;
  }
  const scrollRight = () =>{
    const element = scroll.current;
    element.scrollLeft += 250;
  }
  
  return (
    <>
      <main className="bg-purple-500">
        <div className="text-center">
          <br /><br /><br /><br /> <br /><br />
          <p className="font-extrabold text-5xl md:text-6xl fade-in">Welcome to φ ξ χ,</p>
          <p className="font-bold text-3xl md:text-4xl m-8 fade-in">An online Physics Courses platform</p> 
        </div>
         <Image className="fade-in mx-auto my-10" src='/Physics.png' width={400} height={400} alt='physics logo'/>
         <br /><br />
          <div className="bg-purple-600">
            <div className="mx-auto w-8/10 p-8 flex justify-between">
              <div className="flex flex-col items-center md:items-start">
                 <span className="text-2xl font-medium">Well-Structured curriculum</span>
                <p className="m-8 max-w-6xl text-center md:text-start">Our curriculum is thoughtfully designed to guide learners from foundational principles to advanced topics with clarity and purpose. Each course follows a logical progression, 
                  starting with essential concepts and gradually building toward deeper, more complex ideas. Lessons are organized into digestible modules, 
                  ensuring learners never feel overwhelmed.
                </p>
              </div>
              <Image  className=' hidden md:block m-5' src='/online-course.png'  width={200} height={200} alt='structured curriculum' />
            </div>
          </div>
          <div className="bg-purple-500">
            <div className="mx-auto w-8/10 p-8 flex justify-between">
              <div className="flex flex-col items-center md:items-start">
                 <span className="text-2xl font-medium">Interactive Experiments</span>
                <p className="m-8 max-w-6xl text-center md:text-start">Physics comes alive when you can see it in action. 
                  Our platform integrates interactive experiments and simulations that transform abstract equations into intuitive, visual experiences. From electric fields to fluid dynamics, learners can manipulate variables, observe outcomes in real time,
                   and develop a deeper, more intuitive grasp of physical laws.
                </p>
              </div>
              <Image  className='translate-x-10 m-5 hidden md:block ' src='/tesla-coil.png'  width={200} height={200} alt='Tesla coil' />
            </div>
          </div>
          <div className="bg-purple-800">
            <div className="mx-auto w-8/10 p-8 flex justify-between">
              <div className="flex flex-col items-center md:items-start">
                 <span className="text-2xl font-medium">Challenging Problems</span>
                <p className="m-8 max-w-6xl text-center md:text-start">Mastery comes from doing — not just watching. Each course is packed with thoughtfully designed problems that challenge your understanding and push you to apply concepts in novel ways. 
                  From multi-step derivations to conceptual brain teasers, these exercises are crafted to reinforce learning, sharpen problem-solving skills, and build true confidence.
                   Whether you're preparing for exams or simply want to test your knowledge, our problem sets turn passive learning into active engagement.
                </p>
              </div>
              <Image  className=' m-5 hidden md:block' src='/puzzle.png'  width={200} height={200} alt='puzzle' />
            </div>
          </div>
         <div className="mx-auto">
          <br /><br /><br /><br />
            <div className="mx-auto w-8/10 flex items-center gap-10" title="courses">
              <button className="hidden sm:block p-6 bg-purple-700 rounded-full" onClick={() => scrollLeft()}>
                 <div className="w-6 h-6 border-t-6 border-r-6 -rotate-135 translate-x-1" style={{borderColor:isAtStart?'#B1B1B1':'white'}}></div>
              </button>
            <div>
            <span className="text-2xl font-medium">Explore our courses</span>
            <Link href='\courses'>
            <div className="flex  overflow-x-scroll gap-5 mt-10" id="scrollbar" ref={scroll}>
               <Image className="course" src='/Mechanics.png'  width={250} height={250} alt="mechanincs logo" title="mechanics"/>
              <Image  className="course" src='/Optics.png' width={250} height={250} alt="optics logo" title="optics"/>
              <Image  className="course" src='/Electromagnetism.png' width={250} height={250} alt="electromagnetism logo" title="electromagnetism"/>
              <Image  className="course" src='/relativity.png' width={250} height={250} alt="relativity logo" title="relativity"/>
              <Image  className="course" src='/Thermodynamics.png' width={250} height={250} alt="thermodynamics logo" title="thermodynamics"/>
              <Image  className="course" src='/Aerodynamics.png' width={250} height={250} alt="aerodynamics logo"/>
              <Image  className="course" src='/waves.png' width={250} height={250} alt="oscillations and waves logo"/>
              <Image  className="course" src='/Quantum.png' width={250} height={250} alt="quantum physics logo"/>
            </div>
            </Link> 
            </div>
              <button className="hidden sm:block p-6 bg-purple-700 rounded-full" onClick={() => scrollRight() }>
                 <div className="w-6 h-6 border-t-6 border-r-6 rotate-45  -translate-x-1" style={{borderColor:isAtEnd?'#B1B1B1':'white'}}></div>
              </button>
            </div>
         </div>
      </main> 
    </>
  );
}
