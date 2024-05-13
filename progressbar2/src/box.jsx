import './App.css'
import { useEffect,useState } from 'react';

function Box({value = 0}){

    const[percent, setPercent]= useState(value);
    const [completed,Setcompleted] = useState(false);



    useEffect(()=>{
        if(percent < 100)
        {
         setTimeout( ()=>setPercent(newval=>newval+1),200);
        }else{
            Setcompleted(!completed)
        }

    },[percent]);


    

    return(
        <>
         <div className="BarDiv">        
                    <p>{percent + " %"}</p>
         <div className='actualBar' style={{width:`${percent}%`}}>
                
        </div>

        <div className='p'>
                           {
                             completed?<p>Completed !</p> : null   
                              }
                   </div>

      

        </div>

        </>
        
        
    )
}

export default Box;