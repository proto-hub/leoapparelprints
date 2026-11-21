# Leo & Leo Apparel Prints - Website Maintenance & Deployment Guide

This guide contains simple, step-by-step instructions for:
1. **Making website changes** (Adding/removing products, changing prices, updating images, switching WhatsApp numbers).
2. **Publishing changes to Git and Vercel** (Automatic live deployment).

---

# Part 1: How to Make Website Changes

All website content and products are designed to be easily editable without touching complicated code.

---

### 1.1 Changing a Product's Price or Details
1. Open the file **`app.js`** in your code editor (VS Code, Notepad, etc.).
2. Scroll to the top where you will see the **`PRODUCTS_DATA`** list.
3. Find the product you want to change:
   ```javascript
   {
     id: "prod-eagle-01",
     title: "Multicolor HD Eagle Art Graphic T-Shirt",
     category: "hybrid-dtg",
     price: 299, // <--- CHANGE THIS NUMBER TO YOUR NEW PRICE (e.g. 350)
     description: "Ultra-vibrant multicolor bird artwork...",
     // ...
   }
   ```
4. Change the number or description text and **Save the file** (`Ctrl + S`).

---

### 1.2 Adding a New Product
1. Save your product photo (JPG, PNG, or WebP) inside the folder:
   📁 **`assets/images/`** (for example: `my_new_shirt.png`).
2. Open **`app.js`** and locate **`PRODUCTS_DATA`**.
3. Copy any existing product block, paste it at the end of the list, and update its details:
   ```javascript
   {
     id: "prod-new-01",
     title: "New Premium Streetwear Graphic T-Shirt",
     category: "hybrid-dtg", // Choose from: 'hybrid-dtg', 'dtf', 'cotton-roll', 'sublimation', 'flags'
     techBadge: "Hybrid DTG Digital",
     badge: "New Arrival ✨",
     price: 350,
     wholesalePrice: 210,
     moq: 1,
     image: "assets/images/my_new_shirt.png", // <--- Your image file name
     description: "High-definition chest print on 220 GSM bio-washed combed cotton.",
     options: ["S", "M", "L", "XL", "XXL"],
     fabric: "100% Bio-Washed Combed Cotton",
     printSize: "Front A3 (12x16 inch)"
   },
   ```
4. **Save the file** (`Ctrl + S`). The new product will automatically appear on the website with search, category filtering, and shopping cart functionality enabled!

---

### 1.3 Removing a Product
1. Open **`app.js`**.
2. Find the product block inside **`PRODUCTS_DATA`**.
3. Delete that entire block from the opening `{` to the closing `},`.
4. **Save the file**.

---

### 1.4 Switching WhatsApp Number from Test to Official Leo & Leo
When you finish testing and want live customer orders to go directly to the company's official number:
1. Open **`app.js`**.
2. Look at line 25:
   ```javascript
   // Change from the test number:
   const ORDER_DISPATCH_PHONE = "917812879178";

   // To the official Leo & Leo factory number:
   const ORDER_DISPATCH_PHONE = "919843809843";
   ```
3. Open **`index.html`** and replace `917812879178` with `919843809843` for the direct chat buttons.
4. **Save both files**.

---

# Part 2: How to Publish Changes to Git & Vercel

Since your Vercel project is connected to your GitHub repository, **Vercel updates automatically every time you push code to GitHub** (Continuous Deployment). You do not need to do anything manually on Vercel!

---

### The 3 Commands to Publish:

Whenever you make any changes to `index.html`, `app.js`, `style.css`, or images:

1. Open **PowerShell** or **Command Prompt** in your project folder:
   ```bash
   cd "D:\ProtoHub 2026\leoapparelprints"
   ```

2. Run these 3 simple commands one by one:

   ```bash
   # Step A: Stage all your changes
   git add .

   # Step B: Commit your changes with a short message describing what you changed
   git commit -m "Updated product prices and added new items"

   # Step C: Push to GitHub
   git push origin main
   ```

---

### What Happens Next?
- Within **10 to 20 seconds**, Vercel detects your new push on GitHub.
- Vercel automatically builds and deploys the new version.
- Refresh your Vercel URL in your browser (e.g. `https://leoapparel.vercel.app`), and your new products and prices will immediately be live!
