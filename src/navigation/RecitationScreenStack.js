import { RecitationScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RecitationStack = createNativeStackNavigator();

export default function RecitationScreenStack() {
    return(
        <RecitationStack.Navigator
            screenOptions={{headerShown: false}}
        >
            <RecitationStack.Screen name="RecitationScreen" component={RecitationScreen}/>
        </RecitationStack.Navigator>
    );
}