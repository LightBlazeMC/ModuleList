import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, ButtonTray } from "./button.js";
import Icons from "./Icons.js";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>
        {children}
      </ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onclick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onclick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
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

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{label}</Text>
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        style={styles.itemPickerStyle}
      >
        <Picker.Item
          value={null}
          label={prompt}
          style={styles.itemPickerPromptStyle}
        ></Picker.Item>
        {options.map((option, index) => (
          <Picker.Item key={index} value={option.value} label={option.label} />
        ))}
      </Picker>
    </View>
  );
};

//compose components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

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
  formItems: {
    gap: 5,
  },
  itemPickerStyle: {
    //height: 20,
    width: 250,
    //backgroundColor: "#f7f7f7",
    //fontWeight: "bold",
  },
  itemPickerPromptStyle: {
    color: "#999",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;
