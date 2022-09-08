import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24
  },
  logoContainer: {
    alignContent: "center",
    alignItems: "center"
  },
  logo: {
    marginTop: 48,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F2F2F2",
    fontSize: 24
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginBottom: 36,
  },
  textContainer: {
    alignItems: "center"
  },
  todoStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusNumberContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    backgroundColor: "#333333",
    height: 24,
    width: 24,
    borderRadius: 14,
  },
  statusNumber: {
    color: "#D9D9D9",
    fontWeight: "bold",
  },
  criadas: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  concluidas: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  text: {
    color: "#808080",
    fontSize: 16
  },
  textBold: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "bold"
  },
  clipboard: {
    width: 64,
    height: 64,
    marginBottom: 12
    
  }
})