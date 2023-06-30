import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Image, Text } from "react-native";

const Untitled4 = () => {
  const dogs = [{
    name: "Labrador Retriever",
    image: require("./images/labrador.jpg")
  }, {
    name: "German Shepherd",
    image: require("./images/german_shepherd.jpg")
  }, {
    name: "Golden Retriever",
    image: require("./images/golden_retriever.jpg")
  }, {
    name: "Bulldog",
    image: require("./images/bulldog.jpg")
  }, {
    name: "Beagle",
    image: require("./images/beagle.jpg")
  }];
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        {dogs.map((dog, index) => <React.Fragment key={index}>
            <Image source={dog.image} style={styles.image} />
            <Text style={styles.name}>{dog.name}</Text>
          </React.Fragment>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});
export default Untitled4;