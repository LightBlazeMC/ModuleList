import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, icon, onclick, styleLabel, styleButton }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Pressable onPress={onclick} style={[styles.button, styleButton]}>
      {icon ? icon : null}
      <Text style={[styles.label, styleLabel]}>{label}</Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return <View style={styles.ButtonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#3f0087",
    backgroundColor: "#bc85f7",
    padding: 12,
    minHeight: 50,
    justifyContent: "center",
    margin: 6,
    flexDirection: "row",
    gap: 4,
  },
  label: {
    fontSize: 22,
    color: "#88fcf7",
    fontWeight: "bold",
  },
  ButtonTray: {
    flexDirection: "row",
    gap: 16,
  },
});
