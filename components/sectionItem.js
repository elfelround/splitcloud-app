import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity  } from 'react-native';
import THEME from '../styles/variables';

export default function SectionItem(props){
  let isActiveStyle = props.active == props.name ? styles.itemSelected:null;
  return <TouchableOpacity
    key={props.key}
    onPress={() => {
      props.onSelected(props.name)
    }
  }>
    <Text style={[styles.itemText,isActiveStyle]}>{props.label}</Text>
  </TouchableOpacity> ;
}

const styles = StyleSheet.create({
  itemText : {
    color: THEME.mainColor,
    fontSize: 18,
    fontWeight:'600',
    paddingRight:20
  },
  itemSelected:{
    color: THEME.mainHighlightColor
  }
});