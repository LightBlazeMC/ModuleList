import { StyleSheet, Text } from "react-native";
import Screen from "../layout/screen";
import ModuleForm from "../entity/modules/ModuleForm";

const ModuleModifyScreen = ({ navigation, route }) => {
  //inits
  const { module, onModify } = route.params;
  //state
  //handlers
  const handleCancel = navigation.goBack;
  //view
  return (
    <Screen>
      <ModuleForm
        originalModule={module}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
