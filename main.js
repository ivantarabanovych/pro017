function PizzaOrder(orderId, customerEmail, products){
    this.orderId = orderId;
    this.customerEmail = customerEmail;
    this.products = products;
    this.deliveryStatus = "in processing";
}

PizzaOrder.prototype.total = function(){
    return this.products.reduce((sum, product) => sum + product.price, 0);
};

PizzaOrder.prototype.CheckStatusOfDelivery = function(){
    console.log(`Order #${this.orderId}: Delivery status - ${this.deliveryStatus}`);
};

const pizzaOrder1 = new PizzaOrder(1, "javascript.dog@gmail.com",[
    {productId: 48, name: "Salyami", price: 5.99, option: ["two cheese"]},
    {productId: 49, name: "Coca Cola", price: 1.99, option: ["with ice"]},
]);

const pizzaOrder2 = new PizzaOrder(2, "baclan.banana@gmail.com",[
    {productId: 50, name: "Caesar", price: 7.99, option: ["cheese sides"]},
    {productId: 51, name: "Multivitamin juice", price: 2.99, option: ["2 litr"]},
    {productId: 52, name: "Set Gold Dragon", price: 15.99, option: ["for 6 persons"]},
]);

console.log(`Total order sum #${pizzaOrder1.orderId}: $${pizzaOrder1.total().toFixed(2)}`);
pizzaOrder1.CheckStatusOfDelivery();

console.log(`Total order sum #${pizzaOrder2.orderId}: $${pizzaOrder2.total().toFixed(2)}`);
pizzaOrder2.CheckStatusOfDelivery();

pizzaOrder1.deliveryStatus = "Delivered";
pizzaOrder1.CheckStatusOfDelivery();