function validateOrder(order) {
    if (!order.items || order.items.length === 0) {
        return {
            isValid: false,
            message: "Đơn hàng rỗng!"
        };
    }
    if (!order.email || !order.email.includes("@")) {
        return {
            isValid: false,
            message: "Email không hợp lệ!"
        };
    }
    return {
        isValid: true
    };
}
function calculateOrderTotal(items) {
    let subtotal = 0;

    for (const item of items) {
        subtotal += item.price * item.quantity;
    }
    const vat = subtotal * 0.1;
    return subtotal + vat;
}
function saveOrder(totalAmount) {
    const dbRecord = {
        orderId: Math.floor(Math.random() * 1000),
        amount: totalAmount,
        status: "PAID"
    };

    console.log(
        `[DB] Đã lưu đơn hàng ${dbRecord.orderId} vào CSDL.`
    );

    return dbRecord;
}
function sendReceiptEmail(email, totalAmount) {
    console.log(
        `[EMAIL] Đang gửi biên lai tới ${email}...`
    );

    console.log(
        `[EMAIL] Nội dung: Tổng tiền của bạn là ${totalAmount} VND.`
    );
}
function processOrder(order) {
    console.log("--- Bắt đầu xử lý đơn hàng ---");

    const validationResult = validateOrder(order);

    if (!validationResult.isValid) {
        return {
            status: "FAILED",
            message: validationResult.message
        };
    }
    const totalAmount = calculateOrderTotal(order.items);
    const dbRecord = saveOrder(totalAmount);

    sendReceiptEmail(
        order.email,
        totalAmount
    );
    return {
        status: "SUCCESS",
        orderId: dbRecord.orderId,
        total: totalAmount
    };
}
const validOrder = {
    email: "khachhang@gmail.com",
    items: [
        {
            name: "Pizza",
            price: 150000,
            quantity: 2
        },
        {
            name: "Coca",
            price: 20000,
            quantity: 3
        }
    ]
};

console.log(processOrder(validOrder));