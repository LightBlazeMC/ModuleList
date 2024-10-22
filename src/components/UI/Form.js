import { TextInput, StyleSheet, Text, View } from "react-native";
import { Button, ButtonTray } from "./button.js";
import Icons from "./Icons.js";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View style={styles.formContainer}>
      <View style={styles.formItems}>{children}</View>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onclick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onclick={onCancel} />
      </ButtonTray>
    </View>
  );
};

const InputText = ({ label, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{label}</Text>
      <TextInput value={value} onChangeText={onChange} style={styles.input} />
    </View>
  );
};

//compose components
Form.InputText = InputText;

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
  formContainer: {
    gap: 10,
  },
});

export default Form;
