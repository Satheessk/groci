document.addEventListener("DOMContentLoaded", function () {
    let cartBadge = document.querySelector(".cart-badge");

    // Load cart count from localStorage (default is 0)
    let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
    updateCartBadge(cartCount);

    // Add event listener to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            cartCount++; // Increase cart count
            updateCartBadge(cartCount); // Update badge dynamically
            localStorage.setItem("cartCount", cartCount); // Save count to localStorage
        });
    });

    // Optional: "Clear Cart" button to reset cart manually
    document.querySelector(".clear-cart")?.addEventListener("click", function () {
        cartCount = 0;
        updateCartBadge(cartCount);
        localStorage.setItem("cartCount", cartCount);
    });

    // Function to update the cart badge dynamically
    function updateCartBadge(count) {
        if (cartBadge) {
            if (count > 0) {
                cartBadge.textContent = count; // Show count
                cartBadge.style.display = "inline-block"; // Show badge
            } else {
                cartBadge.style.display = "none"; // Hide badge when empty
            }
        }
    }
});
