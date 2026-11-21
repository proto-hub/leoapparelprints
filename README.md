# Leo & Leo Apparel Prints - Interactive E-Commerce & Workshop Website

A modern, high-performance, responsive e-commerce and factory portal built for **Leo & Leo Apparel Prints** (Tirupur, Tamil Nadu).

---

## 🌟 Key Features

1. **Direct WhatsApp Ordering System**:
   - Customers can browse printed apparel, DTF transfers, fabric rolls, and flags.
   - Configure options (Size, Fabric, Quantity) and add items to a slide-over cart drawer.
   - Mandatory validation before checkout:
     - 👤 **Full Customer Name** (Required)
     - 📱 **WhatsApp Phone Number** (Required, validated 10 digits)
     - 🏠 **Complete Delivery Address** (House/Door No, Street, Landmark) (Required)
     - 🏙️ **City & State** (Required)
     - 📮 **Pincode** (Required, 6 digits)
     - 📦 **Order Category & Special Notes / Artwork Link**
   - 1-click **"Place Order on WhatsApp"** button compiles an itemized, beautifully formatted invoice message with order ID and immediately launches WhatsApp directly to the company's dispatch desk (`+91 98438 09843`).

2. **Authentic Brochure & Factory Assets**:
   - Company Logo with signature red paws & modern typography.
   - Real machinery photos extracted directly from the catalogue:
     - High-Speed Sublimation Printers (up to 72" width)
     - Continuous Digital Belt Textile Printer
     - Automatic 4-station Carousel Hybrid DTG Screen/Digital machine
     - Heavy-Duty Industrial AOP Pigment system
     - Alfa Industrial DTF printer & powder curing tunnel
   - Extracted authentic product samples: Eagle art tee, vintage wolf tee, Mickey hoodie, ladies sublimation tops, DTF gang sheets, IPL and Indian national flags, tropical rayon fabrics.

3. **Interactive Factory Tools**:
   - **Daily Production Capacities Ribbon**: Sublimation (15,000 M/day), AOP Pigment (10,000 M/day), Hybrid DTG (15,000 Pcs/day), DTF (25,000 Pcs/day), Double-sided flags (5,000 Flags/day).
   - **Interactive Bulk Estimator & Turnaround Calculator**: Real-time quote and delivery timeline preview for brands and exporters.
   - **Factory Location & Contact Hub**: Velampalayam, Tirupur address, embedded Google Map, and 1-click links for all 4 contact numbers and emails.

---

## 🚀 Free Hosting & Short Domain Guide

This website is **100% static (HTML5, CSS3, JavaScript)** with zero backend dependencies, making it ultra-fast and completely free to host.

### Option 1: GitHub Pages (100% Free Forever)
1. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Leo & Leo Apparel Prints website"
   ```
2. Create a new public repository on [GitHub](https://github.com/new).
   - To get the shortest free domain on GitHub, name your repository `leoapparelprints` or create a GitHub organization named `leoapparelprints`.
3. Push your code:
   ```bash
   git remote add origin https://github.com/<your-github-username>/leoapparelprints.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **Repository Settings** > **Pages** > Select `Branch: main` and `/ (root)` > Click **Save**.
5. Your live URL will be:
   ```
   https://<your-github-username>.github.io/leoapparelprints/
   ```
   *(If you created an organization/account named `leoapparelprints`, the URL is `https://leoapparelprints.github.io`)*

### Option 2: Vercel / Netlify (Super Short Domain)
1. Go to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) and sign in with GitHub.
2. Click **Import Project** and select this repository.
3. In Project Settings, set your custom subdomain to:
   ```
   https://leoapparel.vercel.app
   ```
   or
   ```
   https://leoapparelprints.vercel.app
   ```
4. Free SSL certificate, lightning-fast worldwide CDN, and auto-updates whenever you push changes!

### Option 3: Connecting Your Existing Domain (`www.leoapparelprints.in`)
Because the company already owns `leoapparelprints.in`:
1. In GitHub Pages or Vercel, navigate to **Custom Domains**.
2. Enter `www.leoapparelprints.in`.
3. In your domain DNS manager (e.g. GoDaddy, Hostinger), add a `CNAME` pointing to:
   - For GitHub Pages: `<your-username>.github.io`
   - For Vercel: `cname.vercel-dns.com`

---

## 📁 File Structure

```
leoapparelprints/
├── index.html                  # Main responsive HTML5 portal
├── style.css                   # Custom modern styles, animations, responsive layouts
├── app.js                      # Shopping cart, modal handlers, WhatsApp text generator
├── README.md                   # Setup and deployment documentation
└── assets/
    ├── icons/
    │   └── logo.svg            # Crisp SVG brand logo with paws & typography
    └── images/
        ├── hero_showcase.png   # Centerpiece hero artwork from catalogue
        ├── certifications.png  # GOTS, GRS, Recycled 100 badges
        ├── qr_code.png         # QR code for instant phone contact
        ├── machine_*.png       # 5 industrial machine photos from catalogue
        ├── item_*.png          # Authentic product items
        └── prod_*.png          # Product catalog image assets
```

---

## 📞 Company Contact Details

- **Company:** Leo & Leo Apparel Prints (Est. 2017)
- **Address:** 274/3, SRG Nagar, 15 Velampalayam, Tirupur - 641 652, Tamil Nadu, India.
- **WhatsApp / Phone:**
  - `+91 98438 09843` (Primary Dispatch)
  - `+91 99943 74666`
  - `+91 99942 38666`
  - `+91 90871 42666`
- **Emails:** `leoapparelprints@gmail.com` | `designer.leoprints@gmail.com`
- **Website:** [www.leoapparelprints.in](https://www.leoapparelprints.in)
