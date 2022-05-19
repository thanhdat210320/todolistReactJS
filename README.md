# Các vấn đề cần lưu ý

1. Chưa sử dụng redux observable
2. Có tích hợp redux thunk nhưng không thấy sử dụng
3. Hạn chế truyền inline arrow function
4. Với danh sách:
	- Nên filter danh sách ra một biến chung thay vì map inline trong template. Sử dụng conditional render để hiển thị theo trạng thái. 
	- Chưa hoàn thiện chức năng edit todo
	- Chưa có chức năng sort
	- Chưa hiển thị due date
	- Chưa có chức năng check complete todo item
5. Chú ý code convention và format code