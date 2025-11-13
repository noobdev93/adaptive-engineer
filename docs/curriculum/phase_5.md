# 🧱 Phase 5 — Smart Contracts, EVM, Solidity & dApp Integration

Phase 5 introduces **blockchain computation** as a real engineering environment.

By the end of this phase, you will be able to:
- write secure Solidity smart contracts
- understand how the EVM executes code
- work with ABI, gas, storage, transactions
- build a backend that reads blockchain state
- build a frontend that interacts with a wallet
- design minimal, clean on-chain/off-chain boundaries
- understand Web3 security fundamentals

This phase transitions you from a backend engineer → to a developer who can build decentralized applications.

---

# 🎯 Learning Goals

### **1. Understand Blockchain as a Computational System**
Develop an engineer's mental model of:
- blocks
- transactions
- state transitions
- consensus
- deterministic execution
- account model (EOA vs Contract)
- gas as computational cost
- eventual finality

---

### **2. Solidity Fundamentals**
Learn:
- contract structure
- state variables
- functions & visibility
- mappings, arrays, structs
- events
- modifiers & access control
- revert/require/assert
- inheritance & interfaces

---

### **3. EVM Execution Model**
Understand:
- stack machine
- storage trie
- calldata vs memory
- gas usage patterns
- storage vs computation tradeoffs
- how the EVM handles errors and reverts

---

### **4. Smart Contract Security Foundations**
Know and identify:
- reentrancy
- access control bugs
- tx.origin abuse
- signature replay
- integer overflow/underflow
- denial-of-service patterns
- frontrunning / MEV basics

---

### **5. Hardhat & Ethers.js**
Learn:
- compiling contracts
- local blockchain network
- unit testing (Mocha + Chai)
- deployment scripts
- contract interaction scripts

---

### **6. Reducing On-Chain Complexity**
Master the principle:
> Put only what *must* be decentralized on-chain.
> Everything else belongs in your backend.

This is essential for real-world dApp development.

---

### **7. Building Full dApp Architecture**
Learn:
- wallet connection (MetaMask)
- sending transactions
- listening for events
- backend indexing
- caching chain data in a database
- frontend display of on-chain state

---

# 📚 Core Resources

### **Blockchain & Ethereum**
- Ethereum Whitepaper
  https://ethereum.org/en/whitepaper/
- Mastering Ethereum (selected chapters)
  https://github.com/ethereumbook/ethereumbook

### **Solidity**
- Solidity Docs
  https://docs.soliditylang.org/
- Solidity by Example
  https://solidity-by-example.org/
- CryptoZombies (optional, gamified)
  https://cryptozombies.io/

### **Tools**
- Hardhat
  https://hardhat.org/
- Ethers.js
  https://docs.ethers.org/v6/

### **Security**
- ConsenSys Smart Contract Security Best Practices
  https://consensys.github.io/smart-contract-best-practices/
- SWC Registry
  https://swcregistry.io/
- Secureum Bootcamp (optional)
  https://secureum.substack.com/

---

# 📁 Folder Structure

```
/projects/phase_5/
    project_5_1_erc20/
    project_5_2_multisig/
    project_5_3_vulnerable_contracts/
    project_5_4_gas_optimization/
    project_5_main/
```

---

# 🛠️ Micro-Projects

## **Project 5.1 — ERC-20 Token (From Scratch)**
Implement:
- balances mapping
- transfer
- approve/allowance
- events
- total supply

Test thoroughly.

**Outcome:**
Deep understanding of mappings, events, and state updates.

---

## **Project 5.2 — Multi-Signature Wallet**
Features:
- owners list
- submit transaction
- approve transaction
- execute after threshold
- events

**Outcome:**
Understanding of access control & coordinated signatures.

---

## **Project 5.3 — Vulnerable Contract Challenge**
Fix and explain vulnerabilities in:
- reentrancy
- access control
- frontrunning
- denial of service

**Outcome:**
Security awareness becomes instinctive.

---

## **Project 5.4 — Gas Optimization Drills**
Take provided slow contracts and optimize:
- storage packing
- caching storage variables
- minimizing redundant calls
- using events instead of storage where possible

**Outcome:**
Gas intuition.

---

# 🏗️ Main Project — Phase 5
## **Decentralized Task Manager (Full dApp)**

This is the on-chain analog of your earlier projects.

### **Smart Contract**
Features:
- per-user tasks stored on-chain
- create, update, complete, delete
- events for all actions
- mapping user → tasks
- access control (msg.sender)
- optional: NFT badges for milestones

### **Backend (Node.js + PostgreSQL)**
- listen to contract events
- sync tasks to Postgres
- provide fast read-only API
- handle pagination, search
- structured logging & observability

### **Frontend (React + TypeScript)**
- connect wallet (MetaMask)
- display user tasks
- send transactions
- show pending/confirmed status
- fallback to backend for indexing

**Critical Skill:**
Knowing what belongs on-chain vs off-chain.

---

# 🌐 Mini Web3 Extensions (Optional but Recommended)

### **Extension A — IPFS for Decentralized Storage**
- upload large task descriptions to IPFS
- store only the hash on-chain

### **Extension B — Gas Simulation UI**
- estimate gas before sending transactions
- display breakdown

### **Extension C — Role-Based Access Contracts**
- admin roles
- feature toggles
- pausable contract logic

---

# 🧠 ND-Friendly Strategies

- chunk the EVM model into small metaphors
- use visual diagrams for contract storage
- keep a "Solidity patterns" notes file
- draw transaction lifecycle diagrams
- implement and test before optimizing
- reflect after each bug found

---

# 🔁 Monthly Spiral Review
Choose 2–3:
- rewrite an earlier contract using better patterns
- analyze gas usage on a previous project
- diagram how your backend syncs chain state
- refactor a contract with improved access control
- rewrite tests for clarity and coverage

---

# 📝 Reflection Prompts
- What surprised me about contract execution?
- What part of on-chain/off-chain separation was hardest?
- How did gas influence my architecture choices?
- What security issues did I identify instinctively this month?

---

# 🎓 Completion Criteria
You are ready for Phase 6 when you can:
- write secure, well-structured Solidity contracts
- test contracts thoroughly
- interact with contracts from backend & frontend
- build clean dApp architecture
- design on-chain/off-chain boundaries
- understand the EVM execution model
- reason about gas, storage, and state transitions

If you can do these, you're ready for the **full-stack capstone**.

---

# ✔ End of Phase 5
