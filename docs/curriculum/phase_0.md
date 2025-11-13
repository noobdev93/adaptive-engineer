# 📘 Phase 0 — Computational Intuition, Logic Foundations & Web3 Mental Models
### Adaptive Learning Curriculum — Phase 0

Phase 0 establishes the conceptual foundation required before writing real programs.
It shapes how you **think**, **see**, and **reason** about computation long before syntax enters the picture.

You will develop mental models for:
- how computers process information
- how algorithms behave
- how state changes
- how distributed systems maintain coherence
- how Web3 systems map to computation + systems theory
- how to use core tools (terminal, Git, Node.js)

This phase sets the cognitive baseline for all future engineering work.

---

# 🎯 Learning Goals

## **1. Computational Thinking**
- Understand inputs, outputs, processes, and state
- Describe an algorithm without using code
- Know the difference between deterministic and nondeterministic behavior
- Understand how computers represent data
- Explain what a "model of computation" is

## **2. Logic & Computation Lineage (Turing → Church → Chomsky)**
- What the Church–Turing thesis claims
- What a Turing machine is conceptually
- What a formal language is
- Why programming languages exist at all
- Why computation = symbolic manipulation

## **3. Web3 Mental Models**
- Hashing and immutability
- Digital signatures (public/private keys)
- Merkle trees and data integrity
- Blockchain as a state transition machine
- Distributed consensus (high-level)

## **4. Tooling & Workflow**
- Comfortable with the terminal
- Install Node.js, Git, VS Code
- Create and manage a Git repository
- Begin documentation and reflection habits

---

# 🧰 Setup Checklist

Install:

### **Node.js (LTS)**
https://nodejs.org/

### **VS Code or Cursor**
VS Code: https://code.visualstudio.com/
Cursor: https://cursor.sh/

Recommended VS Code Extensions:
- Prettier
- GitLens
- ESLint
- Markdown All-in-One

### **Git**
https://git-scm.com/downloads

### Verify:
```bash
node -v
npm -v
git --version
```

---

# 📜 Conceptual Background

## 1. Computation (the intuitive model)

Computation = transforming inputs into outputs through a defined procedure.

Key ideas:
- **State**: what the system "knows" at a moment
- **Transition**: how state changes
- **Representation**: numbers, strings, bits, structures
- **Process**: the rules for changing state

---

## 2. Logic Lineage: Turing → Church → Chomsky

Understanding computation conceptually, not mechanically.

### Alan Turing
- A Turing machine is a minimal, abstract computer
- Shows what "computation" fundamentally is

### Alonzo Church
- Lambda calculus = functional computation model
- Equivalent to Turing machines (Church–Turing thesis)

### Noam Chomsky
- Hierarchy of formal grammars
- Explains why languages (natural or programming) require structure
- Helps make sense of syntax, parsing, and compilers later

### Why this matters for you

Later, when learning JavaScript and TypeScript, these foundations will help you:
- understand language design
- understand what "computation" actually is
- reduce confusion by seeing deeper order
- connect programming to systems + Web3 concepts

---

## 3. Web3 Mental Models

### Hashing

**Properties:**
- deterministic
- one-way
- collision-resistant
- avalanche effect (tiny input change → huge output change)

**Used for:**
- block integrity
- signatures
- addresses
- Merkle trees

### Digital Signatures
- private key = secret
- public key = shared
- proves authorship
- cannot forge without key

### Merkle Trees

Structure that allows:
- verifying inclusion
- proving data integrity
- efficient distributed consensus

### Blockchain = State Transition Machine

Each block:
- takes prior state
- applies transactions
- produces new state

---

# 📁 Folder Structure for Phase 0

Place all work under:

```
/projects/phase_0/
    project_0_1_command_line/
    project_0_2_hash_visualizer/
    project_0_3_state_machine/
    project_0_main_knowledge_graph/
```

---

# 🛠️ Micro-Projects (With Purpose Mapping)

Each micro-project includes:
- Skill it teaches
- Future dependency (what later phase requires it)
- Why it's essential

---

## Project 0.1 — Command Line Explorer

**Folder:**
```
/projects/phase_0/project_0_1_command_line/
```

**Purpose:**
To reduce friction when using tools. Engineering requires constant use of CLI.

**Skills Learned:**
- navigation
- file operations
- searching
- viewing logs
- interpreting errors

**Dependencies (future):**
- Needed for Git in all phases
- Needed for Node scripts (Phase 1)
- Required for Hardhat (Phase 5)

**Task:**
Create a Markdown file documenting 20 essential CLI commands:
- what they do
- how they work
- example usage

---

## Project 0.2 — Hash Function Visualizer

**Folder:**
```
/projects/phase_0/project_0_2_hash_visualizer/
```

**Purpose:**
Hands-on understanding of hashing → crucial for Web3.

**Skills Learned:**
- Node.js basics
- hashing
- CLI argument parsing

**Dependencies (future):**
- Phase 2.5 (Merkle trees)
- Phase 5 (transaction hashes)
- Phase 6 (on-chain data referencing)

**Task:**
Implement a script:

```javascript
const crypto = require("crypto");

const input = process.argv[2];
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(`Input: ${input}`);
console.log(`Hash: ${hash}`);
```

Document:
- avalanche effect
- hash uniqueness
- use cases

---

## Project 0.3 — State Machine Model

**Folder:**
```
/projects/phase_0/project_0_3_state_machine/
```

**Purpose:**
Start thinking in terms of state + transitions, not just code.

**Skills Learned:**
- modeling
- valid/invalid transitions
- system boundaries

**Dependencies (future):**
- Phase 1: JS control flow
- Phase 3: async systems
- Phase 5: smart contract state management

**Task:**
Build a simple state machine in JavaScript. Choices:
- traffic light
- login flow
- vending machine
- character states

---

# 🏗️ Main Project — Personal Knowledge Graph (CLI)

**Folder:**
```
/projects/phase_0/project_0_main_knowledge_graph/
```

**Purpose:**
To model relationships between ideas — preparing you for:
- graph structures
- data modeling
- abstraction
- conceptual design

**Skills Learned:**
- JSON storage
- CLI tools
- linking concepts
- basic data modeling

**Dependencies (future):**
- Phase 2: TypeScript interfaces
- Phase 2.5: database schema design
- Phase 3: system modeling
- Phase 6: designing full apps

**Requirements:**
- add concept
- describe concept
- link concepts
- list concepts
- show neighbors

**Stretch Features:**
- hash each node
- timestamps
- export graph

---

# 🔁 Monthly Spiral Review (ND-Friendly)

At end of month:
1. Extend the hash visualizer
2. Redo the state machine from scratch
3. Practice 10 CLI commands from memory
4. Add 3 reflections
5. Reorganize notes → meaning-making
6. Revisit Turing-machine analogy with fresh understanding

---

# 📝 Reflection Prompts

Record in:
```
/docs/support/reflections.md
```

**Prompts:**
- What part of computation clicked most?
- What confused you about hashing?
- How do state machines show up in real life?
- What parts of the terminal feel natural?
- How does Church–Turing change your view of programming?
- Where did Web3 concepts connect to computation?

---

# ✅ Completion Criteria

You are ready for Phase 1 when:
- You can explain hashing, signatures, state, and Turing machines
- You completed all micro-projects
- You created the knowledge graph CLI
- You wrote at least two reflections
- You can confidently navigate the terminal
- You understand computation without code

---

## ✔ End of Phase 0
