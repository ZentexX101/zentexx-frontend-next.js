## 📂 Detailed Project Structure

```bash
src/
├── app/                          # App Router entry (routing + layouts)
│   ├── layout.js                 # Root layout (HTML wrapper, global UI, fonts, metadata)
│   ├── page.js                   # Home page (/)
│   ├── globals.css              # Global styles (Tailwind বা custom CSS)
│
│   ├── (auth)/                  # Route Group (URL-এ show হবে না)
│   │   ├── layout.js            # Auth صفحاتের layout (minimal UI)
│   │   ├── login/
│   │   │   └── page.js          # /login
│   │   ├── register/
│   │   │   └── page.js          # /register
│   │   └── forgot-password/
│   │       └── page.js
│
│   ├── (dashboard)/             # Protected routes
│   │   ├── layout.js            # Sidebar + Navbar layout
│   │   ├── page.js              # /dashboard
│   │
│   │   ├── users/
│   │   │   ├── page.js          # /dashboard/users
│   │   │   └── [id]/
│   │   │       └── page.js      # /dashboard/users/:id
│   │
│   │   ├── analytics/
│   │   │   └── page.js
│   │
│   │   ├── settings/
│   │   │   └── page.js
│
│   ├── about/
│   │   ├── layout.js            # About page-specific layout/font
│   │   └── page.js              # /about
│
│   ├── blog/
│   │   ├── page.js              # /blog (listing)
│   │   └── [slug]/
│   │       └── page.js          # /blog/:slug (dynamic page)
│
│   ├── api/                     # Backend endpoints (server-side only)
│   │   ├── auth/
│   │   │   └── route.js         # /api/auth
│   │   ├── users/
│   │   │   └── route.js         # /api/users
│   │   └── payments/
│   │       └── route.js
│
│   ├── loading.js               # Global loading UI
│   ├── error.js                 # Global error boundary
│   └── not-found.js             # Custom 404 page
│
├── components/                  # Reusable UI components
│   ├── ui/                      # Atomic components (Button, Input, Modal)
│   ├── shared/                  # Navbar, Footer, Sidebar
│   ├── charts/                  # Chart components (AreaChart, BarChart)
│   └── forms/                   # Form components (React Hook Form ভিত্তিক)
│
├── features/                    # Feature-based modules (large apps)
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   ├── user/
│   └── dashboard/
│
├── hooks/                       # Global reusable hooks
│   ├── useAuth.js
│   ├── useDebounce.js
│   └── useModal.js
│
├── lib/                         # Utility functions & configs
│   ├── api.js                   # API base config (axios/fetch wrapper)
│   ├── db.js                    # Database connection (if needed)
│   ├── utils.js                 # Helper functions
│   └── constants.js
│
├── services/                    # API calls (clean separation)
│   ├── authService.js
│   ├── userService.js
│   └── paymentService.js
│
├── store/                       # State management (Zustand/Redux)
│   ├── useAuthStore.js
│   └── useAppStore.js
│
├── styles/                      # Extra styling (optional)
│   └── variables.css
│
├── types/                       # Type definitions (TypeScript হলে)
│   └── index.d.ts
```

---

## 🧠 Folder Responsibilities (Important)

### 🔹 `app/`

* Routing + layouts control করে
* Server Components by default
* SEO (`metadata`) handle করে

---

### 🔹 `components/`

* Pure UI (no business logic ideally)
* Reusable across multiple pages

---

### 🔹 `features/` (Advanced)

* Large project হলে use করো
* Feature-wise grouping (clean + scalable)

---

### 🔹 `services/`

* Backend API call handle করে
* UI কে clean রাখে

---

### 🔹 `lib/`

* Helper functions (formatDate, API wrapper, etc.)

---

### 🔹 `hooks/`

* Reusable logic (auth, debounce, modal control)

---

### 🔹 `store/`

* Global state (Zustand / Redux)

---

## 🔥 Best Practices

* ✅ Page-specific logic → `app/`
* ✅ Reusable UI → `components/`
* ✅ Business logic → `services/`
* ✅ Shared logic → `hooks/`
* ✅ Utilities → `lib/`

---

## ⚡ Pro Tips

* Use **route groups `( )`** for clean URL
* Use **nested layouts** for dashboard अलग UI
* Keep components small & reusable
* Avoid mixing API logic inside components

---

## 🚀 Scaling Strategy

Small project:
→ `components + services + hooks`

Large project:
→ Add `features/` folder (modular architecture)

---
