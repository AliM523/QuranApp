import { StyleSheet, View, Text, Button } from "react-native";
import COLORS from "../constants/colors";

export default function NahshidScreen ({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Nashid Screen</Text>
        <Button 
          title="Click Here" 
          onPress={() => alert("Button Clicked")} 
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