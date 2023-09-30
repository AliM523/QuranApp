import { StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import COLORS from "../constants/colors";

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Quran Screen" 
        onPress={() => navigation.navigate('QuranScreen')} 
        />
      <Button 
        title="Hadeeth Screen" 
        onPress={() => navigation.navigate('HadeethScreen')} 
      />
      <Button 
        title="Praying Screen" 
        onPress={() => navigation.navigate('PrayingScreen')} 
      />
      <Button 
        title="Nashid Screen" 
        onPress={() => navigation.navigate('NashidScreen')} 
      />
      <Button
        title="Athan Screen"
        onPress={() => navigation.navigate('AthanScreen')}
      />
      <Button
        title="Mutton Screen"
        onPress={() => navigation.navigate('MuttonScreen')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.turquoise,
    }
});