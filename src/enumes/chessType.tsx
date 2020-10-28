export enum Type  {
    none,
    red,
    black,
}

export enum GameState {
    /**
     * 游戏进行中
     */
    gaming,
    /**
     * 红方胜
     */
    redWin,
    /**
     * 黑方胜利
     */
    blackWin,
    /**
     * 平局
     */
    equal
}