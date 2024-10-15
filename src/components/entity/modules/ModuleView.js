import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/button";
import Icons from "../../UI/Icons";

const ModuleView = ({ module, onDelete }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  const handleDelete = () => onDelete(module);
  const requestDelete = () =>
    Alert.alert(
      "Deletion Confirmation",
      `Are you sure you want to delete ${module.ModuleCode} - "${module.ModuleName}"?`,
      [
        { text: "Abort", style: "cancel" },
        { text: "Delete", onPress: handleDelete },
      ]
    );
  // View --------------------------------
  return (
    <View>
      <Text style={styles.text1}>
        {module.ModuleCode}: {module.ModuleName}
      </Text>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
        style={styles.image}
      />
      <Text style={styles.text3}>
        Module Level: <Text style={styles.text2}>{module.ModuleLevel}</Text>
      </Text>
      <Text style={styles.text3}>
        Module Leader:{" "}
        <Text style={styles.text2}>{module.ModuleLeaderName}</Text>
      </Text>
      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify"></Button>
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          styleButton={{ backgroundColor: "#c20000" }}
          styleLabel={{ color: "#f3ff00" }}
          onclick={requestDelete}
        ></Button>
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#ff7900",
    fontFamily: "Verdana",
    paddingVertical: 4,
  },

  text2: {
    fontSize: 20,
    color: "#c751b7",
    fontFamily: "Arial",
    fontWeight: "normal",
    fontStyle: "italic",
    paddingHorizontal: 16,
    paddingVertical: 3,
  },

  text3: {
    fontSize: 20,
    color: "purple",
    fontFamily: "Arial",
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 3,
  },

  image: {
    borderRadius: 10,
    marginBottom: 16,
    marginTop: 16,
  },
});

export default ModuleView;
