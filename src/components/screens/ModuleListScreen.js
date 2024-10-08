import { StyleSheet, Text } from "react-native";
import Screen from "../layout/screen";
import initialModules from "../../data/modules.js";
//import ModuleItem from "../entity/modules/ModuleItem.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { useState } from "react";

const ModuleListScreen = () => {
  //inits

  //state
  const [modules, setModules] = useState(initialModules);

  //handlers
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
      <Text style={styles.text}>Press entry to delete.</Text>
      <ModuleList modules={modules} onSelect={handleDelete} />
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
