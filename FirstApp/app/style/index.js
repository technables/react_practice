import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 10,
  },
  link: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  sidebarlogo: {
    height: 100,
    width: 100,
  },
  logo: {
    height: 200,
    width: 200,
  },
  appcontainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    alignContent: 'center',
    marginTop: 50,
    borderColor: 'transparent',
  },
  card: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  textcenter: {
    textAlign: 'center',
  },

  loginCotainer: {
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    borderColor: '#000',
  },
  input: {
    width: '100%',
  },
});

export default styles;
