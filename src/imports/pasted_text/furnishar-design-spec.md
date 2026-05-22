# FurnishAR — Figma FigMake UI Prompt
### Complete Frontend Design Specification (Mobile + Desktop, All Screens, All Buttons Working)

---

## 🧠 Project Context

**FurnishAR** is a web-based Augmented Reality and spatial visualization platform for local furniture shoppers and retailers in Mamburao, Occidental Mindoro, Philippines. It lets shoppers overlay true-to-scale 3D furniture models inside their real homes via browser camera (no app download needed), scan room dimensions by tapping two floor points, and browse a searchable digital furniture catalog. Store owners get a separate management portal to update their inventory.

**Tech stack (for reference in the design):** React.js frontend, AR.js + WebXR for AR, Three.js for 3D rendering, Node.js/Express backend, MySQL/PostgreSQL database.

---

## 🎨 Design Direction

**Aesthetic:** Warm, modern, Filipino-local-market-friendly. Clean and trustworthy — not corporate, not minimalist-cold. Think IKEA warmth meets local craftsmanship pride. Earthy tones (warm beige, rich wood-brown, deep forest green as accent, off-white background). Rounded corners everywhere. Soft shadows. No harsh borders.

**Typography:**
- Display/headings: `DM Serif Display` or `Playfair Display` — warm, editorial, slightly artisan
- Body/UI: `Plus Jakarta Sans` — modern, legible, Filipino-market friendly
- Labels/badges: `DM Mono` for dimension readouts and specs

**Color Palette:**
- `--bg`: `#FAF7F2` (warm off-white)
- `--surface`: `#FFFFFF`
- `--primary`: `#3B6E52` (deep forest green — trust, nature, furniture)
- `--primary-light`: `#EAF3EE`
- `--accent`: `#C97B3A` (warm amber/wood — furniture warmth)
- `--accent-light`: `#FDF0E3`
- `--text-primary`: `#1A1A1A`
- `--text-secondary`: `#6B7280`
- `--border`: `#E8E2D9`
- `--destructive`: `#DC2626`
- `--success`: `#16A34A`

**Motion:** Smooth slide-up page transitions (300ms ease). Button press: scale(0.97). Cards hover: translateY(-4px) + shadow deepens. AR overlay pulse animation for scan points.

---

## 📱 Breakpoints

- **Mobile:** 390px wide (iPhone 14 reference)
- **Desktop:** 1440px wide

Design BOTH views for EVERY screen listed below. Use an auto-layout frame system. Mobile = vertical stack. Desktop = sidebar nav + content area.

---

## 🗂 Pages / Screens to Design

---

### SCREEN 1 — Landing / Welcome Page

**Purpose:** Entry point for first-time visitors. Establishes brand, explains the app, and routes users to either Shop or Store Owner login.

**Desktop Layout:**
- Full-width hero section (100vh): Left half = headline + CTA buttons. Right half = 3D mockup of a phone showing the AR furniture placement in action (use a placeholder illustration showing a living room with a sofa floating in AR).
- Headline: `"See It In Your Home Before You Buy It"` — large DM Serif Display, 64px
- Subtext: `"Browse local Mamburao furniture stores, scan your room, and place 3D furniture models in your space — all from your browser."` — 18px Plus Jakarta Sans
- Two CTAs side-by-side:
  - **[Explore Furniture]** — filled green primary button → links to Catalog Page
  - **[I'm a Store Owner]** → links to Store Owner Login Page
- Below hero: 3-column features section with icons:
  - 🪑 AR Furniture Placement
  - 📏 Room Scanner
  - 🔍 Smart Catalog
- Footer: FurnishAR logo, tagline, Mamburao, Occidental Mindoro

**Mobile Layout:**
- Stacked hero: headline (40px) → subtext → illustration (full-width) → two full-width CTA buttons stacked
- Features section: vertical card stack
- Bottom sticky bar: [Explore Furniture] button always visible

**All buttons must be linked:**
- [Explore Furniture] → Catalog Page
- [I'm a Store Owner] → Store Owner Login
- Feature cards → respective feature screens

---

### SCREEN 2 — Shopper Registration / Login Page

**Purpose:** Shoppers create an account or log in to save favorites, view history, and use AR.

**Desktop Layout:**
- Split screen: Left = warm illustrated background (furniture line art on beige). Right = login card (centered, 480px wide)
- Login card contains:
  - FurnishAR logo + "Welcome back"
  - Email input field
  - Password input field
  - **[Log In]** — primary button (full width)
  - "Don't have an account? Sign up" link
  - Divider: "or"
  - **[Continue as Guest]** — outlined button (full width) → goes to Catalog
- Sign Up tab/toggle:
  - Full Name, Email, Password, Confirm Password fields
  - **[Create Account]** button
  - Terms & conditions checkbox

**Mobile Layout:**
- Full screen login card, no split. Logo at top. Same fields. Same buttons.

**All buttons must be linked:**
- [Log In] → Catalog Page (on success)
- [Create Account] → Catalog Page (on success)
- [Continue as Guest] → Catalog Page
- "Sign up" link → toggles to registration form

---

### SCREEN 3 — Furniture Catalog / Browse Page

**Purpose:** Main shopping screen. Users browse, filter, and select furniture from partner stores.

**Desktop Layout:**
- Left sidebar (280px): Filter panel
  - Section: **Category** — checkboxes: Sofa, Bed, Dining Table, Cabinet, Chair, Shelf
  - Section: **Price Range** — dual-handle range slider (₱0 – ₱50,000+)
  - Section: **Color** — colored circle swatches (Brown, Black, White, Natural, Gray, Beige)
  - Section: **Size** — Small / Medium / Large radio buttons
  - Section: **Style** — Modern, Classic, Rustic, Minimalist checkboxes
  - Section: **Store** — list of pilot partner store names with checkboxes
  - **[Apply Filters]** button (green, full-width)
  - **[Clear All]** text link
- Main content area:
  - Top bar: Search input with magnifier icon + sort dropdown ("Newest / Price: Low–High / Price: High–Low") + toggle grid/list view icon buttons
  - Product grid: 3 columns, product cards
  - **Product Card** (each card):
    - Furniture image (4:3 ratio, rounded 12px)
    - Furniture name (bold, 16px)
    - Store name (muted, 13px)
    - Price (green, 18px bold)
    - Color dot indicators
    - Two action buttons:
      - **[View in AR]** — accent amber button with AR icon → goes to AR Viewer Screen
      - **[View Details]** — outlined green button → goes to Product Detail Screen
  - Pagination at bottom: Previous / 1 2 3 … / Next

**Mobile Layout:**
- Top sticky bar: Search input + Filter icon button (opens bottom sheet)
- Full-width product cards (1 column), or 2-column grid toggle
- Filter bottom sheet (slides up): Same filter options, scrollable, **[Apply]** and **[Reset]** buttons at bottom
- Bottom nav bar (fixed): 🏠 Home | 🔍 Catalog | 📏 Room Scan | ❤️ Saved | 👤 Account

**All buttons must be linked:**
- [View in AR] → AR Viewer Screen
- [View Details] → Product Detail Screen
- [Apply Filters] → refreshes grid
- Filter icon → opens filter bottom sheet
- Search → filters product grid
- Sort dropdown → reorders grid
- Bottom nav icons → respective screens

---

### SCREEN 4 — Product Detail Page

**Purpose:** Full product info, image gallery, store info, size specs, and AR launch.

**Desktop Layout:**
- Breadcrumb: Home > Catalog > [Product Name]
- Two-column layout:
  - Left column (55%): Image gallery — large main image + 4 thumbnail strip below. Image shows furniture from multiple angles.
  - Right column (45%):
    - Product name (DM Serif Display, 32px)
    - Store badge: "Sold by [Store Name]" with a small store icon
    - Price (₱ — green, 28px bold)
    - Star rating (4.2 ★ with review count)
    - Color selector: swatches (clickable circles — active swatch has green ring)
    - Size/Dimensions: formatted specs block using DM Mono
      - Width: 180 cm | Depth: 85 cm | Height: 75 cm
    - Stock status badge: "In Stock" (green) or "Limited" (amber)
    - AR Notice box (light green bg): "📱 Point your camera at the floor to place this item in your room."
    - **[Try in AR]** — large primary green button with camera icon → AR Viewer Screen
    - **[Save to Favorites]** — outlined with heart icon → toggles saved state
    - **[Contact Store]** — text button with store icon
    - Section: About this Item — paragraph description
    - Section: Room Suitability — tags: "Ideal for: Living Room, Studio, Bedroom"
    - Section: Store Info card — store name, location (Mamburao), a "View All Products from this Store" link button

**Mobile Layout:**
- Full-width image swipe gallery at top
- Product info below in vertical stack
- Sticky bottom bar: **[Try in AR]** (full width) + **[Save]** icon button side by side

**All buttons must be linked:**
- [Try in AR] → AR Viewer Screen
- [Save to Favorites] → toggles heart icon filled/unfilled
- [Contact Store] → opens modal with store contact info
- Thumbnail images → switches main image
- Color swatches → updates product image to that color
- "View All Products from this Store" → Catalog filtered by store
- Breadcrumb → respective pages

---

### SCREEN 5 — AR Viewer Screen (Core Feature)

**Purpose:** The main AR experience. Camera feed is the background. User can place, rotate, and scale 3D furniture models in their physical space.

**IMPORTANT NOTE FOR FIGMA:** Since this is a prototype, show this screen as a realistic mockup with:
- Dark camera-feed-style background (simulated room photo or gradient dark)
- Overlaid UI controls on top, as they'd appear in the live AR session

**Desktop Layout:**
- Full-screen AR viewport (camera feed fills everything)
- Top bar (floating, semi-transparent dark bg):
  - ← Back button (white icon)
  - Product name (white text)
  - **[Room Scanner]** button → Room Scanner Screen
- Center area: Illustrated 3D furniture model anchored to floor (use placeholder furniture silhouette with a subtle ground shadow ring)
- Ground scan animation: Animated concentric circles on the floor surface (AR detection state)
- AR Status bar (floating at top center): Badge saying "Scanning floor…" / "Floor detected ✓" (toggled states — design both)
- Bottom controls panel (floating card, blurred glass morphism bg):
  - Furniture name + price at top of panel
  - Control row:
    - **[↺ Rotate Left]** icon button
    - **[↻ Rotate Right]** icon button
    - **[−]** Scale down button
    - **[+]** Scale up button
    - **[↕ Move]** toggle button (drag mode)
  - Second row:
    - **[📷 Capture Screenshot]** button → opens screenshot preview modal
    - **[📏 Check Dimensions]** button → overlays dimension lines on the model
    - **[🔄 Change Color]** button → opens color swatch selector strip
    - **[✕ Remove]** button → removes furniture from scene
  - Bottom: **[Add to Cart / Inquiry]** — large accent amber button

**Mobile Layout:**
- Same full-screen camera layout
- Top bar same but compact
- Bottom sheet that slides up halfway:
  - Compact control icons in a row
  - **[Capture]** + **[Inquiry]** buttons side by side (full width split)
- Tap anywhere on camera feed = repositions furniture anchor

**All buttons must be linked:**
- ← Back → Product Detail Page
- [Room Scanner] → Room Scanner Screen
- Rotate/Scale/Move buttons → annotated as "Interactive in live app" with arrows
- [Capture Screenshot] → Screenshot Preview Modal overlay
- [Check Dimensions] → overlays dimension tags on furniture mockup
- [Change Color] → shows color swatch strip at bottom
- [Remove] → clears furniture from scene (returns to empty AR view)
- [Add to Cart / Inquiry] → Inquiry Modal overlay

---

### SCREEN 6 — Room Scanner Screen

**Purpose:** User taps two floor points to compute room dimensions. Separate from AR furniture placement but feeds into it.

**Desktop Layout:**
- Full-screen camera view (simulated with dark bg)
- Top bar: ← Back | "Room Scanner" title | **[Help]** icon
- Instruction card (floating, centered top area): "Tap two points on your floor to measure distance."
- Center: Two tap indicators (green dots with numbered labels: Point 1, Point 2) connected by a dashed measurement line
- Between the dots: Dimension label badge — `2.40 m` in DM Mono font, green background
- Step indicator (floating bottom-left): Step 1 of 2 progress dots
- Bottom panel:
  - Current measurement result: `Room Width: 2.40 m`
  - Button row:
    - **[Reset Points]** → clears points
    - **[Add Another Measurement]** → allows second measurement axis
    - **[Save Room Dimensions]** → saves and shows summary
  - After saving: Summary card appears:
    - Width: 2.40 m | Length: 3.80 m
    - **[Use These Dimensions in AR]** → AR Viewer Screen (with dimensions pre-loaded)

**Design BOTH states:**
- State A: Empty (no points tapped yet) — animated "tap here" indicator pulsing on floor
- State B: Two points placed with measurement result visible

**Mobile Layout:**
- Identical to desktop but full portrait screen
- Bottom panel is a bottom sheet sliding up

**All buttons must be linked:**
- ← Back → previous screen
- [Reset Points] → resets to State A
- [Add Another Measurement] → adds second measurement line
- [Save Room Dimensions] → shows summary card
- [Use These Dimensions in AR] → AR Viewer Screen
- [Help] → opens help modal

---

### SCREEN 7 — Saved / Favorites Page

**Purpose:** Logged-in users view furniture items they've saved.

**Desktop Layout:**
- Page header: "My Saved Items" + item count badge
- Saved items grid (3 columns) — same product card style as Catalog
- Each card has:
  - **[View in AR]** → AR Viewer
  - **[Remove]** (×) icon top-right of card → removes from saved
- Empty state (design this too): Illustrated empty shelf with text: "Nothing saved yet — browse the catalog to find furniture you love."
  - **[Browse Catalog]** button → Catalog

**Mobile Layout:**
- Full-width card list (1 column)
- Pull-to-refresh gesture indicator at top
- Bottom nav active on ❤️ icon

---

### SCREEN 8 — Shopper Account / Profile Page

**Purpose:** User manages their profile, view order history/inquiries, settings.

**Desktop Layout:**
- Left sidebar within account section (or use tabs at top):
  - Tab 1: Profile
  - Tab 2: My Inquiries
  - Tab 3: Settings
- Profile tab:
  - Avatar circle (initials-based placeholder) + name + email
  - **[Edit Profile]** → makes fields editable
  - Form fields: Full Name, Email, Phone Number
  - **[Save Changes]** button
- My Inquiries tab:
  - List of inquiry cards: furniture photo thumbnail + product name + store + status badge (Pending / Responded / Closed) + date
  - **[View Inquiry]** → opens inquiry detail modal
- Settings tab:
  - Toggle: Email notifications
  - Toggle: AR tips shown
  - **[Change Password]** → modal
  - **[Log Out]** — red text button → confirmation modal → Landing Page

**Mobile Layout:**
- Single scrollable page
- Tabs replaced by accordion sections
- Bottom nav active on 👤 icon

---

### SCREEN 9 — Store Owner Login Page

**Purpose:** Separate login portal for store owners.

**Desktop Layout:**
- Same split layout as Shopper Login but RIGHT side has green-tinted bg
- Label at top of card: "Store Owner Portal"
- Fields: Store Email, Password
- **[Log In to Portal]** button
- "Need access? Contact the FurnishAR team." text + mailto link
- No guest mode (owners must authenticate)

**Mobile Layout:**
- Full screen, same fields

**Linked to:**
- [Log In to Portal] → Store Owner Dashboard

---

### SCREEN 10 — Store Owner Dashboard

**Purpose:** Home screen for store owners after login. Overview of their inventory and performance.

**Desktop Layout:**
- Left sidebar (240px) — Store Owner Navigation:
  - 🏠 Dashboard (active)
  - 📦 My Products
  - ➕ Add Product
  - 📊 Analytics
  - 👤 Store Profile
  - 🚪 Log Out
- Main content:
  - Welcome header: "Welcome back, [Store Name]" + date
  - Stats row (4 stat cards):
    - Total Products: 24
    - AR Views This Month: 312
    - Shopper Inquiries: 18
    - Items Low in Stock: 3
  - Quick Actions section:
    - **[+ Add New Product]** → Add Product Page
    - **[View All Inquiries]** → Inquiries tab
    - **[Update Store Info]** → Store Profile
  - Recent Products table: Product image thumbnail | Name | Price | Stock | Status | **[Edit]** | **[Delete]** buttons
  - Inquiry feed (right sidebar on desktop): Latest 3 shopper inquiries with **[Respond]** buttons

**Mobile Layout:**
- No sidebar — use hamburger menu (slides in from left)
- Stats cards in 2×2 grid
- Quick actions as large tap targets
- Recent products as swipeable cards

**All buttons must be linked:**
- All sidebar nav → respective pages
- [+ Add New Product] → Add Product Page
- [Edit] on product row → Edit Product Page
- [Delete] → confirmation modal then refreshes list
- [Respond] → Inquiry response modal
- [Log Out] → confirmation → Store Owner Login

---

### SCREEN 11 — Add / Edit Product Page (Store Owner)

**Purpose:** Store owner fills out product info to publish it to the catalog.

**Desktop Layout:**
- Page title: "Add New Product" / "Edit Product"
- Two-column form layout:
  - Left column (form inputs):
    - Product Name (text input)
    - Category (dropdown: Sofa / Bed / Dining Table / Cabinet / Chair / Shelf)
    - Description (textarea, 4 rows)
    - Price (₱ number input)
    - Available Colors (multi-select color picker: checkboxes + swatch preview)
    - Dimensions — three separate inputs: Width (cm) | Depth (cm) | Height (cm)
    - Stock Status (radio: In Stock / Limited / Out of Stock)
    - Style (dropdown: Modern / Classic / Rustic / Minimalist)
    - Size Category (radio: Small / Medium / Large)
  - Right column (media upload):
    - 3D Model Upload zone (drag-and-drop box with GLB/GLTF label): "Upload 3D Model (.glb or .gltf)" — icon + upload button
    - Product Images Upload zone: Multi-image upload (max 5 images, 4:3 recommended) with previews
    - Image preview grid (thumbnails of uploaded images)
- Bottom action bar (sticky):
  - **[Save as Draft]** — outlined button
  - **[Publish Product]** — filled green button
  - **[Cancel]** — text link

**Mobile Layout:**
- Single column form, full width
- Upload zones stack below the form
- Sticky bottom buttons

**All buttons must be linked:**
- [Publish Product] → My Products Page (with success toast notification)
- [Save as Draft] → My Products Page (with draft badge on product)
- [Cancel] → My Products Page (with confirmation modal if unsaved changes)
- Image upload → shows preview
- 3D model upload → shows file name confirmation badge

---

### SCREEN 12 — Store Owner Products List Page

**Purpose:** Full inventory view with editing and status management.

**Desktop Layout:**
- Page header: "My Products" + **[+ Add Product]** button (top right)
- Filter/search bar: Text search + Status filter dropdown (All / Published / Draft / Out of Stock)
- Products table:
  - Columns: [ ] checkbox | Image | Product Name | Category | Price | Colors | Stock | Status | Actions
  - Each row actions: **[Edit]** | **[Delete]** | **[Toggle Published/Draft]** status switch
- Bulk actions bar (shows when checkboxes selected): **[Delete Selected]** | **[Set as Draft]** | **[Publish Selected]**
- Pagination

**Mobile Layout:**
- Search + filter at top
- Product cards (full width) instead of table
- Swipe left to reveal Edit / Delete actions
- Floating **[+]** button (FAB) bottom-right → Add Product

---

### SCREEN 13 — Inquiry / Contact Modal

**Purpose:** Modal overlay that appears when a shopper sends an inquiry from a product page.

**Content:**
- Modal title: "Send Inquiry to [Store Name]"
- Product thumbnail + name inside modal for context
- Form:
  - Shopper Name (pre-filled if logged in)
  - Phone Number
  - Message textarea: "I'm interested in this [product name]. Is it available in [color]?"
- **[Send Inquiry]** → success state
- **[Cancel]** → closes modal

**Success State:**
- Checkmark icon (green)
- "Inquiry Sent! The store will contact you shortly."
- **[Browse More]** → Catalog Page

---

### SCREEN 14 — Screenshot Preview Modal (from AR Screen)

**Purpose:** After user captures AR screenshot, they can save or share.

**Content:**
- Dark overlay modal
- AR screenshot preview (full 3D mockup in room — simulated image placeholder)
- Product name + store name watermark (bottom-left of image)
- Buttons:
  - **[💾 Save to Device]** → downloads image
  - **[🔗 Share]** → native share API
  - **[Close]** × → back to AR screen

---

## 🧩 Reusable Components to Design in the Component Library

Design these as named components in Figma with variants:

1. **ProductCard** — variants: Default / Hover / Saved
2. **PrimaryButton** — variants: Default / Hover / Disabled / Loading
3. **OutlinedButton** — same variants
4. **TextButton** — Default / Hover
5. **InputField** — Default / Focused / Error / Disabled
6. **FilterChip** — Unselected / Selected
7. **StatusBadge** — In Stock (green) / Limited (amber) / Out of Stock (red) / Draft (gray) / Published (green)
8. **BottomNav** (mobile) — 5 icons with active/inactive states
9. **TopBar** — Mobile variant / Desktop variant
10. **ColorSwatch** — Unselected / Selected (with ring)
11. **ARControlButton** — icon + label, default/pressed state
12. **StoreOwnerSidebarNav** — item states: active / hover / default
13. **DimensionBadge** — DM Mono font, green bg, measurement readout
14. **ToastNotification** — Success / Error / Info variants
15. **EmptyState** — with illustration placeholder + CTA button

---

## 📐 Layout Specifications

**Desktop (1440px):**
- Max content width: 1280px, centered
- Sidebar width (store owner): 240px
- Filter sidebar (catalog): 280px
- Content padding: 48px horizontal
- Card grid gap: 24px
- Section spacing: 80px

**Mobile (390px):**
- Horizontal padding: 20px
- Bottom nav height: 64px
- Top bar height: 56px
- Card gap: 16px
- Section spacing: 40px

**Radii:** Buttons = 10px. Cards = 16px. Modals = 20px. Inputs = 10px. Badges = 999px (pill).

**Shadows:**
- Card: `0 2px 12px rgba(0,0,0,0.08)`
- Card hover: `0 8px 24px rgba(0,0,0,0.14)`
- Modal: `0 24px 48px rgba(0,0,0,0.2)`
- Bottom nav: `0 -2px 12px rgba(0,0,0,0.08)`

---

## 🔗 Prototype Linking Summary

| From | Trigger | To |
|---|---|---|
| Landing — [Explore Furniture] | Click | Catalog Page |
| Landing — [I'm a Store Owner] | Click | Store Owner Login |
| Login — [Log In] | Click | Catalog Page |
| Login — [Continue as Guest] | Click | Catalog Page |
| Catalog — [View in AR] | Click | AR Viewer |
| Catalog — [View Details] | Click | Product Detail |
| Product Detail — [Try in AR] | Click | AR Viewer |
| Product Detail — [Save] | Click | Toggle saved state |
| Product Detail — [Contact Store] | Click | Inquiry Modal |
| AR Viewer — [Room Scanner] | Click | Room Scanner |
| AR Viewer — [Capture] | Click | Screenshot Modal |
| AR Viewer — [Inquiry] | Click | Inquiry Modal |
| AR Viewer — Back | Click | Product Detail |
| Room Scanner — [Use Dimensions in AR] | Click | AR Viewer |
| Inquiry Modal — [Send] | Click | Success state |
| Shopper Account — [Log Out] | Click | Landing Page |
| Store Owner Login — [Log In] | Click | Store Owner Dashboard |
| Dashboard — [+ Add Product] | Click | Add Product Page |
| Dashboard — [Edit] | Click | Edit Product Page |
| Dashboard — [Log Out] | Click | Store Owner Login |
| Add Product — [Publish] | Click | My Products + success toast |
| Add Product — [Cancel] | Click | My Products (confirmation modal) |
| Bottom Nav — 🏠 | Click | Catalog / Landing |
| Bottom Nav — 🔍 | Click | Catalog |
| Bottom Nav — 📏 | Click | Room Scanner |
| Bottom Nav — ❤️ | Click | Saved Page |
| Bottom Nav — 👤 | Click | Account Page |

---

## ✅ Final Checklist for FigMake

- [ ] All 14 screens designed in both mobile (390px) and desktop (1440px) frames
- [ ] All 15 components built in component library with variants
- [ ] Color styles and text styles defined as Figma styles
- [ ] All buttons have interactive prototype connections (no dead ends)
- [ ] All modals have a visible close/dismiss path
- [ ] AR screens clearly show camera-feed simulation with overlay UI
- [ ] Store owner and shopper flows are clearly separated with different top bars/nav
- [ ] Empty states designed for: Catalog (no results), Saved (empty), Products list (no products)
- [ ] Error states designed for: Login failed, Upload failed, AR not supported
- [ ] Loading states designed for: AR scanning, catalog loading, form submitting

---

*FurnishAR — Designed for Mamburao, Occidental Mindoro. Built for local furniture retailers and shoppers to make confident, AR-powered decisions.*