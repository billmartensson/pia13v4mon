import { Image, StyleSheet, Platform, View, Text, FlatList, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';


type PersonInfoStuff = { firstname: string, lastname: string };

function FancyPersonRow({firstname, lastname} : PersonInfoStuff) {
  return(
    <View style={{ backgroundColor: "yellow", height: 80 }}>
      <Text style={{ fontSize: 25 }}>{ firstname }</Text>
      <Text>{ lastname }</Text>
    </View>
  );
}


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

  const [myname, setMyname] = useState("");

  function addPerson() {
    console.log(myname);

    setPeople([...people, {firstname: myname, lastname: ""}]);

    setMyname("");

    console.log(people);
  }

  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>

      <View style={{ backgroundColor: "red", height: 100 }}></View>

      <TextInput 
        onChangeText={setMyname} 
        value={myname} 
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
