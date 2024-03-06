import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Options from './Options';

export default function UserDetails(props) {

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.profilePic} source={props.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.value}>{props.value}</Text>
        </View>
        <Options style={styles.dots} />
      </View>
      <Text style={styles.content}>{props.content}</Text>
      <Image style={styles.Pic} source={props.Pic} />
      <Text style={styles.likes}>{props.likes}</Text>
      <View style={styles.reacts}>
        <View style={styles.like}>
          <EvilIcons name="like" size={24} color="black" />
          <Text>Like</Text>
        </View>
        <View style={styles.like}>
          <FontAwesome5 name="comment-alt" size={24} color="black" />
          <Text>Comment</Text>
        </View>
        <View style={styles.like}>
          <MaterialCommunityIcons name="share-outline" size={24} color="black" />
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    fontSize: 20,
    marginBottom: 20,
  },
  body: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    fontSize: 20,
    marginBottom: 10,
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 75,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  content: {
    marginTop: 0,
    fontWeight: '300',
  },
  value: {
    color: '#560',
  },
  dots: {
    paddingHorizontal: 150,
    alignSelf: 'flex-start',
  },
  Pic: {
    marginTop: 15,
    marginBottom: 15,
    width: 320,
    height: 225,
  },
  placeholder: {
    width: 320,
    height: 225,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reacts: {
    borderTopWidth: 2,
    borderTopColor: 'gray',
    paddingTop: 15,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    fontWeight: '200',
  },
  like: {
    flexDirection: 'row',
  },
});