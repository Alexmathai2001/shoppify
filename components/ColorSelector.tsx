import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ColorSelector = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colors</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={[styles.colorBox, { backgroundColor: '#E3AD33' }]}></View>
          <Text style={styles.text}>Harvest Gold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={[styles.colorBox, { backgroundColor: '#1A1919' }]}></View>
          <Text style={styles.text}>Eerie Black</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={[styles.colorBox, { backgroundColor: '#E35D33' }]}></View>
          <Text style={styles.text}>Flame</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={[styles.colorBox, { backgroundColor: '#1C3A13' }]}></View>
          <Text style={styles.text}>Pakistan Green</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#dddddd",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    width: '47%', 
  },
  colorBox: {
    height: 40,
    width: 40,
  },
  text: {
    marginLeft: 10,
    opacity : 0.7
  },
});

export default ColorSelector;