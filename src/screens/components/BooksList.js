import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import books from "../../data/books.json"
const BooksList = ({ navigation }) => {
  console.log(navigation)
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.BooksList}
        data={books}
        keyExtractor={book => book.imageLink}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("BookDetail")}>
              <Text style={styles.textStyle}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default BooksList

const styles = StyleSheet.create({
  // textStyle: {
  //   marginVertical: 50,
  // },
  BooksList: {
    marginTop: 10,
  },
})
