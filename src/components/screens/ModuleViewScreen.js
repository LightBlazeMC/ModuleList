import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigate, route }) => {
  //inits
  const { module } = route.params;

  //state
  //handlers

  //view
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
