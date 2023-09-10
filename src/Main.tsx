import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./screens/home/Home";
import {Details} from "./screens/details/Details";
import {RootStack} from "./screens/types";

const Stack = createNativeStackNavigator<RootStack>()
export const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'Details'} component={Details}/>
        </Stack.Navigator>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});