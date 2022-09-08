import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#808080'
  },
  checkBox: {
    marginLeft: 12
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginLeft: 16,
    padding: 12 ,
  },
  deleteButton: {
    marginLeft: 12,
    marginRight: 12,
  }
})