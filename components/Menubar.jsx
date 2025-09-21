import { useState } from "react";

const Menubar = ({title,children}) => {
   const [menubar, setMenubar ] = useState(false);
   const handleMenu = () =>{
        setMenubar(!menubar)
   }
  return (
      
                    <ul className="my-5">
                        <li className="flex justify-between text-xl p-2">
                            <div>{title}</div>
                            <button  onClick={() => handleMenu()}>
                                <div className="bg-white p-2 rounded-full" style={{transform:menubar?'rotate(-180deg)':'',transition:'transform 0.5s ease'}}>
                                    <div className="border-t-4 border-r-4 w-3 h-3 border-purple-500 rotate-135"/>
                                </div>
                            </button>
                        </li> 
                        {menubar&&children}
                    </ul>
  )
}

export default Menubar