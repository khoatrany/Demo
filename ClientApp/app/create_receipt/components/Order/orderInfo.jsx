import { ThemedInput } from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import EmptyOrder from "@/components/EmptyOrder";
import { Ionicons } from "@expo/vector-icons";
import React, { memo, useContext, useMemo, useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list"; // Import FlashList instead of ScrollView
import { POSContext } from "../POSContext";
import OrderItemCard from "./orderItemcard";

const OrderInfo = () => {
  // const { order, removeItemFromOrder, selection } = useContext(POSContext);
  const { state, dispatch } = useContext(POSContext);
  const renderOrderItem = useCallback(
    ({ item, index }) => (
      <ThemedView
        key={index}
        className="py-2 gap-2 border-b-2 border-dashed border-gray flex-row"
      >
        <OrderItemCard item={item} index={index}></OrderItemCard>
        <ThemedView className={"w-1/5 items-center justify-center"}>
          <TouchableOpacity
            className="p-2 border border-gray rounded-md"
            onPress={() =>
              dispatch({ type: "REMOVE_ITEM_FROM_ORDER", payload: item.id })
            }
          >
            <Ionicons name="trash-outline" size={18} color="red" />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    ),
    []
  );

  return (
    <ThemedView className="flex-1 p-2 gap-2 overflow-auto">
      {state?.selection?.OrderItem?.length > 0 && (
        <>
          <FlashList
            data={state?.selection?.OrderItem}
            renderItem={renderOrderItem}
            keyExtractor={(item) => item.id}
            // ListEmptyComponent={EmptyOrder}
            estimatedItemSize={100} // Provide estimated item size
          />
          <ThemedInput
            className="h-[40px] bg-white w-full border border-gray px-2 rounded-md focus:border-gray"
            placeholder="Nhập ghi chú"
            placeholderTextColor="#999"
          />
        </>
      )}

      {(state?.selection?.OrderItem?.length == 0 ||
        !state?.selection?.OrderItem) && ( // Fixed typo here
        <EmptyOrder></EmptyOrder>
      )}
    </ThemedView>
  );
};

export default memo(OrderInfo);
