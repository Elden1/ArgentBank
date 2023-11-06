import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gameready:0,
    winToken:0,
    nameRoom:'',
    idRoom:0,
    variant:'CLA',
    ptsGame:0,
    contest:0,
    playerNumber:0,
    numberOfPass:0,
    asset:''
}

export const readyPartSlice = createSlice({
    name: 'gamelauncher',
    initialState,
    reducers: {
        loadGame: (state, action) => {
        //   console.log('in', action.payload);
          state.gameready = action.payload;
        },
        savePrizes: (state, action) => {
            state.winToken = action.payload;
        },
        saveDataGame: (state, action) => {
            state.nameRoom = action.payload.nameRoom;
            state.idRoom = action.payload.idRoom;
            state.variant = action.payload.variant;
            state.ptsGame = action.payload.ptsGame;
            state.contest = action.payload.contest;
            state.playerNumber = action.payload.playerNumber;
        },
        saveAsset: (state, action) => {
            state.asset = action.payload.asset;
        }
    },
});

export const { loadGame,savePrizes,saveDataGame,saveAsset} = readyPartSlice.actions;

export default readyPartSlice.reducer;