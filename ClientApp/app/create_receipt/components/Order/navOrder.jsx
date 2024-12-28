import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { Text, View } from "react-native";

const NavOrder = () => {
  return (
    <View className="h-[54px] flex flex-row ">
      <View className="h-[54px] w-[54px] flex items-center justify-center bg-primary"></View>
      <View className="h-[54px] w-[70px] flex items-center justify-center bg-primary border-l border-white">
        <Text className="text-center justify-center color-white ">
          Chọn bàn
        </Text>
      </View>
      <View className="h-[54px] flex-1 flex items-center justify-center bg-Beige border-l border-white">
        <Text className="text-center justify-center text-sm">Khách lẻ</Text>
      </View>
      <View className="h-[54px] w-[54px] flex items-center justify-center bg-Beige border-l border-white">
        <Ionicons name="add-outline" size={32} />
      </View>
      <View className="h-[54px] w-[70px] flex items-center justify-center bg-[#D1BD96] border-l border-white">
        <Text className="text-center justify-center  ">Khách 2</Text>
      </View>
      <View className="h-[54px] w-[54px] flex items-center justify-center bg-primary">
        <Ionicons name="menu-sharp" size={32} color="white" />
      </View>
    </View>
  );
};

export default NavOrder;
