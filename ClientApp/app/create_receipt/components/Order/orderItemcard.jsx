import React, { memo, useContext } from "react";

import { formatNumber } from "@/constants/convertNumber";
import { Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const OrderItemCard = ({ item, index }) => {
  return (
    <>
      <ThemedView className="w-4/5 gap-1">
        <ThemedView className={"flex-row justify-between"}>
          <ThemedView className="flex-row items-center gap-2">
            <ThemedText
              className={"px-2 rounded-md bg-Beige desktop:text-sm text-xs"}
            >
              {index + 1} {/* Start index at 1 instead of 0 */}
            </ThemedText>
            <ThemedText className="font-medium desktop:text-sm text-xs">
              {item?.itemName}
            </ThemedText>
          </ThemedView>
          <ThemedText className="opacity-50 desktop:text-sm text-xs font-medium">
            {`x${formatNumber(item?.quantity)}`}
          </ThemedText>
          <ThemedText className="color-[#D57155] desktop:text-sm text-xs font-medium">
            {`${formatNumber(item?.originPrice)} đ`}
          </ThemedText>
        </ThemedView>
        {/* Additional item details */}
        <ThemedView className={"flex-row gap-2 desktop:text-sm text-xs"}>
          <ThemedText className={"opacity-50 desktop:text-sm text-xs"}>
            Size nhỏ:
          </ThemedText>
          <ThemedText className={"desktop:text-sm text-xs"}>
            {formatNumber(item?.originPrice)}
          </ThemedText>
        </ThemedView>
        <ThemedView className={"flex-row gap-2 desktop:text-sm text-xs"}>
          <ThemedText className={"opacity-50 "}>Thịt thêm:</ThemedText>
          <ThemedText> {formatNumber(0)} </ThemedText>
        </ThemedView>
        <ThemedView className={"flex-row gap-2 desktop:text-sm text-xs"}>
          <ThemedText className={"opacity-50 "}>Giảm giá:</ThemedText>
          <ThemedText className={"color-danger "}>0 đ</ThemedText>
        </ThemedView>
        <ThemedView className={"flex-row gap-2 desktop:text-sm text-xs"}>
          <ThemedText className={"opacity-50 "}>Thuế:</ThemedText>
          <ThemedText className={""}>0 đ</ThemedText>
        </ThemedView>
      </ThemedView>
    </>
  );
};

export default memo(OrderItemCard);
