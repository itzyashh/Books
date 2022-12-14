import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

const BookDetailScreen = () => {
  const route = useRoute()

  const { book } = route.params
  console.log(book)
  return (
    <View>
      <Text>BookDetailScreen</Text>
    </View>
  )
}

export default BookDetailScreen

const styles = StyleSheet.create({})
