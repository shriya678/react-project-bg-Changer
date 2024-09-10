import { useState } from 'react'



function App() {
  const [color,setColor]=useState("olive");
 
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}// {setColor("red")}cannot code like this because onClick wants a function and here we are calling the function so in onClick the value is returned  
          className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button
           onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button

          
           onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button 
           onClick={()=>setColor("purple")}className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>
    </div>

    
  )
  
}

export default App
