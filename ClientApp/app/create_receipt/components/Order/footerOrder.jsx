import React, { useContext } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity } from "react-native";
import { POSContext } from "../POSContext";
import { formatNumber } from "@/constants/convertNumber";
const FooterOrder = () => {
  const { state } = useContext(POSContext);
  return (
    <ThemedView className={"bg-darkGray p-1"}>
      <ThemedView className={"py-2 flex-row items-center justify-between px-2"}>
        <ThemedText className={"color-white text-lg"}>Tổng tiền</ThemedText>
        <ThemedView className={"flex-row gap-2"}>
          <ThemedView className={"bg-Beige p-3 rounded-md"}>
            <ThemedText className={"font-medium text-danger"}>
              {formatNumber(state?.selection?.totalPrice ?? 0)}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView className={"flex-row"}>
        <ThemedView
          className={
            "items-center justify-center h-[80px] flex-row w-1/4  p-1 "
          }
        >
          <TouchableOpacity className="bg-danger items-center justify-center h-full w-full rounded-md px-2">
            <ThemedText className={"color-white text-center"}>
              THOÁT (ESC)
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView
          className={
            "items-center justify-center h-[80px] flex-row w-1/4  p-1 "
          }
        >
          <TouchableOpacity className="bg-badoBlue items-center justify-center h-full w-full rounded-md px-2">
            <ThemedText className={"color-white text-center"}>
              LƯU ĐƠN (F3)
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView
          className={
            "items-center justify-center h-[80px] flex-row w-1/4  p-1 "
          }
        >
          <TouchableOpacity className="bg-badoGreen items-center justify-center h-full w-full rounded-md  px-2">
            <ThemedText className={"color-white text-center"}>
              LƯU & TẠM TÍNH (F2)
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView
          className={
            "items-center justify-center h-[80px] flex-row w-1/4  p-1 "
          }
        >
          <TouchableOpacity className="bg-primary items-center justify-center h-full w-full rounded-md px-2">
            <ThemedText className={"color-white text-center"}>
              Thanh toán (F1)
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default FooterOrder;
