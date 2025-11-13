# 🔌 Phase 4 — Backend Engineering, API Design & Web2 Production Foundations

Phase 4 turns everything you've learned so far into **real backend engineering**.

You will learn how to design and implement:
- RESTful APIs
- structured backend services
- authentication & authorization
- request validation
- error handling
- production-ready logging
- secure patterns
- deployment fundamentals

This phase transforms you from "someone who writes programs" → **an engineer who builds services that real applications depend on**.

---

# 🎯 Learning Goals

### **1. Deep Understanding of HTTP & REST**
- request/response lifecycle
- HTTP methods
- headers & content types
- status codes (2xx/3xx/4xx/5xx)
- caching basics
- pagination, filtering, sorting
- designing intuitive resource-based routes

---

### **2. Backend Service Architecture**
- layered design (routes → controllers → services → repositories)
- separation of concerns
- dependency boundaries
- environment management
- configuration & secrets
- project structure for maintainability

---

### **3. Authentication & Authorization**
- password hashing (bcrypt)
- JSON Web Tokens (JWT)
- session-based auth
- guarding protected routes
- role-based access control (RBAC)
- token refresh patterns

---

### **4. Security Best Practices**
- input validation
- sanitization
- SQL injection prevention
- rate limiting
- CORS
- secure password storage
- OWASP fundamentals
- secure error handling

---

### **5. Stability & Observability**
- structured logging
- request lifecycle tracing
- metrics (success rate, response times)
- health checks
- graceful shutdown

You already built structured logging in Phase 3 — now you integrate it into a real API.

---

### **6. Deployment-Ready Skills**
- environment variables
- production config
- Docker basics
- process management (PM2)
- basic CI/CD triggers
- cloud deployment mindset

---

# 📚 Core Resources

### **Backend Essentials**
- Express.js Docs
  https://expressjs.com/
- Node.js Best Practices
  https://github.com/goldbergyoni/nodebestpractices
- REST API Tutorial
  https://restfulapi.net/

### **Authentication**
- JWT Introduction
  https://jwt.io/introduction
- OWASP Authentication Cheat Sheet
  https://cheatsheetseries.owasp.org/

### **Security**
- OWASP Top 10
  https://owasp.org/www-project-top-ten/
- Helmet.js
  https://helmetjs.github.io/

### **Deployment**
- PM2 Docs
  https://pm2.keymetrics.io/
- Docker Docs
  https://docs.docker.com/

---

# 📁 Folder Structure

```
/projects/phase_4/
    project_4_1_http_from_scratch/
    project_4_2_jwt_auth_service/
    project_4_3_validation_middleware/
    project_4_4_api_versioning/
    project_4_main/
```

---

# 🛠️ Micro-Projects

---

## **Project 4.1 — Build HTTP From Scratch (No Express)**
**Goal:** Understand exactly what a web server does.

Tasks:
- use Node's `http` module
- parse URLs
- handle GET/POST requests
- return headers & JSON
- send correct status codes

**Outcome:**
You will understand the entire request lifecycle before adding frameworks.

---

## **Project 4.2 — JWT Authentication Service**
**Goal:** Implement modern auth fundamentals.

Features:
- register
- login
- hashed passwords
- issue JWT on login
- verify JWT for protected routes
- token expiration

**Outcome:**
Security mindset + auth flows.

---

## **Project 4.3 — Validation Middleware**
Build your own input validator:
- validate body/query params
- return consistent errors
- reusable validation rules
- integrate with Express

**Outcome:**
Clean contract boundaries between client ↔ server.

---

## **Project 4.4 — API Versioning Strategy**
Implement:
- v1 vs v2 routing
- deprecation headers
- documentation

**Outcome:**
Understanding of API evolution — essential for real production services.

---

# 🏗️ Main Project — Phase 4
## **Full REST API for the Task Manager (PostgreSQL-Backed)**

This is a production-coded backend for your Phase 2 Task Manager.

### **Features**
- user registration & login
- JWT-based authentication
- protected task endpoints
- CRUD operations for tasks
- tags & search
- pagination & filtering
- activity log
- error handling
- input validation
- rate limiting
- structured logging
- environment configs

---

### **Endpoints**

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login

GET    /api/v1/tasks
POST   /api/v1/tasks
GET    /api/v1/tasks/:id
PATCH  /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

GET    /api/v1/tasks/search?q=example
```

---

### **Architecture Layers**

```
/routes
/controllers
/services
/repositories
/models
/utils
/middleware
```

You will implement:
- clean domain logic
- database layer (Postgres queries)
- business rules
- reusable middleware
- testable endpoints

---

### **Security Requirements**
- bcrypt for hashing
- parameterized SQL
- Helmet.js for secure headers
- rate limiting
- sanitized inputs
- protected routes using JWT

---

### **Observability**
- use your Phase 3 structured logger
- correlation IDs
- per-request logging
- login & task mutation events
- error logs with stack traces

---

### **Deployment Prep**
(Not full deployment yet — that is Phase 6.)

You will:
- dockerize the API
- use environment variables
- build production config
- enable graceful shutdown

---

# 🌐 Web3-Aware Extension (Optional)

Add a **blockchain-backed audit log**:

- each task mutation becomes an "event"
- event includes timestamp, user, and hash of prev event
- append-only chain (no rewriting)
- verify chain integrity

This builds intuition for:
- immutability
- append-only logs
- auditability
- blockchain-style state transitions

---

# 🧠 ND-Friendly Strategies

- **chunk API endpoints** into separate folders/files
- maintain a "request flow map"
- create a visual diagram of the architecture
- use scaffold templates for routes and controllers
- wrap complex logic in simple service functions
- write the validation rules before building the endpoints

---

# 🔁 Monthly Spiral Review
Pick 2–3:
- refactor a controller into a cleaner service
- add validation to a previously unvalidated endpoint
- write a new endpoint following REST principles
- update SQL queries for performance
- diagram the flow of an authenticated request
- write a reflection about system boundaries

---

# 📝 Reflection Prompts
- What makes an API intuitive?
- Where did you introduce unnecessary complexity?
- What parts of securing the API were subtle or surprising?
- How does logging change how you think about debugging?
- How does auth shape data and service boundaries?

---

# 🎓 Completion Criteria
You are ready for Phase 5 when you can:
- fully implement REST APIs
- design clean backend layers
- secure user authentication
- validate all input
- log and observe system behavior
- structure projects professionally
- write SQL queries inside backend code
- document your API clearly

This means you are ready to learn:
- smart contract execution
- EVM
- Solidity
- dApp architecture
- Web3 backend patterns

---

# ✔ End of Phase 4
