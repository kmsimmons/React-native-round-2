import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import SearchPage from './SearchPage'

export default class App extends Component {
	render() {
		return (
      <SearchPage />
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
})