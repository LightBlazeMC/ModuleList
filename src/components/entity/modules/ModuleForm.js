import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Button, ButtonTray } from "../../UI/button.js";
import Icons from "../../UI/Icons.js";

const defaultModule = {
  ModuleID: null, //Math.floor(100000 + Math.random() * 900000),
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null, //"https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const ModuleForm = ({ onSubmit, onCancel }) => {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  // State -------------------------------
  const [module, setModule] = useState(defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);

  // View --------------------------------
  const submitLabel = "Add";
  const submitIcon = <Icons.Add />;

  return (
    <View style={styles.formContainer}>
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
        <Button label={submitLabel} icon={submitIcon} onclick={handleSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onclick={onCancel} />
      </ButtonTray>
    </View>
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

export default ModuleForm;
