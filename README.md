# 🌱 PipeList — Plumbing & Irrigation Material Estimator

A professional, mobile-friendly web application for building, calculating, and exporting plumbing and irrigation material estimates and quotations. Designed for plumbers, irrigation contractors, hardware shop owners, and farmers.

---

## 🚀 Features

* 📋 **Complete Product Catalog**: Pipes (CPVC, PVC, HDPE, UPVC, PE), Fittings, Reducers, Valves, Drip Irrigation, Sprinkler, and General Hardware.
* ⭕ **Visual Ring Size Picker**: Interactive pipe & fitting sizing selector calibrated for standard plumbing sizes.
* 💰 **Flexible Pricing & Quotations**: Instant line-item math, labour cost, transport, discounts, and auto-computed grand totals with Indian Rupee (`₹`) formatting.
* 📄 **PDF & Image Export**: Professional quotation documents with shop branding, owner name, WhatsApp contact, and GSTIN ready for printing or sharing on WhatsApp.
* 💾 **Local-First & Offline**: Fully functional offline without requiring an internet connection or account.
* 🔐 **Future-Ready Auth & Cloud Architecture**: Built-in authentication UI, session management, and a clean Data Service Layer ready to connect to cloud databases.

---

## 🏗️ Architecture

PipeList is engineered with a **Local-First, Cloud-Ready Architecture**:

```text
┌────────────────────────────────────────────────────────┐
│                   PipeList UI                          │
│     (Dashboard, Material Estimator, Price List)        │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                   DataService Layer                    │
│      (Auth, Session, Projects, Settings, Catalog)      │
└─────────────┬────────────────────────────┬─────────────┘
              │                            │
              ▼                            ▼
   ┌──────────────────────┐   ┌───────────────────────────┐
   │ LocalStorage Engine  │   │     CloudSyncAdapter      │
   │  (Active Fallback)   │   │  (Ready for Supabase/API) │
   └──────────────────────┘   └─────────────┬─────────────┘
                                            │
                                            ▼
                              ┌───────────────────────────┐
                              │  Future Cloud Database    │
                              │ (PostgreSQL + RLS / Auth) │
                              └───────────────────────────┘
```

### Key Principles

1. **Zero Downtime / Local Fallback**: If unauthenticated or offline, PipeList runs in **Local Mode** using localStorage.
2. **Secure Credential Handling**: Passwords are never stored in plaintext. In local mode, credentials use cryptographic SHA-256 hashing via the Web Crypto API, and only ephemeral session tokens are retained.
3. **Pluggable Sync Adapter**: `CloudSyncAdapter` abstracts cloud synchronization so backend providers (e.g. Supabase, Firebase) can be plugged in without refactoring any frontend components.

---

## 🗄️ Database Design (For Cloud Implementation)

When connecting a cloud backend (e.g., PostgreSQL / Supabase), use the following relational schema:

```text
users
  │ (id, name, email, avatar_url, created_at)
  │
  ├── shop_profile
  │     (id, user_id, shop_name, owner_name, phone, whatsapp, address, gstin, logo_url)
  │
  ├── projects
  │     (id, user_id, project_name, customer_name, customer_phone, customer_whatsapp, location, date, work_type, notes, created_at, updated_at)
  │      │
  │      ├── project_materials
  │      │     (id, project_id, template_id, name, category, size, from_size, to_size, material, brand, unit, qty, price, note)
  │      │
  │      └── quotations
  │            (id, project_id, subtotal, labour_cost, transport_cost, other_cost, discount, grand_total, notes)
  │
  └── custom_materials
        (id, user_id, name, category, sizes, unit, default_price, created_at)
```

### Security & Row-Level Security (RLS)

* Every record is associated with `user_id = auth.uid()`.
* Row-Level Security (RLS) guarantees that users can only read, insert, update, and delete their own projects and quotations.
* Secret keys and database credentials are never exposed in frontend code.

---

## 💡 Recommended Future Backend: Supabase

Based on PipeList's requirements, **Supabase** is the recommended cloud backend:

| Feature | Why Supabase Fits PipeList Best |
|---|---|
| **Database** | Relational PostgreSQL matching PipeList's hierarchical data model (users ➔ shop profile ➔ projects ➔ materials). |
| **Authentication** | Built-in Email/Password, Magic Link, and Google OAuth out of the box. |
| **Security** | Native Row-Level Security (`auth.uid() = user_id`) protecting each user's private quotations. |
| **Storage** | Object storage buckets for shop logos and generated PDF quotation archives. |
| **Local-First Sync** | Direct compatibility with offline sync libraries (PowerSync / WatermelonDB) for zero-latency mobile & laptop synchronization. |

---

## 📂 Project Structure

```text
pipelist/
│
├── index.html        # Main HTML shell (topbar, sidenav, modals, viewport)
├── styles.css        # Clean responsive design system (mobile-first, teal & amber palette)
├── script.js         # Complete app logic, catalog, math, DataService, and Auth
└── README.md         # Documentation & architecture specifications
```

---

## ▶️ How to Run

### Option 1 — Open Directly
1. Double click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2 — Live Server (VS Code)
1. Open the project folder in **VS Code**.
2. Right-click `index.html` and select **Open with Live Server**.

---

## 👨‍💻 Author

**Uday Kumar V**  
Computer Science & Engineering Student  
UVCE, Bangalore  
GitHub: [github.com/udaykumarv01](https://github.com/udaykumarv01)

---

## 📄 License

This project is open-source and available for learning, modification, and development.
