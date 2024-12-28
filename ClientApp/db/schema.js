import { appSchema, tableSchema } from "@nozbe/watermelondb";

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "Item",
      columns: [
        { name: "id", type: "number" },
        { name: "brandId", type: "string", isOptional: true },
        { name: "categoryId", type: "number", isOptional: true },
        { name: "commissionLevelMappings", type: "string", isOptional: true },
        { name: "convertedValue", type: "number", isOptional: true },
        { name: "convertedValue", type: "number", isOptional: true },
        { name: "description", type: "number", isOptional: true },
        { name: "isConvertedItemChild", type: "number", isOptional: true },
        { name: "isConvertedItemParent", type: "number", isOptional: true },
        { name: "isDeleted", type: "number", isOptional: true },
        { name: "isLabelPrinted", type: "number", isOptional: true },
        { name: "itemClass", type: "number", isOptional: true },
        { name: "itemCode", type: "number", isOptional: true },
        { name: "itemName", type: "number" },
        { name: "itemTaxId", type: "number", isOptional: true },
        { name: "itemType", type: "number", isOptional: true },
        { name: "lastModificationTime", type: "number", isOptional: true },
        { name: "parentItemId", type: "number", isOptional: true },
        { name: "selectedMax", type: "number", isOptional: true },
        { name: "selectedMin", type: "number", isOptional: true },
        { name: "status", type: "number", isOptional: true },
        { name: "tickLastModificationTime", type: "number", isOptional: true },
        { name: "lastModificationTime", type: "number", isOptional: true },
        { name: "unitOfMeasureNameId", type: "number", isOptional: true },
        { name: "weight", type: "number", isOptional: true },
        { name: "weight", type: "number", isOptional: true },
      ],
    }),
    // Bạn có thể thêm các bảng khác tại đây
  ],
});

export default mySchema;
