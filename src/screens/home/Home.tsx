import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../../api/api";

export const Home = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonItem[]>([])
    useEffect(() => {
        api.getAllPokemon().then((res) => {
            setAllPokemons(res.data.results)
        })
    }, [])
    const renderItem: ListRenderItem<PokemonItem> = ({item}) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity>
                    <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={allPokemons}
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