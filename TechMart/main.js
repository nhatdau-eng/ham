 function calculateSubtotal(cart){
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price * cart[i].quantity;
    }
        return subtotal ;
    }
    function calculateDiscount(subtotal, customerType){
    let discount = 0;
    if (customerType === "VIP") {
        discount = subtotal * 0.20; // VIP giảm 20%
    } else if (customerType === "MEMBER") {
        discount = subtotal * 0.10; // Member giảm 10%
    }
    return {
   discount,totalAfterDiscount: subtotal - discount
     };
    }
    function calculateVAT(totalAfterDiscount){
    const tax = totalAfterDiscount * 0.10; // Thuế 10%
    const finalTotal = totalAfterDiscount + tax;
    return {
        tax,
    finalTotal
    };
}
function printReceipt(subtotal, discount, tax, finalTotal){
    console.log("--- HÓA ĐƠN TECHMART ---");
    console.log("Tạm tính: " + subtotal + " VNĐ");
    console.log("Giảm giá: " + discount + " VNĐ");
    console.log("Thuế VAT: " + tax + " VNĐ");
    console.log("TỔNG THANH TOÁN: " + finalTotal + " VNĐ");
    console.log("------------------------");
}
function processOrder(cart, customerType) {
    const subtotal = calculateSubtotal(cart);

    const { discount, totalAfterDiscount } =
        calculateDiscount(subtotal, customerType);

    const { tax, finalTotal } =
        calculateVAT(totalAfterDiscount);

    printReceipt(
        subtotal,
        discount,
        tax,
        finalTotal
    );

    return finalTotal;
}
const myCart = [
    { item: "Laptop", price: 15000000, quantity: 1 },
    { item: "Chuột", price: 300000, quantity: 2 }
];
processOrder(myCart, "VIP");
const cart2 = [
    { item: "Laptop", price: 15000000, quantity: 2 },
    { item: "Bàn phím", price: 1200000, quantity: 1 },
    { item: "Tai nghe", price: 2500000, quantity: 1 }
];

processOrder(cart2, "VIP");
const cart3 = [
    { item: "Laptop", price: 15000000, quantity: 0 }
];

processOrder(cart3, "VIP");