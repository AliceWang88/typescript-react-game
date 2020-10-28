import React from 'react'
import './index.css'

interface Iprops {
    onClick:()=>void
}

export default function Button(props:Iprops) {
    return (
        <div className="button">
            <button onClick={()=>{
                props.onClick();
            }} >重新开始</button>
        </div>
    )
}
