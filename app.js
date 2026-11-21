/**
 * ===================================================================
 * Leo & Leo Apparel Prints - Interactive Web Application
 * Handles Products, Filter/Search, Shopping Cart & WhatsApp Order Generation
 * ===================================================================
 * 
 * 💡 EASY PRODUCT & PRICE MANAGEMENT GUIDE:
 * To add a new product or change prices/details in the future:
 * 1. Find the "PRODUCTS_DATA" array below.
 * 2. To change a price: just update the `price: 299` number to your new price.
 * 3. To change an image: place your image in `assets/images/` and change `image: "assets/images/your_photo.png"`.
 * 4. To add a new product: just copy one of the blocks and paste it with your new details!
 * 
 * The website will automatically update the product grid, categories, search, 
 * modals, and shopping cart without touching any HTML or CSS!
 * ===================================================================
 */

// ===================================================================
// 1. Phone & Workshop Configuration
// ===================================================================
// Test WhatsApp number (ProtoHub testing destination for all incoming orders)
const ORDER_DISPATCH_PHONE = "917812879178";

const COMPANY_CONFIG = {
  name: "Leo & Leo Apparel Prints",
  tagline: "A Complete Versatile Digital Printing Workshop",
  displayPhone: "919843809843", // Official factory contact displayed on website
  alternatePhones: ["919994374666", "919994238666", "919087142666"],
  email: "leoapparelprints@gmail.com",
  designerEmail: "designer.leoprints@gmail.com",
  address: "274/3, SRG Nagar, 15 Velampalayam, Tirupur - 641 652, Tamil Nadu, India",
  website: "www.leoapparelprints.in"
};

// ===================================================================
// 2. Product Catalog Data (Easily Editable Array)
// ===================================================================
const PRODUCTS_DATA = [
  {
    id: "prod-eagle-01",
    title: "Multicolor HD Eagle Art Graphic T-Shirt",
    category: "hybrid-dtg",
    techBadge: "Hybrid DTG Digital",
    badge: "Best Seller 🔥",
    price: 299,
    wholesalePrice: 180,
    moq: 1,
    image: "assets/images/prod_eagle_tee.png",
    description: "Ultra-vibrant multicolor bird artwork with special print effects on 220 GSM combed bio-washed cotton. Zero hand-feel and high wash durability.",
    options: ["S", "M", "L", "XL", "XXL", "3XL"],
    fabric: "100% Bio-Wash Combed Cotton",
    printSize: "Front A3 (12x16 inch)"
  },
  {
    id: "prod-dtf-sheet-02",
    title: "Custom PET Film DTF Gang Sheet (1 Meter Roll)",
    category: "dtf",
    techBadge: "PET Film DTF",
    badge: "Factory Direct ⚡",
    price: 350,
    wholesalePrice: 280,
    moq: 1,
    image: "assets/images/prod_dtf_sheet.png",
    description: "Industrial hot-melt powder cured DTF transfers printed on Alfa DTF machine. Full CMYK + White ink backing. Ready to heat-press on Cotton, Poly, Nylon, Canvas.",
    options: ["1 Meter (24\" x 39\")", "2 Meters", "5 Meters Roll", "10 Meters Bulk"],
    fabric: "Universal Hot/Cold Peel PET Film",
    printSize: "24 Inch Width Continuous"
  },
  {
    id: "prod-wolf-03",
    title: "Vintage Wolf 'Just A Boy' Bio-Wash Tee",
    category: "hybrid-dtg",
    techBadge: "Cotton Hybrid Bit Form",
    badge: "Trending 🐺",
    price: 280,
    wholesalePrice: 165,
    moq: 1,
    image: "assets/images/prod_wolf_tee.png",
    description: "Retro distress circular wolf illustration on jet black premium jersey. High pigment ink penetration with crisp typography.",
    options: ["S", "M", "L", "XL", "XXL"],
    fabric: "180 GSM Single Jersey Cotton",
    printSize: "Front Chest Print"
  },
  {
    id: "prod-cotton-saree-04",
    title: "Cotton Digital Roll-to-Roll All-Over Fabric",
    category: "cotton-roll",
    techBadge: "Roll to Roll AOP",
    badge: "GOTS Certified 🌱",
    price: 140,
    wholesalePrice: 110,
    moq: 10,
    image: "assets/images/item_saree.png",
    description: "Continuous digital pigment/reactive printing on 100% Cotton, Rayon or Modal fabrics. Perfect for sarees, kurtis, dress materials, and export collections.",
    options: ["10 Meters Sample", "50 Meters", "100 Meters Roll", "500+ Meters Bulk"],
    fabric: "100% Cotton / Rayon 140 GSM",
    printSize: "Up to 72 Inch Width"
  },
  {
    id: "prod-ipl-flags-05",
    title: "Double-Sided Official Sports & IPL Pennants",
    category: "flags",
    techBadge: "Double Sided Flag",
    badge: "Weatherproof 🚩",
    price: 180,
    wholesalePrice: 95,
    moq: 5,
    image: "assets/images/item_ipl_flags.png",
    description: "High-density polyester flag fabric with mirror double-sided sublimation. Vivid team colors (CSK, MI, KKR, RCB) with reinforced pole hem and brass eyelets.",
    options: ["Single Fan Flag (2x3 ft)", "Pack of 5 Flags", "Bulk 25 Pennants", "Custom Stadium Size"],
    fabric: "120 GSM Warp-Knit Flag Poly",
    printSize: "2x3 ft or 3x5 ft"
  },
  {
    id: "prod-sunset-sub-06",
    title: "Full Sublimation Sunset Sports Jersey Tee",
    category: "sublimation",
    techBadge: "Sublimation Printing",
    badge: "Sports Grade ⚽",
    price: 240,
    wholesalePrice: 140,
    moq: 1,
    image: "assets/images/prod_sunset_tee.png",
    description: "Complete all-over front and back digital sublimation. Micro-polyester Dri-Fit moisture-wicking fabric for marathons, esports, and cricket teams.",
    options: ["S", "M", "L", "XL", "XXL"],
    fabric: "160 GSM Poly Micro Dri-Fit",
    printSize: "360° All-Over Sublimation"
  },
  {
    id: "prod-ladies-top-07",
    title: "Ladies Geometric All-Over Sublimation Top",
    category: "sublimation",
    techBadge: "Sublimation Tops",
    badge: "Designer Pick ✨",
    price: 320,
    wholesalePrice: 195,
    moq: 1,
    image: "assets/images/item_ladies_top.png",
    description: "Fashion-forward ladies printed top featuring dynamic geometric & floral patterns. Soft hand-feel with vivid color brilliance.",
    options: ["Free Size (Relaxed)", "S", "M", "L", "XL"],
    fabric: "Poly-Georgette / Crepe Blend",
    printSize: "All-Over Digital Print"
  },
  {
    id: "prod-fallen-letters-08",
    title: "'Fallen Letters' Dark Aesthetic Streetwear Tee",
    category: "hybrid-dtg",
    techBadge: "Hybrid DTG Digital",
    badge: "Premium Streetwear 🖤",
    price: 340,
    wholesalePrice: 210,
    moq: 1,
    image: "assets/images/prod_fallen_letters.png",
    description: "Atmospheric dark aesthetic book cover art with deep crimson highlights. Printed on 240 GSM heavy oversized cotton drop-shoulder silhouette.",
    options: ["Oversized M", "Oversized L", "Oversized XL", "Oversized XXL"],
    fabric: "240 GSM Heavyweight Terry Cotton",
    printSize: "Front Center Graphic"
  },
  {
    id: "prod-mickey-hoodie-09",
    title: "Kids All-Over Printed Mickey Cartoon Hoodie",
    category: "sublimation",
    techBadge: "Sublimation Printing",
    badge: "Kids Safe 🧒",
    price: 380,
    wholesalePrice: 230,
    moq: 1,
    image: "assets/images/item_hoodie.png",
    description: "Vibrant cartoon digital printed hoodie for kids. Non-toxic, skin-friendly certified GOTS water-based dye inks. Warm fleece lining.",
    options: ["Age 2-4Y", "Age 4-6Y", "Age 6-8Y", "Age 8-10Y", "Age 10-12Y"],
    fabric: "Cotton-Poly Fleece Blend",
    printSize: "Full Body Sublimation"
  },
  {
    id: "prod-turbo-king-10",
    title: "Turbo King Crimson Graphic T-Shirt (DTF)",
    category: "dtf",
    techBadge: "PET Film DTF",
    badge: "High Elasticity ⚡",
    price: 260,
    wholesalePrice: 155,
    moq: 1,
    image: "assets/images/prod_turbo_king.png",
    description: "High-contrast vintage racer print applied via industrial DTF transfer on scarlet red tee. Super flexible, no cracking after 50+ home washes.",
    options: ["S", "M", "L", "XL", "XXL"],
    fabric: "100% Combed Cotton 180 GSM",
    printSize: "Front Chest 10x12 inch"
  },
  {
    id: "prod-india-flag-11",
    title: "Indian National Flag (Double-Sided Outdoor)",
    category: "flags",
    techBadge: "Double Sided Flag",
    badge: "Made in Tirupur 🇮🇳",
    price: 190,
    wholesalePrice: 110,
    moq: 2,
    image: "assets/images/item_india_flag.png",
    description: "Official Indian Tricolor flag with sharp 24-spoke Ashoka Chakra. Double-stitched edges, UV sunlight resistant, suitable for office, home, and flagpoles.",
    options: ["3ft x 2ft (Standard)", "4.5ft x 3ft", "6ft x 4ft (Mast Flag)"],
    fabric: "100% Khadi Poly Silk Blend",
    printSize: "Flag Code Proportional"
  },
  {
    id: "prod-sonic-dtf-12",
    title: "Sonic Speed High-Res Graphic DTF T-Shirt",
    category: "dtf",
    techBadge: "PET Film DTF",
    badge: "Photorealistic 🎮",
    price: 275,
    wholesalePrice: 160,
    moq: 1,
    image: "assets/images/prod_sonic_tee.png",
    description: "Gloss-cured DTF graphic transfer on deep black regular-fit t-shirt. High resolution micro-details with clean gradient transitions.",
    options: ["S", "M", "L", "XL", "XXL"],
    fabric: "100% Cotton Bio-Washed",
    printSize: "Chest Print"
  },
  {
    id: "prod-floral-roll-13",
    title: "Tropical Botanical Digital Fabric (By The Meter)",
    category: "cotton-roll",
    techBadge: "Digital AOP Pigment",
    badge: "Resort Wear 🌺",
    price: 165,
    wholesalePrice: 125,
    moq: 5,
    image: "assets/images/prod_floral.png",
    description: "Exotic flamingo & tropical fauna print on soft fluid Rayon. Excellent drape for Hawaiian shirts, summer dresses, and resort collections.",
    options: ["5 Meters", "20 Meters", "50 Meters Roll", "100+ Meters"],
    fabric: "Pure Rayon 140 GSM / Modal",
    printSize: "58 Inch Printable Width"
  },
  {
    id: "prod-euro-flags-14",
    title: "Custom Football Club & International Pennants",
    category: "flags",
    techBadge: "Double Sided Flag",
    badge: "Export Standard 🏆",
    price: 120,
    wholesalePrice: 65,
    moq: 10,
    image: "assets/images/prod_euro_flags.png",
    description: "Double-sided pennant flags for sports academies, universities, and tournaments. Includes gold fringe trim, hanging pole, and braided cord.",
    options: ["Triangular Pennant (10x15 in)", "Shield Pennant", "Rectangle Banner (12x18 in)"],
    fabric: "Satin Finish Poly Flag",
    printSize: "Double Sided Mirror Print"
  }
];

// ===================================================================
// 3. Cart State Management (with LocalStorage)
// ===================================================================
let cartState = [];

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("leo_cart_items");
    if (saved) {
      cartState = JSON.parse(saved);
    }
  } catch (err) {
    console.error("Error reading cart from localStorage:", err);
    cartState = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem("leo_cart_items", JSON.stringify(cartState));
  } catch (err) {
    console.error("Error writing cart to localStorage:", err);
  }
  updateCartUI();
}

function addToCart(productId, selectedOption, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const option = selectedOption || product.options[0];
  const existingIndex = cartState.findIndex(
    item => item.id === productId && item.option === option
  );

  if (existingIndex > -1) {
    cartState[existingIndex].quantity += parseInt(quantity, 10);
  } else {
    cartState.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      option: option,
      fabric: product.fabric,
      techBadge: product.techBadge,
      quantity: parseInt(quantity, 10)
    });
  }

  saveCartToStorage();
  showToast(`Added "${product.title}" (${option}) to Cart! 🛒`);
  openCartDrawer();
}

function updateCartItemQuantity(index, delta) {
  if (!cartState[index]) return;
  cartState[index].quantity += delta;
  if (cartState[index].quantity <= 0) {
    cartState.splice(index, 1);
    showToast("Item removed from Cart");
  }
  saveCartToStorage();
}

function removeCartItem(index) {
  if (!cartState[index]) return;
  const title = cartState[index].title;
  cartState.splice(index, 1);
  saveCartToStorage();
  showToast(`Removed "${title}" from Cart`);
}

function clearCart() {
  cartState = [];
  saveCartToStorage();
}

function calculateCartSubtotal() {
  return cartState.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartItemCount() {
  return cartState.reduce((sum, item) => sum + item.quantity, 0);
}

// ===================================================================
// 4. UI Rendering: Products, Tabs, Search
// ===================================================================
let activeCategory = "all";
let searchQuery = "";

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = activeCategory === "all" || prod.category === activeCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.techBadge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #64748b;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
        <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 800;">No products found</h3>
        <p>Try clearing your search or picking a different category tab.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()" style="margin-top: 1rem;">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => `
    <div class="product-card">
      <div class="product-img-wrapper">
        <span class="badge badge-orange product-badge">${prod.badge}</span>
        <span class="product-tech-tag">${prod.techBadge}</span>
        <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy">
      </div>
      <div class="product-details">
        <span class="product-category-lbl">${prod.category.replace("-", " ")}</span>
        <h3 class="product-title" title="${prod.title}">${prod.title}</h3>
        <p class="product-desc">${prod.description}</p>
        <div class="product-specs-chip">
          <i class="fa-solid fa-layer-group" style="color: #ea580c;"></i>
          <span>${prod.fabric}</span>
        </div>
        <div class="product-footer">
          <div class="price-box">
            <span class="price-label">Starts at</span>
            <span class="price-amount">₹${prod.price}</span>
          </div>
          <div class="product-actions-btn-group">
            <button class="quick-order-btn" onclick="openProductModal('${prod.id}')" title="Configure and Add to Cart">
              <i class="fa-solid fa-cart-plus"></i> Order
            </button>
            <button class="quick-wa-btn" onclick="directProductWhatsApp('${prod.id}')" title="Inquire Directly on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) searchInput.value = "";
  
  document.querySelectorAll(".tab-btn").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === "all");
  });
  renderProducts();
}

// ===================================================================
// 5. Cart Drawer & Checkout UI
// ===================================================================
function updateCartUI() {
  const counterEls = document.querySelectorAll(".cart-counter");
  const count = getCartItemCount();
  counterEls.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });

  const cartListEl = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotalAmount");
  const checkoutBtn = document.getElementById("cartCheckoutBtn");

  if (!cartListEl) return;

  const subtotal = calculateCartSubtotal();
  if (subtotalEl) {
    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  if (cartState.length === 0) {
    cartListEl.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
        <h4 class="cart-empty-title">Your Order Cart is Empty</h4>
        <p style="font-size: 0.88rem; margin-bottom: 1.5rem;">Explore our high-speed digital printing services and add sample prints or bulk items to your cart.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); scrollToSection('products');">
          Browse Products
        </button>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  cartListEl.innerHTML = cartState.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-variant">${item.option}</div>
        <div class="cart-qty-ctrls">
          <button class="cart-qty-btn" onclick="updateCartItemQuantity(${idx}, -1)">−</button>
          <span class="cart-qty-val">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartItemQuantity(${idx}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <button class="cart-remove-btn" onclick="removeCartItem(${idx})" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay && drawer) {
    overlay.classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay && drawer) {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ===================================================================
// 6. Product Detail / Options Modal
// ===================================================================
let activeModalProductId = null;
let activeModalOption = "";

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  activeModalProductId = productId;
  activeModalOption = product.options[0];

  const modalOverlay = document.getElementById("productModalOverlay");
  const modalImg = document.getElementById("modalProductImg");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalTech = document.getElementById("modalProductTech");
  const modalDesc = document.getElementById("modalProductDesc");
  const modalPrice = document.getElementById("modalProductPrice");
  const modalOptionsList = document.getElementById("modalOptionsList");
  const modalQtyInput = document.getElementById("modalQtyInput");

  if (modalImg) modalImg.src = product.image;
  if (modalTitle) modalTitle.textContent = product.title;
  if (modalTech) modalTech.textContent = `${product.techBadge} • ${product.fabric}`;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalPrice) modalPrice.textContent = `₹${product.price}`;
  if (modalQtyInput) modalQtyInput.value = 1;

  if (modalOptionsList) {
    modalOptionsList.innerHTML = product.options.map((opt, i) => `
      <button type="button" class="size-pill ${i === 0 ? 'selected' : ''}" onclick="selectModalOption('${opt}', this)">
        ${opt}
      </button>
    `).join("");
  }

  if (modalOverlay) {
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function selectModalOption(option, buttonEl) {
  activeModalOption = option;
  document.querySelectorAll("#modalOptionsList .size-pill").forEach(el => el.classList.remove("selected"));
  if (buttonEl) buttonEl.classList.add("selected");
}

function closeProductModal() {
  const modalOverlay = document.getElementById("productModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function addModalItemToCart() {
  if (!activeModalProductId) return;
  const qtyInput = document.getElementById("modalQtyInput");
  const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
  addToCart(activeModalProductId, activeModalOption, qty);
  closeProductModal();
}

function directProductWhatsApp(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const text = 
`🦁 *INQUIRY - LEO & LEO APPAREL PRINTS*
────────────────────────────
Hello Leo & Leo team, I am interested in:
📦 *Product:* ${product.title}
⚙️ *Print Technology:* ${product.techBadge}
🧵 *Fabric:* ${product.fabric}
💰 *Estimated Price:* ₹${product.price}
────────────────────────────
Can you please provide bulk quotation, MOQ, and sample turnaround time?
(Inquiry sent from website)`;

  // Directly routes to test ProtoHub number
  const url = `https://wa.me/${ORDER_DISPATCH_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// ===================================================================
// 7. Checkout Modal & Mandatory Form Validation -> WhatsApp Dispatch
// ===================================================================
function openCheckoutModal() {
  if (cartState.length === 0) {
    showToast("Please add items to your cart first!");
    return;
  }
  closeCartDrawer();

  const checkoutOverlay = document.getElementById("checkoutModalOverlay");
  const summaryEl = document.getElementById("checkoutItemsSummary");
  const totalEl = document.getElementById("checkoutTotalDisplay");

  if (summaryEl) {
    summaryEl.innerHTML = cartState.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.4rem;">
        <span><strong>${item.quantity}x</strong> ${item.title} (${item.option})</span>
        <span style="font-weight: 700;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
      </div>
    `).join("");
  }

  const subtotal = calculateCartSubtotal();
  if (totalEl) {
    totalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  if (checkoutOverlay) {
    checkoutOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckoutModal() {
  const checkoutOverlay = document.getElementById("checkoutModalOverlay");
  if (checkoutOverlay) {
    checkoutOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/**
 * Validates mandatory fields:
 * - Customer Name (mandatory)
 * - WhatsApp Mobile Number (mandatory, valid 10 digits)
 * - Full Delivery Address (mandatory)
 * - City (mandatory)
 * - State (mandatory)
 * - Pincode (mandatory, 6 digits)
 */
function handleCheckoutFormSubmit(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById("custName");
  const phoneInput = document.getElementById("custPhone");
  const addressInput = document.getElementById("custAddress");
  const cityInput = document.getElementById("custCity");
  const stateInput = document.getElementById("custState");
  const pincodeInput = document.getElementById("custPincode");
  const orderTypeSelect = document.getElementById("custOrderType");
  const notesInput = document.getElementById("custNotes");

  let isValid = true;

  // Clear previous errors
  [nameInput, phoneInput, addressInput, cityInput, stateInput, pincodeInput].forEach(inp => {
    if (inp) inp.classList.remove("input-error");
  });

  // 1. Name validation
  const nameVal = nameInput ? nameInput.value.trim() : "";
  if (!nameVal || nameVal.length < 2) {
    if (nameInput) nameInput.classList.add("input-error");
    isValid = false;
  }

  // 2. Phone validation (at least 10 digits)
  const phoneVal = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";
  if (!phoneVal || phoneVal.length < 10) {
    if (phoneInput) phoneInput.classList.add("input-error");
    isValid = false;
  }

  // 3. Address validation
  const addressVal = addressInput ? addressInput.value.trim() : "";
  if (!addressVal || addressVal.length < 5) {
    if (addressInput) addressInput.classList.add("input-error");
    isValid = false;
  }

  // 4. City validation
  const cityVal = cityInput ? cityInput.value.trim() : "";
  if (!cityVal) {
    if (cityInput) cityInput.classList.add("input-error");
    isValid = false;
  }

  // 5. State validation
  const stateVal = stateInput ? stateInput.value.trim() : "";
  if (!stateVal) {
    if (stateInput) stateInput.classList.add("input-error");
    isValid = false;
  }

  // 6. Pincode validation (6 digits)
  const pincodeVal = pincodeInput ? pincodeInput.value.trim() : "";
  if (!pincodeVal || pincodeVal.length < 5) {
    if (pincodeInput) pincodeInput.classList.add("input-error");
    isValid = false;
  }

  if (!isValid) {
    showToast("⚠️ Please fill all required fields marked in red!");
    return;
  }

  // Generate Unique Order ID
  const orderId = `LEO-${Date.now().toString().slice(-6)}`;
  const orderDate = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  });

  // Calculate items summary
  let itemsListText = "";
  cartState.forEach((item, index) => {
    itemsListText += `${index + 1}. *${item.title}*\n   • Variant: ${item.option}\n   • Qty: ${item.quantity} | Total: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
  });

  const totalAmount = calculateCartSubtotal().toLocaleString('en-IN');
  const orderType = orderTypeSelect ? orderTypeSelect.value : "Sample / Trial Order";
  const notes = (notesInput && notesInput.value.trim()) ? notesInput.value.trim() : "Standard Packaging";

  // Construct Beautiful WhatsApp Message (Clean, without unwanted artwork/desk options)
  const waMessage = 
`🦁 *NEW ORDER INQUIRY - LEO & LEO APPAREL PRINTS*
━━━━━━━━━━━━━━━━━━━━━━━━
📋 *Order ID:* #${orderId}
🕒 *Date:* ${orderDate}

👤 *CUSTOMER & DELIVERY ADDRESS:*
• *Full Name:* ${nameVal}
• *WhatsApp Phone:* +91 ${phoneVal}
• *Delivery Address:* ${addressVal}
• *City & State:* ${cityVal}, ${stateVal}
• *Pincode:* ${pincodeVal}
• *Order Category:* ${orderType}

📦 *ORDER ITEMS LIST:*
${itemsListText}
━━━━━━━━━━━━━━━━━━━━━━━━
💰 *ESTIMATED TOTAL:* ₹${totalAmount}
📝 *Client Notes:* ${notes}
━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Workshop:* 274/3, SRG Nagar, 15 Velampalayam, Tirupur - 641 652
_Order generated via Leo & Leo Apparel Prints Online Web Portal_`;

  // Always send to ProtoHub testing number (+91 7812879178)
  const whatsappUrl = `https://wa.me/${ORDER_DISPATCH_PHONE}?text=${encodeURIComponent(waMessage)}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Show order confirmation
  closeCheckoutModal();
  showOrderSuccessModal(orderId, nameVal, phoneVal, totalAmount, waMessage);
  clearCart();
}

function showOrderSuccessModal(orderId, name, phone, total, rawMessage) {
  const successModal = document.getElementById("orderSuccessModal");
  if (!successModal) return;

  const idEl = document.getElementById("successOrderId");
  const msgEl = document.getElementById("successCustomerText");
  const rawBox = document.getElementById("successRawMessage");

  if (idEl) idEl.textContent = `#${orderId}`;
  if (msgEl) msgEl.textContent = `Thank you ${name}! Your order details have been forwarded to WhatsApp (+91 7812879178).`;
  if (rawBox) rawBox.value = rawMessage;

  successModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeOrderSuccessModal() {
  const successModal = document.getElementById("orderSuccessModal");
  if (successModal) {
    successModal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function copySuccessMessage() {
  const rawBox = document.getElementById("successRawMessage");
  if (!rawBox) return;
  rawBox.select();
  navigator.clipboard.writeText(rawBox.value).then(() => {
    showToast("Order message copied to clipboard! 📋");
  }).catch(() => {
    document.execCommand("copy");
    showToast("Order message copied! 📋");
  });
}

// ===================================================================
// 8. Interactive Factory Capacity & Bulk Quote Calculator
// ===================================================================
function updateCapacityCalculator() {
  const techSelect = document.getElementById("calcTechSelect");
  const qtySlider = document.getElementById("calcVolumeSlider");
  const qtyBadge = document.getElementById("calcVolumeBadge");
  const calcRateEl = document.getElementById("calcUnitRate");
  const calcTurnaroundEl = document.getElementById("calcTurnaround");
  const calcTotalEl = document.getElementById("calcTotalCost");

  if (!techSelect || !qtySlider) return;

  const tech = techSelect.value;
  const volume = parseInt(qtySlider.value, 10);

  let unitName = "Meters";
  let rate = 140;
  let dailyCapacity = 15000;

  if (tech === "sublimation") {
    unitName = "Meters";
    dailyCapacity = 15000;
    rate = volume > 2000 ? 95 : volume > 500 ? 120 : 140;
  } else if (tech === "aop_cotton") {
    unitName = "Meters";
    dailyCapacity = 10000;
    rate = volume > 2000 ? 110 : volume > 500 ? 130 : 155;
  } else if (tech === "hybrid_dtg") {
    unitName = "Pieces";
    dailyCapacity = 15000;
    rate = volume > 1000 ? 150 : volume > 200 ? 180 : 220;
  } else if (tech === "dtf_stickers") {
    unitName = "Meters Gang Sheet";
    dailyCapacity = 25000;
    rate = volume > 100 ? 280 : volume > 20 ? 320 : 360;
  } else if (tech === "flags") {
    unitName = "Flags";
    dailyCapacity = 5000;
    rate = volume > 500 ? 85 : volume > 50 ? 115 : 150;
  }

  if (qtyBadge) {
    qtyBadge.textContent = `${volume.toLocaleString('en-IN')} ${unitName}`;
  }

  const estimatedDays = Math.max(1, Math.ceil(volume / (dailyCapacity * 0.6)));
  const turnaroundText = volume <= 50 ? "Same Day / 24 Hours" : `${estimatedDays} - ${estimatedDays + 1} Factory Days`;
  const totalEstimate = volume * rate;

  if (calcRateEl) calcRateEl.textContent = `₹${rate} / ${unitName.toLowerCase()}`;
  if (calcTurnaroundEl) calcTurnaroundEl.textContent = turnaroundText;
  if (calcTotalEl) calcTotalEl.textContent = `₹${totalEstimate.toLocaleString('en-IN')}`;
}

function sendCalculatorWhatsApp() {
  const techSelect = document.getElementById("calcTechSelect");
  const qtySlider = document.getElementById("calcVolumeSlider");
  const techText = techSelect ? techSelect.options[techSelect.selectedIndex].text : "Digital Textile Printing";
  const volume = qtySlider ? qtySlider.value : "100";
  const rate = document.getElementById("calcUnitRate")?.textContent || "";
  const total = document.getElementById("calcTotalCost")?.textContent || "";
  const turnaround = document.getElementById("calcTurnaround")?.textContent || "";

  const msg = 
`🦁 *BULK FACTORY INQUIRY - LEO & LEO APPAREL PRINTS*
────────────────────────────
Hello Leo & Leo team, I am looking for a bulk manufacturing quotation:
⚙️ *Process:* ${techText}
📊 *Estimated Volume:* ${volume}
⏱️ *Expected Turnaround:* ${turnaround}
💰 *Estimated Budget:* ${total} (${rate})
────────────────────────────
Please let me know fabric requirements, strike-off sample process, and your best Tirupur factory price.
(Inquiry sent from online calculator)`;

  window.open(`https://wa.me/${ORDER_DISPATCH_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ===================================================================
// 9. General Helpers (Toast, Scroll, Mobile Menu)
// ===================================================================
let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    const container = document.createElement("div");
    container.className = "toast-container";
    container.innerHTML = `<div id="appToast" class="toast"></div>`;
    document.body.appendChild(container);
    toast = document.getElementById("appToast");
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #22c55e;"></i> <span>${message}</span>`;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector(".main-header")?.offsetHeight || 70;
    const pos = section.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }
}

function toggleMobileNav() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "#ffffff";
      navLinks.style.padding = "1.5rem";
      navLinks.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
      navLinks.style.borderTop = "1px solid #e2e8f0";
    }
  }
}

// ===================================================================
// 10. Initializer & Event Listeners
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Load persisted cart
  loadCartFromStorage();

  // 2. Render all products
  renderProducts();

  // 3. Category tab filter event listeners
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // 4. Product Search input
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // 5. Calculator input events
  const techSelect = document.getElementById("calcTechSelect");
  const volumeSlider = document.getElementById("calcVolumeSlider");
  if (techSelect) techSelect.addEventListener("change", updateCapacityCalculator);
  if (volumeSlider) volumeSlider.addEventListener("input", updateCapacityCalculator);
  updateCapacityCalculator();

  // 6. Modal Stepper Quantity Buttons
  const stepMinus = document.getElementById("modalQtyMinus");
  const stepPlus = document.getElementById("modalQtyPlus");
  const qtyInput = document.getElementById("modalQtyInput");

  if (stepMinus && qtyInput) {
    stepMinus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });
  }

  if (stepPlus && qtyInput) {
    stepPlus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = val + 1;
    });
  }

  // 7. Checkout Form Submit
  const checkoutForm = document.getElementById("checkoutOrderForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutFormSubmit);
  }

  console.log("Leo & Leo Apparel Prints Portal initialized with ProtoHub test destination:", ORDER_DISPATCH_PHONE);
});
