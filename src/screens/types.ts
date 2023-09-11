import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStack = {
    Home: undefined
    Details: {
        url: string
    }
}
export type DetailsPropsType = NativeStackScreenProps<RootStack, 'Details'>

export type NavigationUseType = NavigationProp<RootStack>
export const useAppNavigation = () => useNavigation<NavigationUseType>()