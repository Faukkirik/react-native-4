import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from "react-native";
import {DetailsPropsType, useAppNavigation} from "../types";
import {api, Pokemon} from "../../api/api";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {cleanCurrentPokemonAC, getCurrentPokemonTC} from "../../store/root/root";

export const Details = ({route}: DetailsPropsType) => {
    const dispatch = useAppDispatch()
    const currentPokemon = useAppSelector(state => state.root.currentPokemon)
    //const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null)
    useEffect(() => {
        // api.getCurrentPokemon(route.params.url).then((res) => {
        //     setCurrentPokemon(route.params.url)
        // })
        dispatch(getCurrentPokemonTC({url: route.params.url}))
        return ()=>{
            dispatch(cleanCurrentPokemonAC())
        }
    }, [])
    if (!Object.keys(currentPokemon).length){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View>
            {currentPokemon && <>
                <Text>
                    {currentPokemon.name}
                </Text>
                <Image
                    style={{width: 150, height: 150}}
                    source={{uri: currentPokemon.sprites.other["official-artwork"].front_default}}
                />
            </>}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});