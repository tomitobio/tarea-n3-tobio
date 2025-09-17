import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Card({ tarjeta }) {
  const [active, setActive] = useState(false);

  return (
    <Pressable
      onPress={() => setActive(!active)}
      style={[
        styles.cardBox,
        active ? styles.cardBoxActive : styles.cardBoxInactive
      ]}
    >
      <Text style={[styles.cardText, active ? styles.textActive : styles.textInactive ]}>
        {tarjeta}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const [cards, setCards] = useState(['Tarjeta 1']);
  const maxCards = 3;

  function addCard() {
    if (cards.length < maxCards) {
      const nextNumber = cards.length + 1;
      setCards([...cards, `Tarjeta ${nextNumber}`]);
    }
    else {
      alert('Número máximo de tarjetas alcanzado');
    }
  }

  function removeCard() {
    if (cards.length > 0) {
      setCards(cards.slice(0, -1));
    }
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Tarjetas</Text>
      {cards.map((text, index) => (
        <Card key={index} tarjeta={text} />
      ))}
      <Pressable onPress={addCard} style={styles.addButton}>
        <Text style={styles.addButtonText}>Agregar tarjeta</Text>
      </Pressable>
      <Pressable onPress={removeCard} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Borrar tarjeta</Text>
      </Pressable>
      <Text style={[styles.infoText, styles.infoBox ]}>
        {cards.length}/{maxCards} tarjetas máximas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dark gray',
    marginBlock: 20,
  },
  cardText: {
    fontSize: 20,
    color: 'black',
  },
  cardBox: {
    marginTop: 30,
    padding: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    marginTop: 40,
    padding: 10,
    width: 120,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  addButtonText: {
    color: '#ecececff',
    fontSize: 12,
  },
  removeButton: {
    marginTop: 10,
    padding: 10,
    width: 120,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#e25959ff',
  },
  removeButtonText: {
    color: '#252525ff',
    fontSize: 12,
  },
  cardBoxActive: {
    backgroundColor: '#5c8b64ff',
  },
  cardBoxInactive: {
    backgroundColor: '#ce916eff',
  },
  textActive: {
    color: '#ffffffff',
  },
  textInactive: {
    color: '#000000ff',
  },
  infoBox: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: '#d3d3d3ff',
  },
});
