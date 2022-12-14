import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import books from "../../data/books.json"
import { useNavigation } from "@react-navigation/native"
const BooksList = () => {
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.BooksList}
        data={books}
        keyExtractor={book => book.imageLink}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("BookDetail", { book: item })}
            >
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
