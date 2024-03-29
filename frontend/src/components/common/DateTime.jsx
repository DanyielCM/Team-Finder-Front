import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

    return(
            <div>{date.toLocaleDateString("en-US", options)}</div>

    )
}

export default DateTime
{/* <p>{date.toLocaleTimeString()}</p> */}