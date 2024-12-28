import { Model } from "@nozbe/watermelondb";
import { field, date } from "@nozbe/watermelondb/decorators";

class Item extends Model {
  static table = "Item"; // Tên bảng trong cơ sở dữ liệu
  // Định nghĩa các thuộc tính của model
  @field("id") id; // ID của item
  @field("brandId") brandId; // ID thương hiệu
  @field("categoryId") categoryId; // ID danh mục
  @field("commissionLevelMappings") commissionLevelMappings; // Mappings cấp hoa hồng
  @field("convertedValue") convertedValue; // Giá trị đã chuyển đổi
  @field("description") description; // Mô tả
  @field("isConvertedItemChild") isConvertedItemChild; // Trạng thái item con đã chuyển đổi
  @field("isConvertedItemParent") isConvertedItemParent; // Trạng thái item cha đã chuyển đổi
  @field("isDeleted") isDeleted; // Trạng thái đã xóa
  @field("isLabelPrinted") isLabelPrinted; // Trạng thái đã in nhãn
  @field("itemClass") itemClass; // Lớp item
  @field("itemCode") itemCode; // Mã item
  @field("itemName") itemName; // Tên item
  @field("itemTaxId") itemTaxId; // ID thuế của item
  @field("itemType") itemType; // Loại item
  @field("lastModificationTime") lastModificationTime; // Thời gian sửa đổi cuối cùng
  @field("parentItemId") parentItemId; // ID item cha
  @field("selectedMax") selectedMax; // Giá trị tối đa được chọn
  @field("selectedMin") selectedMin; // Giá trị tối thiểu được chọn
  @field("status") status; // Trạng thái
  @field("tickLastModificationTime") tickLastModificationTime; // Thời gian sửa đổi cuối cùng cho tick
  @field("unitOfMeasureNameId") unitOfMeasureNameId; // ID tên đơn vị đo
  @field("weight") weight; // Trọng lượng
  @field("isDeleted") isDeleted; // Trọng lượng
  // Có thể thêm các phương thức tùy ý ở đây
  // Ví dụ: Phương thức để kiểm tra xem item có bị xóa hay không
  //   isDeletedItem() {
  //     return this.isDeleted === 0; // Giả sử 1 là đã xóa
  //   }
}

export default Item;
