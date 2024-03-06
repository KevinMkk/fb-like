import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UserDetails from './UserDetails';


export default function App() {
  return (
    <View style={styles.container}>
      <UserDetails profilePic={require('./person-placeholder.jpg')} 
      name="Kevin Makebe" 
      value="12:56" 
      content="Hey there, this is me at yfufufyfy  fyufuff fuyfufyuj itudtydy fufyufyufi fufugogf fufiufytdytd fdydiydtditd ydytdytffod fdyitdifd d yid fytfd f  iytfdiytfd iydytdid oud yotfi t iud ifydty ft ytf if"
      Pic={require('./MMORPG.jpg')}
      likes="57 likes"
      />      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingStart: 2,
  },
});
