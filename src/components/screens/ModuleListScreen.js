import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Screen from "../layout/screen";
import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  //inits
  const modules = initialModules;
  //state
  //handlers
  const handlePress = () => alert("Item pressed");
  //view
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable onPress={handlePress}>
              <View key={module.ModuleCode} style={styles.item}>
                <Text style={styles.text}>
                  {module.ModuleCode} {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 4 },
  item: { paddingVertical: 4, borderWidth: 1, borderColor: "#c3fefe" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#625095",
    fontFamily: "Courier New",
    paddingVertical: 2,
    paddingHorizontal: 12,
  },
});

export default ModuleListScreen;
