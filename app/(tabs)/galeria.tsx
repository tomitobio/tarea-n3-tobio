import React, { useState } from 'react';
import {
    Button,
    FlatList,
    Image,
    ImageSourcePropType,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default function HomeScreen() {
    const DATA = [
    {
      id: '1',
      title: 'First Image',
      price: 1200,
      image: require('../../images/1.jpg')
    },
    {
      id: '2',
      title: 'Second Image',
      price: 1500,
      image: require('../../images/2.jpeg')
    },
    {
      id: '3',
      title: 'Third Image',
      price: 1800,
      image: require('../../images/3.jpg')
    },
    ];  


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
    const [resizeMode, setResizeMode] = useState<'cover' | 'contain' | 'stretch'>('cover');
    const [favorites, setFavorites] = useState<string[]>([]);

    const handlePress = (item: any) => {
        setSelectedItem(item);
        setModalVisible(true);
        setResizeMode('cover');
    };
    const handleLongPress = (id: string) => {
        setFavorites(favList => favList.includes(id) ? favList.filter(fav => fav !== id) : [...favList, id]);
    };

    type ItemProps = { 
        title: string; 
        image: ImageSourcePropType; 
        price: number,
        onPress: () => void;
        onLongPress: () => void;
        favorite: boolean;
    };
  const Item = ({ title, image, price, onPress, onLongPress, favorite }: ItemProps) => (
    <Pressable 
      onPress={onPress} 
      onLongPress={onLongPress} 
      style={[styles.cardBox, favorite && styles.favoriteCard]}
    >
      <Text style={styles.titleText}>{title}</Text>
      <Image source={image} style={styles.cardImage} resizeMode="cover"/>
      <Text style={styles.cardText}>{price} ARS</Text>
      {favorite && <Text style={styles.cardText}> Favorito !</Text>}
    </Pressable>
  );

  return (
    <View style={styles.titleContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item 
            title={item.title} 
            image={item.image}   
            price={item.price} 
            onPress={() => handlePress(item)}
            onLongPress={() => handleLongPress(item.id)}
            favorite={favorites.includes(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image 
                  source={selectedItem.image} 
                  style={styles.modalImage} 
                  resizeMode={resizeMode} 
                />
                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                <Text style={styles.cardText}>{selectedItem.price} ARS</Text>

                <View style={styles.buttonRow}>
                  <Button title="Cover" onPress={() => setResizeMode('cover')} />
                  <Button title="Contain" onPress={() => setResizeMode('contain')} />
                  <Button title="Stretch" onPress={() => setResizeMode('stretch')} />
                </View>

                <Button title="Cerrar" onPress={() => setModalVisible(false)} />
              </>
            )}
          </View>
        </View>
      </Modal>
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
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  cardBox: {
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec', 
  },
  cardText: {
    fontSize: 12,
    marginTop: 10,
    color: 'black',
  },
  cardImage: {
    width: 140,
    height: 100,
    marginTop: 10,
    borderRadius: 5,    
  },
  favoriteCard: {
    borderColor: '#c7ffa1ff',
    borderWidth: 2,
  },
  flatListContainer: {
    alignItems: 'center',   
    justifyContent: 'center', 
    flexGrow: 1              
    },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
  },
  modalImage: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  });
