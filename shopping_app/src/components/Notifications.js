import React from 'react'
import { View, Text, Button , ImageBackground, SectionList , StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export const Notifications = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    <ImageBackground style={{height:300, width: 300 , justifyContent: 'center'}} source={{uri:"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} >
      {/* <View><Text>gvhbjnkl;kj vhbjnkml hbjnkm hvbjn k</Text></View> */}
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </ImageBackground>
    {/* <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        /> */}

        <Text style={styles.text} >No notifications</Text> 
        <Icon name="emoji-happy" size={30} color="#911" />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    text : {
        fontWeight: 'bold',
        fontSize : 20,
        color : 'grey'
    }
  })


