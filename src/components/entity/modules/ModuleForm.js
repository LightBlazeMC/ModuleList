import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultModule = {
  ModuleID: null, //Math.floor(100000 + Math.random() * 900000),
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null, //"https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  const levels = [
    { label: "Level 3 - Foundation", value: 3 },
    { label: "Level 4 - 1st Year", value: 4 },
    { label: "Level 5 - 2nd Year", value: 5 },
    { label: "Level 6 - Final Year", value: 6 },
    { label: "Level 7 - Masters", value: 7 },
  ];

  // State -------------------------------
  const [module, setModule] = useState(originalModule || defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);

  // View --------------------------------
  const submitLabel = originalModule ? "Modify" : "Add";
  const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module code: "
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />

      <Form.InputText
        label="Module name: "
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />

      <Form.InputSelect
        label="Module level: "
        prompt="Select module level..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />

      <Form.InputText
        label="Module leader: "
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />

      <Form.InputText
        label="Module image URL: "
        value={module.ModuleImage}
        onChange={(value) => handleChange("ModuleImage", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
