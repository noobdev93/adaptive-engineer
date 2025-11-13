# 🧩 Phase 1 — JavaScript Foundations & Computation in Practice
### Adaptive Learning Curriculum — Phase 1

Phase 1 moves you from **conceptual computation** (Phase 0) into **practical computation** using JavaScript.
The objective is not just to "learn JavaScript," but to understand:

- how programming languages express computation
- how the event loop shapes systems
- how to write, test, and reason about code
- how to build discipline through small, well-structured programs

This phase bridges theory and practice.

---

# 🎯 Learning Goals

## **1. JavaScript Essentials**
- primitives vs objects
- functions + scope
- closures
- control flow (`if`, `for`, `while`)
- arrays and objects
- error handling
- modules and file structure
- console I/O

## **2. Computational Concepts in JS**
- JS as a model of computation
- event loop and concurrency
- call stack
- state transitions in code
- building deterministic functions
- side effects vs purity

## **3. Engineering Workflow**
- Git branching
- commits and version history
- running programs with Node.js
- writing documentation for small programs

## **4. Testing Foundations**
- using Jest
- writing unit tests
- test-driven thinking
- assertions, mocks, fixtures

---

# 📚 Core Resources

### **JavaScript Fundamentals**
- Eloquent JavaScript — Chapters 1–6
  https://eloquentjavascript.net/
- JavaScript.info — The JavaScript Language
  https://javascript.info/
- MDN JavaScript Guide
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

### **JS Execution Model**
- Philip Roberts — *What the heck is the event loop anyway?*
  https://www.youtube.com/watch?v=8aGhZQkoFbQ

### **Testing**
- Jest Documentation
  https://jestjs.io/docs/getting-started

### **Git Workflow**
- Learn Git Branching
  https://learngitbranching.js.org/

---

# 🧠 Key Concepts Reinforced From Phase 0

### **1. Algorithms → Code**
You now write algorithms instead of describing them.

### **2. State Machines → Control Flow**
Your state diagrams now become `if` statements & object updates.

### **3. Turing → Real Machines**
You see how JS maps to formal computation models.

### **4. Hashing → Checksums & Integrity**
You'll hash data (strings, files) in projects.

### **5. Public/Private Keys → Signing**
Later phases deepen this, but JS can already sign/verify.

---

# 📁 Folder Structure for Phase 1

```
/projects/phase_1/
    project_1_1_array_methods/
    project_1_2_closure_practice/
    project_1_3_sorting_visualizer/
    project_1_4_git_workflow_demo/
    project_1_main_task_manager_cli/
```

---

# 🛠️ Micro-Projects (With Purpose Mapping)

---

## **Project 1.1 — Array Method Implementations**

**Folder:**
`/projects/phase_1/project_1_1_array_methods/`

**Purpose:**
Understand data transformation patterns in JS.

**Skills Learned:**
- iteration
- higher-order functions
- callbacks
- custom algorithm implementation

**Dependencies (future):**
- essential for data structures (Phase 2)
- needed for backend transformations (Phase 4)

**Task:** Implement:
- `myMap`
- `myFilter`
- `myReduce`

Write Jest tests for all three.

---

## **Project 1.2 — Closure Practice: Counter Factory**

**Folder:**
`/projects/phase_1/project_1_2_closure_practice/`

**Purpose:**
Closures express information hiding & private state — crucial for understanding scope and abstraction.

**Skills Learned:**
- lexical environment
- private state
- function factories

**Dependencies (future):**
- Phase 2 modules
- Phase 5 contract factories
- secure state in Web3 components

**Task:** Implement:

```javascript
function createCounter() {
  // increment, decrement, value()
}
```

Write tests verifying:
- increment behavior
- decrement behavior
- privacy of internal state

---

## **Project 1.3 — Sorting Algorithm Visualizer**

**Folder:**
`/projects/phase_1/project_1_3_sorting_visualizer/`

**Purpose:**
See computation as a sequence of transformations.

**Skills Learned:**
- loops
- comparisons
- mutation vs immutability
- performance understanding

**Dependencies (future):**
- Phase 2 data structures
- Phase 3 async patterns

**Task:**
Implement:
- bubble sort
- merge sort

Log each step to the console to visualize the intermediate states.

---

## **Project 1.4 — Git Workflow Practice**

**Folder:**
`/projects/phase_1/project_1_4_git_workflow_demo/`

**Purpose:**
Build muscle memory for version control.

**Skills Learned:**
- branching
- merging
- commit messages
- resolving conflicts

**Dependencies (future):**
- required in all future phases

**Task:**
Create a small project and:
- create a feature branch
- commit changes
- merge back
- rewrite commit history with rebase (practice branch only)

---

# 🏗️ Main Project — Task Manager (CLI)

**Folder:**
`/projects/phase_1/project_1_main_task_manager_cli/`

Your first substantial engineering project.

## Purpose

To integrate:
- JS fundamentals
- file I/O
- CRUD logic
- testing
- design thinking

## Core Features
- create task
- view tasks
- update task
- delete task
- mark complete
- persist tasks in JSON
- filter by status

## Design Principles (Ousterhout Seeds)
- keep interfaces simple
- hide internal representation
- modules do one thing well

## Test Requirements
- 80% coverage
- test all operations
- test error cases

## Web3 Extension

Add:
- hash of each task
- digital signature using Node crypto

Demonstrates how state = content + identity.

---

# 🧩 Meta-Skills for This Phase

## 1. Debugging as Epistemology
- read error messages
- use console logging meaningfully
- isolate state changes

## 2. Documentation Habits

Every project should include a README with:
- goals
- what you learned
- how to run it

## 3. Thinking in Interfaces

Even in JS, think:
- "What should this module expose?"
- "What should stay private?"

## 4. Cognitive Load Management (ND-friendly)
- break tasks into sub-steps
- timebox learning sessions
- use checklists
- reflect before closing project

---

# 🔁 Monthly Spiral Review

At end of Phase 1 month:
1. Revisit Phase 0 state machine → rewrite in JS
2. Add more array methods
3. Write tests for earlier Phase 0 projects
4. Document mental models from event loop video
5. Add 3 reflections to `/docs/support/reflections.md`

---

# 📝 Reflection Prompts

Record in:
```
/docs/support/reflections.md
```

**Prompts:**
- What JS concepts felt intuitive vs confusing?
- Where did closures "click"?
- How did testing change the way you write code?
- How does the event loop affect your understanding of computation?
- Which project taught you the most about structuring logic?

---

# ✅ Completion Criteria

You are ready for Phase 2 when:
- You understand JS control flow, functions, and closures
- You can write + test small programs
- You completed the CLI Task Manager
- You understand module boundaries intuitively
- You wrote multiple reflections
- You feel confident reading and writing JS

---

## ✔ End of Phase 1
