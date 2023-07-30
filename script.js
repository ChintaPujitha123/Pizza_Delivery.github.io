document.addEventListener("DOMContentLoaded", function() {
    const pizzaItems = document.querySelectorAll(".pizzaItem");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutButton = document.getElementById("checkoutButton");
  
    let cart = [];
  
    pizzaItems.forEach(item => {
      const orderButton = item.querySelector(".orderButton");
      orderButton.addEventListener("click", () => {
        addToCart(item.dataset.name, parseFloat(item.dataset.price));
      });
    });
  
    function addToCart(name, price) {
      cart.push({ name, price });
      displayCart();
    }
  
    function displayCart() {
      cartItems.innerHTML = "";
      let total = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
      });
  
      cartTotal.innerText = total.toFixed(2);
    }
  
    checkoutButton.addEventListener("click", () => {
      // Implement checkout logic here, e.g., sending the order to the server.
      alert("Your order has been placed! Thank you for ordering with us!");
      cart = [];
      displayCart();
    });
  });
  