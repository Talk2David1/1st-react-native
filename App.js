import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-view';
import Date from './component/Date';
import Box from './component/Box';

export default function App() {
  return (
    // <SafeAreaView>  
    <ScrollView>
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Text> 
    <Date number={1} month="Sep" />
    <Box />
    </Text>
    <Text> 
    <Date number={2} month="Jan" />
    <Box />
    </Text>
    <Text> 
    <Date number={3} month="Aug" />
    <Box />
    </Text>
    <Text> 
    <Date number={4} month="Dec" />
    <Box />
    </Text>
    <Text> 
    <Date number={5} month="Jul" />
    <Box />
    </Text>
    <Text> 
    <Date number={6} month="Oct" />
    <Box />
    </Text>
    <Text> 
    <Date number={7} month="Sep" />
    <Box />
    </Text>
    <Text> 
    <Date number={8} month="Jan" />
    <Box />
    </Text>
    </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#CCC',
    padding: 10,
    gap: 10,
    marginTop: 20,
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
  },   
});
