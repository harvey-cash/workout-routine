import React from "react";
import { useState } from "react";
import { FlatList, StyleSheet, TextInput, Text, View } from "react-native";

import Set from "./src/app/Set"
import { SetType } from "./src/app/SetType"
import Exercise from "./src/app/Exercise"

function MainScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: new Set(SetType.Warmup, new Exercise("Bicep Curl"), 10, 8)}
        ]}
        renderItem={({item}) => SetViewHolder(item.key)}
      />
    </View>
  )
}

function SetViewHolder(set: Set) {

  return (
    <View style={styles.item}>
      <Text>{set.type}</Text>
      <Text>{set.mass}</Text>
      <Text>{set.reps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default MainScreen