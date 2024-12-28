import React, { useEffect } from "react";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const BACKGROUND_FETCH_TASK = "background-fetch-task";

// Định nghĩa tác vụ nền
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log("Background Fetch task executed!");
    // Thực hiện công việc nền (ví dụ: gọi API hoặc cập nhật dữ liệu)
    const now = new Date();
    console.log(`Background fetch triggered at ${now.toISOString()}`);
    return BackgroundFetch.Result.NewData;
  } catch (error) {
    console.error(error);
    return BackgroundFetch.Result.Failed;
  }
});

// Hàm đăng ký Background Fetch
const registerBackgroundFetch = async () => {
  try {
    const isRegistered = await BackgroundFetch.getStatusAsync();
    if (isRegistered === BackgroundFetch.Status.Available) {
      console.log("Background fetch is already available.");
      return;
    }

    await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
      minimumInterval: 15 * 60, // Thời gian tối thiểu giữa mỗi lần chạy (15 phút)
      stopOnTerminate: false, // Tiếp tục chạy khi ứng dụng bị tắt
      startOnBoot: true, // Tự động khởi động khi thiết bị bật
    });

    console.log("Background fetch task registered successfully!");
  } catch (error) {
    console.error("Error registering background fetch task:", error);
  }
};
