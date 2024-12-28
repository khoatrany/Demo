// db/index.js
import { Database } from "@nozbe/watermelondb";
import { SQLiteAdapter } from "@nozbe/watermelondb/SQLiteAdapter";
import mySchema from "./schema";
import Item from "./models/item";

// Tạo adapter cho SQLite
const adapter = new SQLiteAdapter({
  schema: mySchema,
});

// Khởi tạo database với các model
const database = new Database({
  adapter,
  modelClasses: [Item],
});

// Xuất database
export default database;
