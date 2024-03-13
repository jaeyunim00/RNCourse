import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style = {styles.mainContainer}>
      <StatusBar></StatusBar>
      <View style = {styles.inputContainer}>
        <TextInput style={styles.inputTextItem} placeholder='Your Couse Goal!!'></TextInput>
        <Button title='Add Goal~'></Button>
      </View>
      <View style={styles.listContainer}>
        <Text>Goal List...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    marginTop: 50,
    flex: 1,
    // backgroundColor: "yellow"
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 3,
    borderBottomColor: "#999",
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
  },

  inputTextItem: {
    width: 200,
    borderColor: "#999",
    borderWidth: 1,
  },
  
  listContainer: {
    paddingTop: 30,
    flex: 4,
    // backgroundColor: "green",
    alignItems: "center",
  }
});
