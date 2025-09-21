'use client'
import { useState,useEffect } from "react";
import Image from "next/image"
import Menubar from "@/components/Menubar";

export default function mechanics(){
    const [Progress,updateProgress] = useState(0);
    const handleProgress = (e) => {
        e.preventDefault;
        if(e.target.checked){
            updateProgress((prev) => prev + 1);
        }else{
            updateProgress((prev) => prev - 1);
        }
    }
    const [menubar, setMenubar ] = useState(false);
    const handleMenu = () =>{
        setMenubar(!menubar)
    }
    return(
    <main className="bg-purple-500">
        <br></br><br></br><br></br>
     
            <div className="flex items-center gap-4 px-4">
                <div className="bg-purple-900 my-2 w-9/10 h-4  rounded-2xl inline-block">
                <div className="bg-amber-400 h-4 rounded-2xl transition-transform" style={{width:Math.ceil(Progress*100/22)+'%' , transition: 'width 0.5s ease'}}/>
            </div>
            <div className="inline-block">{Math.ceil(Progress*100/22)}%</div>
            </div>
        <div className="flex justify-between">
            <section className="w-3/4 bg-purple-500">
                <div className="w-full">Video</div>
            </section>
            <section className="w-1/4 bg-purple-800 rounded-tl-xl overflow-auto">
                <div className="p-3 m-0 flex items-center">
                    <Image className="justify-self-start rounded-2xl" src='/Mechanics.png'  width={100} height={100} alt="mechanincs logo" title="mechanics"/>
                    <span className="text-3xl ml-5 text-amber-400">Mechanics</span>
                </div>
                <ul>
                    <li className="flex justify-between text-xl p-2">
                        <div>Kinematics</div>
                        <button  onClick={() => handleMenu()}>
                            <div className="bg-white p-2 rounded-full" style={{transform:menubar?'rotate(-180deg)':'rotate(0)',transition:'transform 0.5s ease'}}>
                                <div className="border-t-4 border-r-4 w-3 h-3 border-purple-500 rotate-135"/>
                            </div>
                        </button>
                    </li>
                    {menubar&&
                        <ul className="bg-purple-600 py-2">
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Postion, Distance and Displacement</span>
                                <input className="checkbox" type="checkbox" id='1' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Velocity and Speed</span>
                                <input className="checkbox" type="checkbox"  id='2' onChange={(e) => handleProgress(e) }/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Equations of motion</span>
                                <input className="checkbox" type="checkbox" id='3' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Projectiles</span>
                                <input className="checkbox" type="checkbox" id="4" onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Coordinate systems</span>
                                <input className="checkbox" type="checkbox" id='5' onChange={(e) => handleProgress(e)}/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>transformation between coordinate systems</span>
                                <input className="checkbox" type="checkbox" id='6' onChange={(e) => handleProgress(e)} />
                            </li>
                        </ul>
                }
                <Menubar title='Kinetics'>
                                            <ul className="bg-purple-600 py-2">
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Force</span>
                                <input className="checkbox" type="checkbox" id='1' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Newton's First law of motion</span>
                                <input className="checkbox" type="checkbox"  id='2' onChange={(e) => handleProgress(e) }/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Newton's Second law of motion</span>
                                <input className="checkbox" type="checkbox" id='3' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Newton's Third law of motion</span>
                                <input className="checkbox" type="checkbox" id="4" onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Static and Kinetic Friction</span>
                                <input className="checkbox" type="checkbox" id='5' onChange={(e) => handleProgress(e)}/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Rigid body motion in 2D</span>
                                <input className="checkbox" type="checkbox" id='6' onChange={(e) => handleProgress(e)} />
                            </li>
                        </ul>
                </Menubar>
                <Menubar title='Impulse and Momentum'>
                                      <ul className="bg-purple-600 py-2">
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Linear Impulse and Momentum</span>
                                <input className="checkbox" type="checkbox" id='1' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Conservation of Linear Momentum for a System of Particles</span>
                                <input className="checkbox" type="checkbox"  id='2' onChange={(e) => handleProgress(e) }/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Impact</span>
                                <input className="checkbox" type="checkbox" id='3' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Angular Momentum</span>
                                <input className="checkbox" type="checkbox" id="4" onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Relation between Moment of a Force and Angular Momentum</span>
                                <input className="checkbox" type="checkbox" id='5' onChange={(e) => handleProgress(e)}/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Principle of Angular Momentum and Impulse</span>
                                <input className="checkbox" type="checkbox" id='6' onChange={(e) => handleProgress(e)} />
                            </li>
                        </ul>
                </Menubar>
                                <Menubar title='Work and Energy'>
                                      <ul className="bg-purple-600 py-2">
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>The Work of a Force</span>
                                <input className="checkbox" type="checkbox" id='1' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Principle of Work and Energy</span>
                                <input className="checkbox" type="checkbox"  id='2' onChange={(e) => handleProgress(e) }/>
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Power and Effeciency</span>
                                <input className="checkbox" type="checkbox" id='3' onChange={(e) => handleProgress(e)} />
                            </li>
                            <li className="flex justify-between my-2 text-xs bg-amber-400 p-2 rounded-2xl w-95/100 mx-auto">
                                <span>Conservative Forces and Potential Energy</span>
                                <input className="checkbox" type="checkbox" id="4" onChange={(e) => handleProgress(e)} />
                            </li>
                        </ul>
                </Menubar>
                </ul>
            </section>
        </div>
        
    </main>)
}