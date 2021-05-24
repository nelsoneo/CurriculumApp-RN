import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = () => {
    return (
        <View style = {styles.card}>
        <View>
          <Text style= {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Experiencia Professional</Text>
          <Text >React-Native</Text>
          <Text>JavaScript</Text>
          <Text>Java</Text>
          <Text>C#</Text>
          <Text>Genexus</Text>
        </View>
        <View style = {styles.card_content}>
          <Text style= {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Formação Academica</Text>
          <Text>Engenhiero em Ciencias da Computação</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '99%',
        flex: 1,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#933939',
        marginTop: 20,
        // alignItems: 'center'
      },
      card_content: {
        alignItems: 'flex-start',
        marginTop: 10
      }
});

export default Card;