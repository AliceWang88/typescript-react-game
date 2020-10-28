import React from 'react'
import { Type, GameState } from '../../enumes/chessType'
import './index.css'

interface Iprops {
    next:Type.red | Type.black
    gameState:GameState
}

export default function TipComp(props:Iprops) {
    let ele :JSX.Element;
    if(props.gameState === GameState.gaming){
        // 显示next 谁出
        if(props.next === Type.red){
            ele = <div className="next red">红方出</div>
        } else{
            ele = <div className="next black">黑方出</div>
        }
    } else if (props.gameState === GameState.redWin){
        ele = <div className="win red">红方胜出</div>
    } else if (props.gameState === GameState.blackWin){
        ele = <div className="win black">黑方胜出</div>
    } else {
        ele = <div className="equal">平局</div>
    }
    return (
        <div className="tip">
            <h3>#字棋游戏</h3>
            {ele}
        </div>
    )
}
