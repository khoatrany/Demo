import React, { useCallback, useContext, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity } from "react-native";
import { POSContext } from "../POSContext";
import { formatNumber } from "@/constants/convertNumber";
import { FlashList } from "@shopify/flash-list";
const Category = () => {
  const [selectRow, setSelectRow] = useState({});
  const menuItems = [
    { id: 1, name: "MÓN NƯỚNG" },
    { id: 2, name: "HẢI SẢN" },
    { id: 3, name: "CHIÊN XÀO" },
    { id: 4, name: "NƯỚC UỐNG" },
    { id: 5, name: "ĂN VẶT, TRÁI CÂY" },
    { id: 6, name: "OPTION 6" },
    { id: 7, name: "OPTION 7" },
    { id: 8, name: "OPTION 8" },
    { id: 9, name: "OPTION 9" },
    { id: 10, name: "OPTION 10" },
    { id: 11, name: "OPTION 11" },
  ];

  const renderOrderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity onPress={() => setSelectRow(item)}>
        <ThemedView
          key={index}
          className={`${
            selectRow?.id == item?.id ? "bg-[#B44F33]" : "bg-primary"
          } w-[104px]  h-[80px] justify-center items-center border-l border-white`}
        >
          <ThemedText className={"color-white text-xs p-3 text-center"}>
            {item.name}
          </ThemedText>
        </ThemedView>
      </TouchableOpacity>
    ),
    [menuItems, selectRow]
  );
  return (
    <ThemedView className={"bg-[#D1BD96] w-full h-[80px]"}>
      <FlashList
        data={menuItems}
        renderItem={renderOrderItem}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100} // Provide estimated item size
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
};

export default Category;
