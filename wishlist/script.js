// Get the modal
var modal = document.getElementById("myModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block"; // Show overlay
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none"; // Hide overlay
}

// Function to create wishlist
function createWishlist() {
    var wishlistName = document.getElementById("wishlistName").value.trim();
    if (wishlistName !== "") {
        var wishlistContainer = document.getElementById("wishlistContainer");
        var wishlistItem = document.createElement("div");
        wishlistItem.textContent = wishlistName;
        wishlistItem.classList.add("wishlist-item");

        var wishlistNameSpan = document.createElement("span");
        wishlistNameSpan.textContent = wishlistName;
        wishlistNameSpan.classList.add("wishlist-name");
        wishlistItem.appendChild(wishlistNameSpan);

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = function() {editWishlist(this); };
        wishlistItem.appendChild(editButton);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = function() {removeWishlist(this); };
        wishlistItem.appendChild(removeButton);

        wishlistContainer.appendChild(wishlistItem);
        closeModal(); // Close the modal after creating wishlist
        hideInfo(); // Hide the info section
    } else {
        alert("Please enter a valid wishlist name.");
    }
}
// Function to cancel creating wishlist
function cancel() {
    closeModal();
    document.getElementById("wishlistName").value = "";
}

// Function to hide the info section
function hideInfo() {
    var infoSection = document.querySelector(".info");
    infoSection.style.display = "none";
}
// Function to edit wishlist
function editWishlist(button) {
    var wishlistItem = button.parentNode;
    var wishlistNameSpan = wishlistItem.querySelector(".wishlist-name");
    var newWishlistName = prompt("Edit wishlist name:", wishlistNameSpan.textContent);
    if (newWishlistName !== null && newWishlistName.trim() !== "") {
        wishlistNameSpan.textContent = newWishlistName;
    }
}

// Function to remove wishlist
function removeWishlist(button) {
    var wishlistItem = button.parentNode;
    wishlistItem.parentNode.removeChild(wishlistItem);
    showInfoIfEmpty();
}
