const SHIPPING_FEE = 5.00;
const TAX_RATE = 0.10;

function addToCart(item, price) {
    alert("Your item is added to cart!");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(entry => entry.item === item);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ item, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartContent();
}

function updateCartContent() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent = document.getElementById("cart-content");
    let cartCount = document.getElementById("js-order-count");

    cartContent.innerHTML = "";

    let subtotal = 0;
    let totalQuantity = 0;

    cart.forEach((entry, index) => {
        subtotal += entry.price * entry.quantity;
        totalQuantity += entry.quantity;

        cartContent.innerHTML += `
            <p>
                ${entry.item} x${entry.quantity} - $${(entry.price * entry.quantity).toFixed(2)} 
                <button class='remove-item' onclick="removeFromCart(${index})">Remove</button>
            </p>
        `;
    });

    let tax = subtotal * TAX_RATE;
    let total = subtotal + tax + SHIPPING_FEE;

    cartCount.innerText = totalQuantity;
    document.getElementById("cart-subtotal").innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById("cart-tax").innerText = `Tax (10%): $${tax.toFixed(2)}`;
    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartContent();
}

function showCheckoutForm() {
    document.getElementById("checkout-form").style.display = "block";
}

function submitOrder() {
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    if (name && address && phone) {
        alert(`Order submitted!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`);
        // You can handle order submission here, like sending data to a server
    } else {
        alert("Please fill in both fields.");
    }
}

window.onload = updateCartContent;

// For Responsive Dropdown

const togglebtn = document.querySelector('.toggle-btn')
const togglebtnIcon = document.querySelector('.toggle-btn i')
const dropdownmenu = document.querySelector('.dropdown-menu')

  togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isopen = dropdownmenu.classList.contains('open')

    togglebtnIcon.classList = isopen
    ? 'fa-solid fa-xmark':'fa-solid fa-bars'
  }

// For Shopping Cart Preview

const cartIcon = document.querySelector('.cartIcon')
const showPreview = document.querySelector('.cartPreview')
const closePreview = document.querySelector('.close')

  cartIcon.onclick = function () {
    showPreview.classList.toggle('showPreview')
  }

  closePreview.onclick = function () {
    showPreview.classList. toggle('showPreview')
  }
// For Popup Window

function closeModal() {
    document.getElementById("popupBox").style.display = "none";
  }

  // Scroll to the top button
let scrollTopBtn = document.getElementById("scrollTopBtn");
      
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}