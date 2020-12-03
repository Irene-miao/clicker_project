import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function renderEncouragingText() {
    if (count > 10) {
      return "Keep Going!"
    }
  }

  return (
    <View style={styles.container}>
       <CounterText fontSize={20} marginBottom={30} color="grey">
        {count}
      </CounterText>
      <CounterText fontSize={40} marginBottom={20} color="lightblue">
        {count}
      </CounterText>
      <CounterText fontSize={60} marginBottom={20} color="blue">
        {count}
      </CounterText>
      <CounterText fontSize={80} color="navy">
        {count}
      </CounterText>
    
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>
          Reset!
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFF5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#D8C99B',
    backgroundColor: '#2D82B7',
    fontSize: 50,
    borderRadius: 20,
    padding: 10,
    
  },

  encouragingText: {
  marginTop:50,
    color: 'grey',
    fontSize: 35,
  },

  button: {
    backgroundColor: '#2D82B7',
    width: 80,
    height: 30,
    borderRadius: 20,
    margin: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },

  buttonText: {
    color: '#D6F8D6',
  }
});

