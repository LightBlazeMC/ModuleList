import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ModuleModifyScreen = () => {
  //inits
  //state
  //handlers

  //view
  return (
    <View style={styles.container}>
      <Text>Modify</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModuleModifyScreen;
