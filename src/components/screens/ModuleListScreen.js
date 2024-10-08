import { StyleSheet, Text } from "react-native";
import Screen from "../layout/screen";
import initialModules from "../../data/modules.js";
//import ModuleItem from "../entity/modules/ModuleItem.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { useState } from "react";

const ModuleListScreen = ({ navigation }) => {
  //inits

  //state
  const [modules, setModules] = useState(initialModules);

  //handlers
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module });

  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    console.log(
      `[i] Item ${module.ModuleCode} - ${module.ModuleName} deleted from the modules array.`
    );
    alert(
      `Module ${module.ModuleCode} - "${module.ModuleName}" has been deleted from the list.`
    );
  };
  //view
  return (
    <Screen>
      <Text style={styles.text}>Press item to view.</Text>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 4 },
  text: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
    fontFamily: "Arial",
    paddingVertical: 12,
  },
});

export default ModuleListScreen;
