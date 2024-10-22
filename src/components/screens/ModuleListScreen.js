import { LogBox, StyleSheet, Text } from "react-native";
import Screen from "../layout/screen";
import initialModules from "../../data/modules.js";
//import ModuleItem from "../entity/modules/ModuleItem.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { useState } from "react";
import { Button, ButtonTray } from "../UI/button.js";
import Icons from "../UI/Icons.js";

const ModuleListScreen = ({ navigation }) => {
  //inits
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

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
  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  //view
  return (
    <Screen>
      <Text style={styles.text}>Press item to view.</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onclick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
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
