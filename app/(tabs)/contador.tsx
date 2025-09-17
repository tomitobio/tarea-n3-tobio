import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Counter() {
  const [state, setState] = useState({ clicks: 0 });

  function increment() {
    setState({ clicks: state.clicks + 1 });
  }

  return (
    <Pressable onPress={increment} style={styles.cardBox}>
      <Text style={styles.cardText}>Clicks: {state.clicks}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Página contador</Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  cardBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec', 
  },
  cardText: {
    fontSize: 20,
    color: 'black',
  },
});
