# 🎨 Design Philosophy Index — Adaptive Learning Curriculum

A quick-reference index of the engineering design principles that guide the entire curriculum.
Use this to make design decisions, evaluate your code, or guide refactors.

---

# 🔧 1. Ousterhout — *A Philosophy of Software Design*
**Focus:** Managing complexity via deep modules.

### Principles
- Deep modules > shallow modules
- Define narrow interfaces, hide complexity
- Split modules when the abstraction leaks
- Comments explain *why*, not *what*
- Reduce "complexity surface area"

### Applies in:
- Phase 1: functions
- Phase 2: interfaces & TS
- Phase 3: system boundaries
- Phase 4–6: API boundaries, contract separation

**Resource:** *A Philosophy of Software Design* by John Ousterhout

---

# 🧱 2. Sandi Metz — Object-Oriented Design
**Focus:** Dependencies and interface clarity.

### Principles
- Prefer composition over inheritance
- Delay abstraction until patterns appear
- Small, stable interfaces
- Avoid over-fitting abstractions

### Applies in:
- Phase 1–2: modules, functions
- Phase 3–6: backend services, contract design

**Resource:** https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

---

# 🧩 3. Daniel Jackson — Concept Design
**Focus:** Minimal models to reduce confusion.

### Principles
- Identify essential concepts
- Keep mental model small
- Reduce conceptual overload
- Prefer fewer, stronger concepts

### Applies in:
- Phase 3–4: architecture
- Phase 5–6: smart contract interfaces

**Resource:** https://essenceofsoftware.com/

---

# 🔄 4. Donella Meadows — Systems Thinking
**Focus:** Feedback loops, leverage points.

### Principles
- Identify reinforcing vs balancing loops
- Define system boundaries
- Look for leverage points
- Expect emergent behavior

### Applies in:
- Phase 3: async + system modeling
- Phase 4–6: distributed systems, Web3 logic

**Resource:** *Thinking in Systems* by Donella Meadows

---

# 🔍 5. Herbert Simon — Hierarchy & Decomposition
**Focus:** Breaking complex systems into parts.

### Principles
- Hierarchical decomposition
- Bounded rationality
- Divide-and-conquer
- Simpler subsystems → simpler whole

### Applies in:
- Phase 2–6: architecture, modularization

**Resource:** *The Sciences of the Artificial* by Herbert Simon

---

# 🔁 6. Norbert Wiener & Stafford Beer — Cybernetics
**Focus:** Control, feedback, viability.

### Principles
- Systems need feedback to regulate
- Monitoring + adjustment = stability
- Requisite variety: control must match complexity

### Applies in:
- Phase 3: observability, logs
- Phase 5–6: smart contract systems, distributed nodes

**Resources:**
- *Cybernetics* by Norbert Wiener (Intro & Ch. 1)
- *Designing Freedom* by Stafford Beer

---

# 🔐 7. Web3 Design Principles
**Focus:** On-chain/off-chain separation.

### Principles
- Minimize storage on-chain
- Stateless clients, stateful contracts
- Gas-aware architecture
- Trust boundaries must be explicit
- Use events for state sync

### Applies in:
- Phase 5–6

**Resources:**
- Ethereum Whitepaper: https://ethereum.org/en/whitepaper/
- Mastering Ethereum: https://github.com/ethereumbook/ethereumbook

---

# 🧪 8. Testing & Verification Principles

### Key Concepts
- Test boundaries, not internals
- Unit → integration → E2E pyramid
- Smart contract invariants
- Deterministic functions first

### Applies in:
- Every phase beginning in Phase 1

**Resources:**
- Jest Documentation: https://jestjs.io/docs/getting-started
- ConsenSys Smart Contract Best Practices: https://consensys.github.io/smart-contract-best-practices/

---

# 🧭 How to Use This Index
Before building anything, ask:

1. **What concepts define this system?** (Jackson)
2. **What is the minimal useful interface?** (Ousterhout)
3. **Where does the complexity actually live?**
4. **How do the pieces depend on each other?** (Metz)
5. **What feedback loops exist?** (Meadows/Beer)
6. **What belongs on-chain vs off-chain?** (Web3)
7. **How will I test this boundary?**

Use this as your design decision compass.
