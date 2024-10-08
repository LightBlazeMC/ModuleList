import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";

const ModuleView = ({ module }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
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
