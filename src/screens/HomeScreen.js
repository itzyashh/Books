import { StyleSheet, Text, View } from "react-native"
import React from "react"
import BooksList from "./components/BooksList"

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <BooksList />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
