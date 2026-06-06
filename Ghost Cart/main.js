let globalCart = {
    userId: "U123",
    totalPrice: 1500,
    items: ["Laptop", "Chuột không dây"],
    metadata: { isLocked: false } // Thuộc tính nested (lồng nhau)
};

function previewCheckout(cartData, newDiscountAmount, extraGift) {
    // LỖI NGHIÊM TRỌNG: Gán trực tiếp Object dẫn đến truyền tham chiếu
    let tempCart =structuredClone(cartData); 
    
    // Thay đổi trên giỏ hàng tạm
    tempCart.totalPrice = tempCart.totalPrice - newDiscountAmount;
    tempCart.items.push(extraGift);
    tempCart.metadata.isLocked = true;
    
    return tempCart; // Trả về giỏ hàng xem trước
}

// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
console.log("1. Giỏ hàng gốc TRƯỚC khi xem trước:", JSON.stringify(globalCart));

// Khách hàng bấm xem trước: Giảm 200k và tặng "Bàn di chuột"
let previewResult = previewCheckout(globalCart, 200, "Bàn di chuột");

console.log("2. Giỏ hàng xem trước (Hiển thị cho khách):", JSON.stringify(previewResult));

// LỖI: Giỏ hàng gốc đã bị thay đổi (Bị trừ tiền, thêm quà, khóa giỏ) dù chưa thanh toán!
console.log("3. Giỏ hàng gốc SAU khi xem trước (BỊ LỖI!):", JSON.stringify(globalCart));