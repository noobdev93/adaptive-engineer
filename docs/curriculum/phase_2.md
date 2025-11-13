# ⚙️ Phase 2 — Data, Abstraction, Persistence & Early Backend Engineering

Phase 2 builds your core engineering foundation.
You will learn how data is structured, stored, retrieved, and organized — from **in-memory structures → real persistence → SQL → Postgres → early system design**.

This phase gives you everything needed before learning asynchronous systems, distributed architecture, and Web3 execution models in Phase 3.

---

# 🎯 Learning Goals

### **1. Think in Abstractions (Ousterhout, Metz, Jackson)**
- design clean interfaces
- hide implementation complexity
- reduce coupling
- increase clarity
- understand conceptual modeling

---

### **2. Implement Core Data Structures**
You will build, test, and understand how these work:
- arrays
- stacks
- queues
- linked lists
- hash maps
- trees (binary search trees)

This builds computational intuition needed for:
- database indexing
- smart contract storage patterns
- backend query logic
- system design

---

### **3. TypeScript as a Precision Tool**
- generics
- interfaces
- strict type safety
- module boundaries
- enums and discriminated unions

TypeScript will become your "thinking tool" for backend design.

---

### **4. File I/O & Stream Processing (Node.js)**
Before learning databases, you will:
- read and write files
- process large logs with streams
- build small ETL workflows
- serialize/deserialize JSON

This teaches:
- handling data at scale
- memory vs disk tradeoffs
- batching
- processing pipelines

---

### **5. Relational Modeling & SQL**
You will learn:
- tables, rows, columns
- primary & foreign keys
- one-to-many & many-to-many
- normalization (conceptually)
- SELECT, JOIN, GROUP BY
- indexes & performance basics

This gives you the mental model that Web2 and Web3 both rely on.

---

### **6. PostgreSQL Foundations**
- installing & configuring Postgres
- working with `psql`
- using a database client in Node.js
- migrations and schema evolution
- connection pooling
- ACID guarantees

---

### **7. Persistence in Real Applications**
You will integrate:
- TypeScript logic
- SQL queries
- PostgreSQL schemas
- CRUD operations
- constraints
- indexing

This transforms your coding ability from "toy programs" into "real backend engineer."

---

# 📚 Core Resources

### **TypeScript & Software Engineering**
- TypeScript Handbook
  https://www.typescriptlang.org/docs/
- TypeScript Deep Dive (Basarat)
  https://basarat.gitbook.io/typescript/
- Ousterhout — *A Philosophy of Software Design*
- Sandi Metz — selected chapters on object design

### **Data Structures**
- JavaScript Algorithms and Data Structures (Trekhleb)
  https://github.com/trekhleb/javascript-algorithms
- Grokking Algorithms (optional)

### **Databases**
- PostgreSQL Tutorial
  https://www.postgresqltutorial.com/
- PostgreSQL Docs
  https://www.postgresql.org/docs/
- Use The Index, Luke
  https://use-the-index-luke.com/

---

# 🛠️ Micro-Projects

---

## **Project 2.1 — TypeScript Data Structure Library**
Implement:
- Stack
- Queue
- LinkedList
- HashMap
- Binary Search Tree

Each with:
- TypeScript generics
- clear interfaces
- Jest test coverage
- complexity analysis

---

## **Project 2.2 — Refactor Task Manager Into TypeScript**
Convert everything from Phase 1 into:
- strict TypeScript
- separated modules
- interface-driven design
- improved error handling
- deeper abstractions

This prepares the structure for DB integration later.

---

## **Project 2.3 — File-Based Data Processor**
Build a:
- log analyzer
- CSV processor
- or JSON aggregator

Must use:
- Node.js streams
- chunking
- statistics & reduction
- summary output file

Skill: **processing more data than fits in memory.**

---

## **Project 2.4 — Schema Modeling (Concept Design + SQL)**
Model three domains:
- social network
- e-commerce
- library system

Deliverables:
- conceptual model (Jackson-style)
- ER diagram
- SQL `CREATE TABLE` statements
- relationships & constraints

This builds your DB modeling intuition.

---

# 🏗️ Main Project — Phase 2
## **Mini Database System + PostgreSQL Integration**

This is the heart of the phase.

### **Part 1 — Build an In-Memory "Database"**
Features:
- in-memory tables
- insert
- update
- delete
- simple query API
- filtering & sorting
- JSON persistence

### **Part 2 — Replace In-Memory Storage With PostgreSQL**
Using:
- node-postgres (`pg`)
- prepared statements
- transactions
- schema migrations

### **Tables to Build:**
- users
- tasks
- tags
- task_tags (many-to-many)
- activity_log

This project teaches:
- schema design
- connecting TypeScript to SQL
- managing persistent state
- building CRUD logic
- query performance basics

---

# 🔍 Web3-Aware Extension (Optional)
Add a lightweight event log:
- append-only file
- hashing entries
- verifying integrity
- comparing with relational updates

This builds intuition for:
- blockchain state
- Merkleized data
- immutability vs mutability

Optional → but powerful for Phase 5.

---

# 🧠 ND-Friendly Strategies

- **chunk skills** into micro-projects
- **spiral review** all data structures monthly
- use diagrams for schemas and algorithms
- build reference sheets for SQL
- use consistent module patterns

---

# 🔁 Monthly Spiral Review (Lightweight)
Choose 2–3:
- reimplement a data structure
- rebuild your conceptual model for one DB schema
- refactor a module using Ousterhout principles
- rewrite SQL queries with better JOIN logic
- reflect on memory → file → database transitions

---

# 📝 Reflection Prompts
- What abstractions were hardest to design?
- What did implementing trees teach about indexes?
- How does persistent state change program design?
- What constraints helped clarify your schema?
- What errors taught you the most about SQL?

---

# 🎓 Completion Criteria

You are ready for Phase 3 when you can:
- implement and test multiple data structures
- design clean module boundaries
- write SQL queries confidently
- build a small TypeScript app backed by Postgres
- understand transactional vs in-memory state
- reason through an application's data flow end-to-end

---

# ✔ End of Phase 2
