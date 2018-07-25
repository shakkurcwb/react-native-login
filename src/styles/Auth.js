import React from 'react';
import { StyleSheet } from 'react-native';

const _styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E95420',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
  },
  subHeader: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 10,
    height: 35,
    width: 200,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  label: {
    color: '#fff',
  },
  link: {
    color: 'blue',
  },
  button: {
    margin: 10,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#AEA79F',
    textAlign: 'center',
    color: '#fff',
    overflow: 'hidden',
  },
  title: {
    color: '#333',
    fontSize: 48,
    textAlign: 'center',
  },
  subTitle: {
    color: '#545454',
    fontSize: 24,
    textAlign: 'center',
  },
  
});
export default _styles;