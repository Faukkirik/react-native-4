import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../../api/api";

export const getAllPokemonTC = createAsyncThunk<PokemonItem[] | undefined, void>('root/getAllPokemonTC', async () => {
    try {
        const res = await api.getAllPokemon()
        return res.data.results
    } catch (e) {
        console.log('err', e)
    }
})
export const getCurrentPokemonTC = createAsyncThunk<Pokemon | undefined, {url: string}>('root/getCurrentPokemonTC', async (params)=>{
    try {
        const res = await api.getCurrentPokemon(params.url)
        return res.data
    } catch (e) {
        console.log('err', e)
    }
})
export const cleanCurrentPokemonAC = createAction('root/cleanCurrentPokemonAC')
const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemon: [] as PokemonItem[],
        currentPokemon: {} as Pokemon,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllPokemonTC.fulfilled, (state, action) => {
            state.allPokemon = action.payload ? action.payload : []
        })
            .addCase(getCurrentPokemonTC.fulfilled, (state, action)=>{
                state.currentPokemon = action.payload ? action.payload : {} as Pokemon
            })
            .addCase(cleanCurrentPokemonAC, (state)=>{
                state.currentPokemon = {} as Pokemon
            })
    }
})

export const root = rootSlice.reducer