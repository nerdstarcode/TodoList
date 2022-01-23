import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectiontitle}>Today's tasks</Text>
        <View style={styles.items}>
        <Task text={'Text 1'}/>
        <Task text={'Text 2'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectiontitle:{
    fontSize:24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
});
