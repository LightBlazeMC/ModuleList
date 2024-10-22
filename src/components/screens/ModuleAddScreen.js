import { StyleSheet } from "react-native";
import Screen from "../layout/screen";
import ModuleForm from "../entity/modules/ModuleForm";

const ModuleAddScreen = ({ navigation, route }) => {
  //inits
  const { onAdd } = route.params;

  //state

  //handlers
  const handleCancel = navigation.goBack;

  //view
  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
