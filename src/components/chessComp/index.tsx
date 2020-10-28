import {Type} from '../../enumes/chessType'
import React from 'react'
import './index.css'


interface Iprops {
    type:Type
    onClick?:()=>void
    size:number
}

export default function ChessComp (props:Iprops) {
    let chess;
    if(props.type === Type.red){
        chess = <div className="red chess-item"></div>
    } else if (props.type === Type.black){
        chess = <div className="black chess-item"></div>
    }
    return (
        <div className="box" style={{width:props.size,height:props.size}} onClick={()=>{
            if(props.type === Type.none && props.onClick) {
                props.onClick()
            }
        }}>
            {chess}
        </div>
    )
}