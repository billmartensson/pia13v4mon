import { Image, StyleSheet, Platform, View, Text, FlatList, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { FancyPersonRow } from '../FancyPersonRow';





export default function HomeScreen() {

  const [people, setPeople] = useState([{
      firstname: "Arne",
      lastname: "Arnesson"
    },{
      firstname: "Bengt",
      lastname: "Bengtsson"
    }, {
      firstname: "Cecilia",
      lastname: "Ceciliasson"
    }, {
      firstname: "David",
      lastname: "Davidsson"
    }
  ]);

  const [inputfirstname, setInputfirstname] = useState("");
  const [inputlastname, setInputlastname] = useState("");

  const [errormessage, setErrormessage] = useState("");

  function addPerson() {
    console.log(inputfirstname);

    if(inputfirstname == "") {
      // Inget förnamn 
      setErrormessage("Inget förnamn");
      return;
    }
    if(inputlastname == "") {
      // Inget efternamn 
      setErrormessage("Inget efternamn");
      return;
    }

    setErrormessage("");

    setPeople([...people, {firstname: inputfirstname, lastname: inputlastname}]);

    setInputfirstname("");
    setInputlastname("");

    console.log(people);
  }

  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>

      <View style={{ backgroundColor: "red", height: 100 }}></View>

      { errormessage != "" &&
        <Text style={nicestyle.nicetext}>{ errormessage }</Text>
      }

      <TextInput 
        onChangeText={setInputfirstname} 
        value={inputfirstname} 
        style={{ backgroundColor: "white", height: 50 }}
      />

      <TextInput 
        onChangeText={setInputlastname} 
        value={inputlastname} 
        style={{ backgroundColor: "white", height: 50 }}
      />

      <Button title='Add' onPress={addPerson} />

      <FlatList 
        data={people} 
        renderItem={({item}) => <FancyPersonRow firstname={ item.firstname } lastname={ item.lastname } /> } 
      />

    </View>
  );
}


export const nicestyle = StyleSheet.create({
  nicetext: {
    fontSize: 25,
    color: "black"
  }
});


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
