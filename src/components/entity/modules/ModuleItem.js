import { Pressable, StyleSheet, Text, View } from "react-native";

const ModuleItem = ({ module, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Pressable onPress={() => onSelect(module)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: { paddingVertical: 4, borderWidth: 1, borderColor: "#c3fefe" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#625095",
    fontFamily: "Courier New",
    paddingVertical: 2,
    paddingHorizontal: 12,
  },
});

export default ModuleItem;
