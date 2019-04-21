/*
 * @Description: 
 * @Author: Jason
 * @LastEditors: Jason
 * @Date: 2019-03-09 23:06:28
 * @LastEditTime: 2019-04-21 20:36:27
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';
import Orientation from 'react-native-orientation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      form: {
        fullName: 'Marco Polo',
        tos: false,
      }
    }
  }
  handleValueChange(values) {
    console.log('handleValueChange', values)
    this.setState({ form: values })
  }

  componentWillMount() {
    //Orientation.lockToPortrait();//只允许竖屏
    Orientation.lockToLandscape();//只允许横屏
  }
  
  render() {
    const { fullName, tos, gender } = this.state.form
    console.log('render', this.state.form)

    return (
      <GiftedForm
        formName='signupForm'
        openModal={(route) => { this.props.navigator.push(route) }}
        onValueChange={this.handleValueChange.bind(this)}
        validators={{
          fullName: {
            title: 'Full name',
            validate: [{
              validator: 'isLength',
              arguments: /^[a-zA-Z0-9]{3,}$/,
              message: '{TITLE} can contains only alphanumeric characters'
            }]
          },

        }}
      >


        <GiftedForm.TextInputWidget
          name='fullName' // mandatory
          title='Full name'
          placeholder='Marco Polo'
          clearButtonMode='while-editing'
        />
        <GiftedForm.ErrorsWidget/>

        <GiftedForm.HiddenWidget name='tos' value={true} />
      </GiftedForm>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
