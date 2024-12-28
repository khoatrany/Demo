import React, { useEffect, useState } from "react";

import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import NavBar from "./components/navbar";
import MenuItem from "./components/MenuItem/menuItem";
import NavOrder from "./components/Order/navOrder";
import OrderInfo from "./components/Order/orderInfo";
import FooterOrder from "./components/Order/footerOrder";
import Category from "./components/MenuItem/category";
import { ScrollView, useWindowDimensions } from "react-native";
import { POSProvider } from "./components/POSContext";
import { db } from "../../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export default function POSReceipt() {
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchUsers = () => {
      try {
        const unsubscribe = onSnapshot(
          collection(db, "transactions"),
          async (snapshot) => {
            const usersData = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }));

            setData(usersData);
          },
          (error) => {
            console.error("Error fetching users: ", error);
          }
        );

        return unsubscribe;
      } catch (error) {
        console.error("Error setting up real-time listener: ", error);
      }
    };

    const unsubscribe = fetchUsers();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return (
    <POSProvider>
      <ThemedView className=" flex-1  bg-body">
        <NavBar></NavBar>
        {/* <ThemedText className="text-4xl font-bold mb-2.5">Welcome!</ThemedText>
      <HelloWave /> */}

        <ThemedView className="flex-1 ">
          <ThemedView className="desktop:flex-row flex-col h-full">
            <ThemedView className="desktop:w-2/3 w-full desktop:h-full h-1/2 desktop:min-h-full ">
              <MenuItem />
              <Category></Category>
            </ThemedView>
            <ThemedView
              className={`desktop:w-1/3  w-full desktop:h-full h-1/2 bg-white`}
            >
              {width > 1200 && <NavOrder></NavOrder>}

              <OrderInfo></OrderInfo>
              <FooterOrder></FooterOrder>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* <ThemedButton title="Chuyển trang" onPress={() => {}}></ThemedButton> */}
      </ThemedView>
    </POSProvider>
  );
}
