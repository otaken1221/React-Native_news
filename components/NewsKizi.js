import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NewsKizi = () => {
  return (
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.text}>
          これはかわいい犬の画像です。猫を2匹飼っていますが犬も飼いたいです。
        </Text>
        <Text style={styles.subText}>テム</Text>
      </View>
      <View style={styles.gazoBox}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ url: "https://picsum.photos/id/237/200/300" }}
        />
      </View>
    </View>
  );
};

export default NewsKizi;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between"
  },

  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  },

  Text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "red",
  }
});
