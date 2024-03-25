// Function to dynamically add student info
function addStudentInfo() {
    const studentInfo = document.getElementById('student-info');
    const studentId = "200551715"; 
    const studentName = "Sukhjot Singh"; 
    studentInfo.textContent = `Student ID: ${studentId} | Name: ${studentName}`;
}

// Pizza class
class Pizza {
    constructor(size, crust, toppings, sauce, cheese, quantity) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.sauce = sauce;
        this.cheese = cheese;
        this.quantity = quantity;
    }

    // Method to generate pizza description HTML
    generatePizzaDescriptionHTML(delivery, deliveryAddress, instructions) {
        return `<h2>Your Pizza</h2>
                <p>Size: ${this.size}</p>
                <p>Crust: ${this.crust}</p>
                <p>Sauce: ${this.sauce}</p>
                <p>Cheese: ${this.cheese}</p>
                <p>Toppings: ${this.toppings}</p>
                <p>Quantity: ${this.quantity}</p>
                <p>Delivery: ${delivery ? 'Yes' : 'No'}</p>
                <p>Delivery Address: ${delivery ? deliveryAddress : 'N/A'}</p>
                <p>Special Instructions: ${instructions ? instructions : 'N/A'}</p>`;
    }
}

function orderPizza() {
    // Get form values
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const quantity = document.getElementById('quantity').value;
    const delivery = document.getElementById('delivery').checked;
    const deliveryAddress = document.getElementById('delivery-address').value;
    const instructions = document.getElementById('instructions').value;
    const toppings = [];
    const checkboxes = document.getElementsByName('topping');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            toppings.push(checkbox.value);
        }
    });
    const sauce = document.getElementById('sauce').value; // Get selected sauce
    const cheese = document.getElementById('cheese').value; // Get selected cheese
    // Check if no toppings are selected
    const toppingsDisplay = toppings.length > 0 ? toppings.join(', ') : 'None';
    console.log()

    if(toppings.length<1){
        alert("select toppings");
        return
    }
    if(delivery==true&&deliveryAddress==""){
        alert("please add your delevery address");
        return
    }

    // Create Pizza object
    const pizza = new Pizza(size, crust, toppingsDisplay, sauce, cheese, quantity);
    // Display pizza description
    const pizzaDescription = document.getElementById('pizza-description');
    pizzaDescription.innerHTML = pizza.generatePizzaDescriptionHTML(delivery, deliveryAddress, instructions);
}

// Adding event listener to order button
document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.getElementById('order-button');
    orderButton.addEventListener('click', orderPizza);
});

// Call function to add student info when page loads
window.onload = addStudentInfo;
