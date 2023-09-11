import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../../api/api";
import {useAppNavigation} from "../types";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getAllPokemonTC} from "../../store/root/root";

export const Home = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const allPokemon = useAppSelector(state => state.root.allPokemon)
    //const [allPokemons, setAllPokemons] = useState<PokemonItem[]>([])
    useEffect(() => {
        api.getAllPokemon().then((res) => {
            dispatch(getAllPokemonTC())
        })
    }, [])
    const renderItem: ListRenderItem<PokemonItem> = ({item}) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Details', {url: item.url})
                }}>
                    <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={allPokemon}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
    },
    item: {
        marginVertical: 5,
        backgroundColor: '#ec8484',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
    },
    name: {
        fontSize: 22,
        fontWeight: '500',
    }
});