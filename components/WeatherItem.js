import React from "react";
import { StyleSheet, View, Text, Image  } from "react-native";

const WeatherItem = () => {

  return (
    <View style={styles.container}>
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.text}>
          大阪
        </Text>
        <Text style={styles.subText}>{koukaihiduke}</Text>
      </View>

      <View style={styles.gazoBox}>
        <Image style={{ width: 70, height: 70 }} source={{ url: "https://picsum.photos/id/599/200/300" }} />
        <Text style={styles.subText}>くもり</Text>
      </View>
    </View>
    </View>
  );
}

export default WeatherItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  moziBox: {
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  gazoBox: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  
  text: {
    fontSize: 17,
  },

  subText: {
    fontSize: 14,
    color: "darkblue",
    paddingLeft: 15,
  },
});