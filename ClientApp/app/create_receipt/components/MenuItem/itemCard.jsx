import React, { memo, useContext } from "react";

import { formatNumber } from "@/constants/convertNumber";
import { Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
const ItemCard = ({ item }) => {
  return (
    <>
      <Image
        source={{
          uri:
            `https://bado-default.s3-ap-southeast-1.amazonaws.com/${item.imagePath}` ||
            "https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg",
        }}
        className="w-full desktop:h-[120px] tablet:h-[90px] h-[60px] rounded-t-md"
      />
      <ThemedView className="text-sm absolute top-1 left-1 bg-primary p-1 rounded-md">
        <ThemedText className="color-white desktop:text-sm text-xs">{`${formatNumber(
          item?.originPrice
        )} đ`}</ThemedText>
      </ThemedView>

      <ThemedText
        className="px-1 text-center mt-1 desktop:text-sm text-xs "
        numberOfLines={2}
      >
        {item?.itemName}
      </ThemedText>
    </>
  );
};

export default memo(ItemCard);
