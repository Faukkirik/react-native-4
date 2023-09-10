import {NavigationProp, useNavigation} from "@react-navigation/native";

export type RootStack = {
    Home: undefined
    Details: undefined
}
export type NavigationUseType = NavigationProp<RootStack>
export const useAppNavigation = () => useNavigation<NavigationUseType>()