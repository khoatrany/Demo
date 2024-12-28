import React, { memo, useCallback, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { POSContext } from "../POSContext";

import { FlashList } from "@shopify/flash-list";
import ItemCard from "./itemCard";
import { dataItemTmp } from "./dataTMP";
import { ThemedView } from "@/components/ThemedView";

const MenuItem = () => {
  const { dispatch } = useContext(POSContext);
  const { width } = useWindowDimensions(); // Lấy chiều rộng màn hình

  // Xác định số cột dựa trên kích thước màn hình
  const numColumns = width > 1200 ? 6 : width >= 768 ? 6 : 4;
  // const itemWidth = width > 1200 ? 220 : width > 768 ? 110 : 90;
  // const numColumns = Math.floor(width / (itemWidth + 10));

  const renderOrderItem = ({ item, index }) => (
    <ThemedView className={"p-1 w-full"}>
      <TouchableOpacity
        onPressIn={() => {
          // addItemToOrder(item); // Gọi trực tiếp addItemToOrder
          dispatch({ type: "ADD_ITEM_TO_ORDER", payload: { item } });
        }}
        key={index}
        className="bg-white  w-full desktop:h-[170px] tablet:h-[140px] h-[100px] rounded-md items-center relative cursor-pointer"
      >
        <ItemCard item={item} />
      </TouchableOpacity>
    </ThemedView>
  );

  return (
    <ThemedView className={"flex-1 p-3"}>
      <FlashList
        data={dataItemTmp}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100} // Provide estimated item size
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
};

export default memo(MenuItem);
