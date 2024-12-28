import React from "react";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet, Text } from "react-native";
import { ThemedText } from "./ThemedText";
const uri = require("../assets/images/empty.png");

const EmptyOrder = () => {
  return (
    <ThemedView className={"flex-1 items-center justify-center"}>
      <Image source={uri} className="" />
      <ThemedText>Đơn hàng đang trống</ThemedText>
      <ThemedText className="opacity-50">
        Vui lòng chọn món trong thực đơn
      </ThemedText>
    </ThemedView>
  );
};

export default EmptyOrder;
