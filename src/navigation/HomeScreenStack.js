import { HomeScreen, QuranScreen, HadeethScreen, PrayingScreen, NahshidScreen, AthanScreen, MuttonScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export default function HomeScreenStack() {
    return(
        <HomeStack.Navigator
            screenOptions={{headerShown: false}}
        >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
            <HomeStack.Screen name="QuranScreen" component={QuranScreen} />
            <HomeStack.Screen name="HadeethScreen" component={HadeethScreen} />
            <HomeStack.Screen name="PrayingScreen" component={PrayingScreen} />
            <HomeStack.Screen name="NashidScreen" component={NahshidScreen} />
            <HomeStack.Screen name="MuttonScreen" component={MuttonScreen} />
        </HomeStack.Navigator>
    );
}