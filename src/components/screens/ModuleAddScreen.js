import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, ButtonTray } from "../UI/button.js";
import Icons from "../UI/Icons.js";
import Screen from "../layout/screen";
import { useState } from "react";

const defaultModule = {
  ModuleID: null, //Math.floor(100000 + Math.random() * 900000),
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null, //"https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const ModuleAddScreen = ({ navigation, route }) => {
  //inits
  const { onAdd } = route.params;
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  //state
  const [module, setModule] = useState(defaultModule);

  //handlers
  const handleAdd = () => onAdd(module);
  const handleCancel = navigation.goBack;
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  //view
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.text}>Module code: </Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.input}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Module name: </Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.input}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Module level: </Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.input}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Module leader: </Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.input}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Module image URL: </Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange("ModuleImage", value)}
          style={styles.input}
        />
      </View>

      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onclick={handleAdd} />
        <Button label="Cancel" icon={<Icons.Close />} onclick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    margin: 4,
  },
  text: {
    fontSize: 24,
    color: "#261387",
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  input: {
    fontSize: 18,
    color: "#811387",
    borderWidth: 1,
    borderColor: "#db19e6",
    borderRadius: 8,
    padding: 6,
    flex: 1,
    fontStyle: "italic",
  },
});

export default ModuleAddScreen;
