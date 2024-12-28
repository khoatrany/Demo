import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FlashList } from "@shopify/flash-list";
import { AntDesign, FontAwesome6, FontAwesome } from "@expo/vector-icons";

import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { POSContext } from "./POSContext";
import { ThemedInput } from "@/components/ThemedInput";

export default function NavBar() {
  const { state, dispatch } = useContext(POSContext);
  const { width } = useWindowDimensions();

  return (
    <View className="flex flex-row items-center justify-between bg-darkGray px-2 py-2">
      <View className="flex flex-row items-center gap-2">
        {/* Menu Icon */}
        <TouchableOpacity className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-normalGray">
          <Text className="text-lg color-white">☰</Text>
        </TouchableOpacity>

        {/* Search Bar */}
        <ThemedInput
          className=" bg-white w-[120px] rounded-[8px] text-base p-3 tablet:w-[250px] desktop:w-[350px]"
          placeholder="Tìm sản phẩm"
          placeholderTextColor="#999"
        />

        {/* Order Summary */}
        <ThemedView className={"w-1/2"}>
          {/* Horizontal ScrollView */}
          <ScrollView
            horizontal // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides the horizontal scroll indicator
            contentContainerStyle={{ flexDirection: "row", gap: 4 }} // Ensures children are
            className="w-full"
            // cldisplayed in a row
          >
            {/* First Order */}

            {state?.order &&
              state?.order?.length > 0 &&
              state?.order?.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    dispatch({ type: "SET_SELECTION", payload: item });
                  }}
                  className={`flex-row  ${
                    state?.selection?.guid == item?.guid
                      ? "bg-white color-white"
                      : "bg-darkGray"
                  }   mr-2 h-[45px] items-center px-1 rounded-[8px]`}
                >
                  <ThemedText
                    className={` ${
                      state?.selection?.guid == item?.guid
                        ? " color-black"
                        : "color-white"
                    } pl-1 text-sm`}
                  >
                    {item?.name}
                  </ThemedText>
                  <TouchableOpacity
                    className="ml-3"
                    onPress={() =>
                      dispatch({ type: "REMOVE_ORDER", payload: item.guid })
                    }
                  >
                    <AntDesign
                      className="opacity-70"
                      name="closecircle"
                      size={22}
                      color={`${
                        state?.selection?.guid == item?.guid ? "#ccc" : "#ccc"
                      }`}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}

            {/* Add Order Button */}
            <TouchableOpacity
              onPress={() => dispatch({ type: "ADD_ORDER" })}
              className="w-[45px] h-[45px] items-center justify-center rounded-full bg-normalGray"
            >
              <FontAwesome6 name="add" size={24} color="white" />
            </TouchableOpacity>
          </ScrollView>
        </ThemedView>

        {/* Add Button */}
      </View>
      {/* Home and Notification Icons */}
      <ThemedView>
        {width <= 768 ? (
          <FontAwesome name="bell" size={24} color="white" />
        ) : (
          <Text className="text-sm color-white">09:12 18/12/2024</Text>
        )}
      </ThemedView>
    </View>
  );
}
