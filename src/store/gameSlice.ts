import { createSlice } from "@reduxjs/toolkit";
import GameState from "../types/gameState";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameState: GameState.MAIN_MENU,
        time: 30000,
        score: 0
    },
    reducers: {
        gameStarted: (state) => {
            state.gameState = GameState.GAME_IN_PROCESS;
        },
        tutorialStarted: (state) => {
            state.gameState = GameState.TUTORIAL;
        },
        gameFinished: (state) => {
            state.gameState = GameState.GAME_FINISHED;
        },
        startedNewTry: (state) => {
            state.gameState = GameState.GAME_IN_PROCESS;
            state.score = 0;
            state.time = 30000;
        },
        increaseScore: (state) => {
            state.score = state.score + 1; 
        },
        decreaseScore: (state) => {
            state.score = state.score - 1;
        }
    }
});

const {reducer, actions} = gameSlice;
export default reducer;
export const { gameStarted, tutorialStarted, gameFinished, startedNewTry, increaseScore, decreaseScore} = actions;