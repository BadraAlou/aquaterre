// Boutique functionality
document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));
            
            addToCart(productId, productName, productPrice);
        });
    });
    
    // Category filter
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
            
            // Update active button
            document.querySelectorAll('.category-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function addToCart(productId, productName, productPrice) {
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart display
        updateCartDisplay();
        
        // Show success message
        showAlert(`${productName} ajouté au panier !`, 'success');
        
        // Send to backend
        fetch('/boutique/ajouter-au-panier/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            body: JSON.stringify({
                produit_id: productId,
                quantite: 1
            })
        })
        .catch(error => console.error('Erreur ajout panier:', error));
    }
    
    function filterProducts(category) {
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (category === 'all' || productCategory === category) {
                product.style.display = 'block';
                product.classList.add('fade-in-up');
            } else {
                product.style.display = 'none';
            }
        });
    }
    
    function updateCartDisplay() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Update cart badge
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cartCount;
            cartBadge.style.display = cartCount > 0 ? 'inline' : 'none';
        }
        
        // Update floating cart
        updateFloatingCart();
    }
    
    function updateFloatingCart() {
        const floatingCart = document.getElementById('floating-cart');
        if (!floatingCart || cart.length === 0) {
            if (floatingCart) floatingCart.style.display = 'none';
            return;
        }
        
        floatingCart.style.display = 'block';
        
        const cartItems = floatingCart.querySelector('.cart-items');
        const cartTotal = floatingCart.querySelector('.cart-total');
        
        // Update items
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item d-flex justify-content-between align-items-center">
                <div>
                    <small class="fw-semibold">${item.name}</small>
                    <div class="text-muted" style="font-size: 0.75rem;">
                        ${formatPrice(item.price)} FCFA x ${item.quantity}
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary me-1" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = formatPrice(total) + ' FCFA';
    }
    
    window.updateCartQuantity = function(productId, newQuantity) {
        if (newQuantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };
    
    function formatPrice(price) {
        return new Intl.NumberFormat('fr-FR').format(price);
    }
    
    function getCSRFToken() {
        const token = document.querySelector('[name=csrfmiddlewaretoken]');
        return token ? token.value : '';
    }
    
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
    
    // Initialize cart display
    updateCartDisplay();
    
    // Search functionality
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productName = product.querySelector('.product-name').textContent.toLowerCase();
                const productDescription = product.querySelector('.product-description').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
});