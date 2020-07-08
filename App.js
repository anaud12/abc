import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  const[Search, setSearch] = useState('정류장');
  const[Busnum, setnum] = useState('202');

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder='정류장 입력해 주세요.'
        onChangeText={(val) => setSearch(val)} />
      </View>
      <ScrollView style={styles.bottom}>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'yellow',
    alignItems: 'center',//수평영역
    justifyContent: 'flex-start',//수직영역
    
  },
  bottom:{
    flex:1,
    backgroundColor:'blue',
    
    
  },
  input:{
    backgroundColor: 'white',
    top: 30,
    width:300,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 150 / 2
  }
});
