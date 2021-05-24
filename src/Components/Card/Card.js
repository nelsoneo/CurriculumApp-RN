import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ titulo, children }) => {


    return (
        <View style = {styles.card}>
            <View>
                <View>
                     <Text style= {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>{titulo}</Text>
                </View>
               <View>
                    <Text style = {styles.card_content}>{children}</Text>
               </View>
            </View>
      </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#933939',
        marginBottom: 5,
      },
      card_content: {
        alignItems: 'stretch',
        marginTop: 10
      }
});

export default Card;

{/* <View style = {styles.card_content}>
<Text style= {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>{props.titulo}</Text>

</View> */}