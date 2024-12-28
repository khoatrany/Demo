// db/operations/itemOperations.js
import database from "../database"; // Đường dẫn đến database
import Item from "../models/Item"; // Đường dẫn đến model Item

// Hàm điều khiển thao tác với item
export const performItemOperation = async (action, data, table) => {
  const itemCollection = database.get(table); // Lấy collection Item
  switch (action) {
    case "create":
      return await database.write(async () => {
        await itemCollection.create((item) => {
          Object.keys(data).forEach((key) => {
            if (item.hasOwnProperty(key)) {
              item[key] = data[key];
            }
          });
        });
      });
    case "read":
      if (data.id) {
        return await itemCollection.find(data.id); // Lấy item theo ID
      } else {
        return await itemCollection.query().fetch(); // Lấy tất cả item
      }
    case "update":
      return await database.write(async () => {
        const item = await itemCollection.find(data.id);
        Object.keys(data.updates).forEach((key) => {
          if (item.hasOwnProperty(key)) {
            item[key] = data.updates[key];
          }
        });
      });
    case "delete":
      return await database.write(async () => {
        const item = await itemCollection.find(data.id);
        await item.markAsDeleted(); // Đánh dấu item là đã xóa
      });

    default:
      throw new Error("Invalid action");
  }
};
