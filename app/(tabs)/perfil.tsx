import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState("Tomas Tobio"); // nombre inicial
  const [modalVisible, setModalVisible] = useState(false);
  const [tempName, setTempName] = useState(name);

  function handleSave() {
    setName(tempName);
    setModalVisible(false);
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Perfil</Text>
      <Text style={styles.profileName}>{name}</Text>
      <Pressable
        style={styles.changeButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.changeButtonText}>Cambiar nombre</Text>
      </Pressable>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Editar nombre</Text>
            <TextInput
              style={styles.input}
              value={tempName}
              onChangeText={setTempName}
            />
            <Pressable style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    marginBottom: 20,
  },
  changeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  changeButtonText: {
    color: "white",
    fontSize: 16,
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#7c7c7cff",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
});