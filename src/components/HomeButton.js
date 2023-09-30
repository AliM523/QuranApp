import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 export default function MenuButton ({ title, subtitle }) {
  return (
      <TouchableOpacity style={styles.button} onPress={name}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>  
        </View>
        <View>
        <Icon name="arrow-right" size={10} color={COLORS.orange} />
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    margin: 13,
    elevation: 5, // shadow on Android
    shadowOpacity: 0.3, // shadow on iOS
    shadowRadius: 4, // shadow on iOS
    // 80% of window width
    width: windowWidth * 0.9,
    // 10% of window height
    height: windowHeight * 0.08,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 14,
    color: COLORS.darkGray,
  },
  textContainer: {
    marginLeft: 5,
    flexDirection: 'column'
  },
  topSpace: {
    marginTop: 5,
  }
});
