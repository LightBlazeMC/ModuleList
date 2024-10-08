import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import initialModules from "../../data/modules.js";
//import ModuleItem from "../entity/modules/ModuleItem.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = () => {
  //inits
  const modules = initialModules;
  //state
  //handlers
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} pressed.`);
  //view
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 4 },
});

export default ModuleListScreen;
