import React from 'react';
import { BordComp } from '../boardComp';
import { Type, GameState } from '../../enumes/chessType';
import TipComp from '../tipComp';
import Button from '../button';


interface Istate {
    line: number
    size: number
    chessList: Type[]
    gameState: GameState
    next: Type.red | Type.black
}

export default class GameComp extends React.Component<{}, Istate> {
    state: Istate = {
        line: 3,   // 3 x 3
        size: 100,  // 小格子尺寸
        chessList: [],
        gameState: GameState.gaming,
        next: Type.black,
    }

    componentDidMount() {
        this.init();
    }

    /**
     * 初始化 chessList
     */
    init() {
        let list: Type[] = [];
        for (let i = 0; i < this.state.line * this.state.line; i++) {
            list.push(Type.none);
        }
        this.setState({
            ...this.state,
            chessList: list,
            gameState: GameState.gaming,
            next: Type.black,
        })
    }

    handleClick(n: number) {
        // 如果：点击位置无子 并且 游戏未结束
        // 添子
        let list = [...this.state.chessList];
        list[n] = this.state.next;

        this.setState({
            ...this.state,
            chessList: list,
            next: this.state.next === Type.black ? Type.red : Type.black,
            gameState: this.checkIsGameOver(list, n),
        })
    }

    /**
     * 游戏是否结束
     */
    checkIsGameOver(arr: Type[], index: number): GameState {
        const aMinIndex = Math.floor(index / this.state.line) * this.state.line;
        const vMinIndex = index % this.state.line;

        if ((arr[aMinIndex] === arr[aMinIndex + 1] && arr[aMinIndex] === arr[aMinIndex + 2]) ||
            (arr[vMinIndex] === arr[vMinIndex + 3] && arr[vMinIndex] === arr[vMinIndex + 6]) ||
            (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== Type.none) ||
            (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== Type.none)
        ) {
            // 一方胜出 游戏结束
            if (this.state.next === Type.red) {
                return GameState.redWin;
            } else {
                return GameState.blackWin;
            }
        } else if (arr.indexOf(Type.none) === -1) {
            // 平局
            return GameState.equal;
        }

        return GameState.gaming;
    }


    render() {
        return (
            <div>
                <TipComp next={this.state.next} gameState={this.state.gameState} />
                <BordComp line={this.state.line} isOver={this.state.gameState !== GameState.gaming} chessList={this.state.chessList} size={this.state.size} onClick={n=>this.handleClick(n)} />
                <Button onClick={() => {
                    this.init();
                }} />
            </div>
        )
    }
}
