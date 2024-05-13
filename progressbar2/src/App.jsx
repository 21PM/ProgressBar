import { useEffect, useState } from "react";
import "./App.css";
import Box from "./box.jsx";

function App() {
  const[progress,setProgress]= useState(0);

  useEffect(()=>{
   setInterval( ()=>{ 
    setProgress( (val)=>val+1);
   },100);
  },[]);

      return (
    <>
      <div className="outerDIv">
        <p style={{ textAlign: "center" }}>Progress bar</p>

          <Box  value={progress}/>
        
      </div>
    </>
  );
}

export default App;
