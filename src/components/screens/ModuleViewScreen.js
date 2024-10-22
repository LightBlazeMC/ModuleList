import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigation, route }) => {
  //inits
  const { module, onDelete, onModify } = route.params;

  //state
  //handlers
  const gotoModifyScreen = () =>
    navigation.navigate("ModuleModifyScreen", { module, onModify });
  //view
  return (
    <Screen>
      <ModuleView
        module={module}
        onDelete={onDelete}
        onModify={gotoModifyScreen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
