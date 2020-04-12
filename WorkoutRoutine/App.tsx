import React from "react";
import { useState } from "react";
import { Button, Text, View } from "react-native";

function Cat(cat) {
  const [isHungry, setIsHungry] = useState(true)
  const [isTired, setIsTired] = useState(true)

  return (
    <View>
      <Text>
        I am {cat.name}, and I am {isHungry ? "hungry" : "full"} and {isTired ? "tired" : "rested"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <Button
        onPress={() => {
          setIsTired(false)
        }}
        disabled={!isTired}
        title={isTired ? "Put me to bed!" : "Meow!"}
        />
    </View>
  );
}

export default function Cafe() {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
}
