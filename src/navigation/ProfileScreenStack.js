import { ProfileScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileStack = createNativeStackNavigator();

export default function ProfileScreenStack() {
    return (
        <ProfileStack.Navigator
            screenOptions={{headerShown: false}}
        >
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>
        </ProfileStack.Navigator>
    );
}