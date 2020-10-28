import React from 'react'
import './index.css'
import ChessComp from '../chessComp/index'
import { Type } from '../../enumes/chessType'

interface Iprops {
    chessList:Type[]
    size:number
    onClick?(index:number):void
    line:number
    isOver?:boolean
}



export const BordComp:React.FC<Iprops> = (props)=> {
    let isOver = props.isOver!;  //  ! 表示：非空
    // let isOver = props.isOver as boolean;

    const chessCompArr = props.chessList.map((type,index)=><ChessComp key={index} size={props.size} type={type} onClick={()=>{
        if(props.onClick && !isOver){
            props.onClick(index);
        }
    }} />)
    return (
        <div className="board" style={{width:props.line*props.size,height:props.line*props.size}}>
            {chessCompArr}
        </div>
    )
}

BordComp.defaultProps = {
    isOver : false,
}

