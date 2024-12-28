import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import POSReceipt from "./create_receipt/pos_receipt";
import React, { useEffect } from "react";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import "../global.css";
// Định nghĩa tác vụ nền bên ngoài component
const BACKGROUND_FETCH_TASK = "background-fetch-task";
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log("Tác vụ Background Fetch đã được thực thi!");
    const now = new Date();
    console.log(
      `Background Fetch được kích hoạt vào lúc: ${now.toISOString()}`
    );
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error("Lỗi khi thực thi Background Fetch:", error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

// Hàm đăng ký Background Fetch
const registerBackgroundFetch = async () => {
  try {
    const isRegistered = await BackgroundFetch.getStatusAsync();
    console.log("TaskManager0", TaskManager);
    console.log("BackgroundFetch", BackgroundFetch);
    if (isRegistered === BackgroundFetch?.BackgroundFetchStatus?.Available) {
      console.log("Background Fetch đã sẵn sàng.");
      return;
    }

    await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
      minimumInterval: 30, // Thời gian tối thiểu giữa mỗi lần chạy (30 giây)
      stopOnTerminate: false, // Tiếp tục chạy khi ứng dụng bị tắt android only
      startOnBoot: true, // Tự động khởi động khi thiết bị bật android only
    });

    console.log("Đăng ký tác vụ Background Fetch thành công!");
  } catch (error) {
    console.error("Lỗi khi đăng ký tác vụ Background Fetch:", error);
  }
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Xử lý splash screen
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Đăng ký Background Fetch khi ứng dụng khởi động
  useEffect(() => {
    registerBackgroundFetch();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <POSReceipt />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
