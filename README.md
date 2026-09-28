# 🛡️ ARAKSHA — SURAKSHA-AR

## AR-Based Vocational Training Simulator for Industrial Safety

> **Learn Safety. Practice Safely. Work Confidently.**

**Team ARAKSHA** presents **SURAKSHA-AR**, an Augmented Reality based vocational safety training simulator designed to improve industrial safety awareness and practical learning for workers in Jharkhand's mining and manufacturing sectors.

---

## 👥 Team ARAKSHA

| Role | Name |
|---|---|
| 👑 Team Leader | **Shrijan Kumar** |
| 👨‍💻 Member | **Shreya Kumari** |
| 👩‍💻 Member | **Anjali Kumari** |
| 👨‍💻 Member | **Vivek Kumar Rana** |
| 👩‍💻 Member | **Preety Agarwal** |
| 👨‍💻 Member | **Gambhir Kumar** |

---

# 🎯 Problem Statement

### AR-Based Vocational Training Simulator for Industrial Safety in Jharkhand's Mining & Manufacturing Sector

Jharkhand has major mining and manufacturing industries, including coal mining, steel production and mineral processing.

Workers, particularly new and young recruits, may have limited practical exposure to industrial hazards before entering real workplaces.

Traditional safety training commonly depends on:

- Classroom lectures
- Static manuals
- Posters and diagrams
- Videos
- Theoretical assessments

These methods may not provide sufficient opportunities for learners to practice recognizing hazards and making decisions in realistic situations.

---

# 💡 Our Solution

**SURAKSHA-AR** transforms safety training into an interactive mobile learning experience.

Instead of only reading about hazards, trainees can interact with simulated safety scenarios and demonstrate their understanding through tasks and assessments.

The platform combines:

📱 Mobile learning  
🥽 Augmented Reality  
🔥 Fire safety simulation  
🛢️ Gas leak & confined-space awareness  
📝 Interactive assessments  
📊 Performance tracking  
📜 Digital certification  
🔗 QR-based verification  
🧑‍💼 Admin monitoring

---

# 🚀 Core Features

## 🌐 1. Multilingual Training

The platform is designed for multilingual safety education.

### Languages

- 🇬🇧 English
- 🇮🇳 Hindi
- 🟢 Santali

Regional-language support is intended to make safety concepts easier to understand for diverse groups of workers.

---

# 👥 2. Worker & Admin Roles

After language selection, the user can choose between two roles.

### 👷 Worker

Workers can:

- Access safety training
- Complete AR simulations
- Perform interactive tasks
- Attempt assessments
- View scores
- Obtain digital certificates

### 🧑‍💼 Admin

Administrators can:

- Log in securely
- Monitor workers
- Track training progress
- View assessment performance
- Monitor certificates
- View training statistics

---

# 🔥 3. Fire & Explosion Response

The Fire Safety module provides an interactive simulated workplace environment.

The learner is guided through safety-related tasks such as:

- Identifying a fire hazard
- Recognizing appropriate safety equipment
- Identifying a safe exit
- Following an emergency-response sequence
- Completing a safety assessment

The objective is to help learners understand safety decisions in a controlled training environment.

---

# 🛢️ 4. Gas Leak & Confined Space

The second major training scenario focuses on hazards associated with gas leaks and confined spaces.

Learners can practice:

- Identifying hazard zones
- Recognizing required PPE
- Identifying unsafe actions
- Understanding buddy-system concepts
- Following safe-response procedures
- Completing an assessment

---

# 🥽 AR Training Experience

The AR component uses a smartphone camera to provide an interactive simulated environment.

### AR Experience

```text
        📱 Smartphone Camera
                │
                ▼
       ┌─────────────────┐
       │   AR Environment │
       └────────┬────────┘
                │
       ┌────────▼────────┐
       │ Identify Hazard │
       └────────┬────────┘
                │
       ┌────────▼────────┐
       │ Perform Task    │
       └────────┬────────┘
                │
       ┌────────▼────────┐
       │ Safety Decision │
       └────────┬────────┘
                │
                ▼
            Assessment

The AR experience is designed for smartphones and does not require an external VR headset.


---

📱 Complete Worker Journey

┌─────────────────────┐
│   Launch SURAKSHA-AR│
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  Select Language    │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│   Select Role       │
│ Worker / Admin      │
└──────────┬──────────┘
           │
           ▼
      👷 WORKER
           │
           ▼
┌─────────────────────┐
│ Select Training     │
│ Module              │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ AR Safety Scenario  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Interactive Tasks   │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Safety Assessment   │
└──────────┬──────────┘
           ▼
        📊 SCORE
           │
       ┌───┴───┐
       ▼       ▼
    PASS      RETRY
       │       │
       ▼       └──────► Training
       │
       ▼
📜 Certificate
       │
       ▼
🔗 QR Verification


---

🧑‍💼 Admin Dashboard

The Admin Dashboard provides a centralized view of training activity.

Dashboard Information

👷 Total workers

✅ Completed training

⏳ In-progress training

📊 Assessment scores

📈 Pass rate

📜 Certificates issued

🧑 Worker training records

📚 Module completion

📝 Assessment results


📝 Assessment System

After completing a training scenario, the learner can attempt an interactive assessment.

The system can record:

Questions attempted

Correct answers

Incorrect answers

Total score

Completion status

Pass/retry status


A configurable passing threshold can be used for certification.


---

📜 Digital Certification

Successful completion of a training module can generate a digital certificate.

Certificate Flow

Training
   ↓
Assessment
   ↓
Passing Score
   ↓
Certificate Generated
   ↓
QR Code
   ↓
Verification Page

The QR code provides a convenient way to verify certificate information digitally.


---

🏗️ System Architecture

┌──────────────────────┐
                 │     SURAKSHA-AR      │
                 └──────────┬───────────┘
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
      👷 WORKER APP                 🧑‍💼 ADMIN
             │                             │
      ┌──────┴──────┐              ┌───────┴───────┐
      │             │              │               │
   Training       AR Module     Dashboard      Analytics
      │             │              │               │
      └──────┬──────┘              └───────┬───────┘
             │                             │
             └──────────────┬──────────────┘
                            ▼
                   ┌─────────────────┐
                   │ Backend / APIs  │
                   └────────┬────────┘
                            ▼
                   ┌─────────────────┐
                   │ Training Data   │
                   │ Assessments     │
                   │ Certificates    │
                   └─────────────────┘


---

🧰 Technology Stack

Frontend

React

JavaScript / TypeScript

HTML5

CSS

Responsive UI


AR

Unity

AR Foundation

Mobile AR


Backend

Application backend

APIs

Authentication

Training data management

Assessment management

Certificate management


Development & Version Control

Git

GitHub



---

📂 Project Structure

SURAKSHA-AR/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   └── ...
│
├── tests/
│   └── ...
│
├── test_reports/
│   └── ...
│
├── memory/
│   └── ...
│
├── .emergent/
│   └── ...
│
├── .gitignore
├── README.md
└── design_guidelines.json

> Project structure may evolve during development.




---

🎯 MVP Scope

The MVP focuses on demonstrating the complete safety-training journey.

Implemented / Demonstrated

[✔️] Language selection

[✔️] Worker/Admin role selection

[✔️] Worker training flow

[✔️] Admin login

[✔️] Admin dashboard

[✔️] Fire safety scenario

[✔️] Gas leak / confined-space scenario

[✔️] Interactive tasks

[✔️] Assessment

[✔️] Score calculation

[✔️] Pass/retry flow

[✔️] Digital certificate

[✔️] QR verification concept

[✔️] GitHub version control



---

🔮 Future Scope

SURAKSHA-AR can be expanded with:

🎙️ Voice-guided safety instructions

🗣️ More regional languages

🥽 Advanced AR interactions

🔥 Additional fire scenarios

🏭 Manufacturing safety modules

⛏️ Mining-specific safety modules

🧪 Chemical safety training

⚡ Electrical safety training

📊 Advanced analytics

☁️ Cloud synchronization

🏢 Organization-level dashboards

📡 Offline-first synchronization

🏆 Gamification and learning achievements



🔐 Security Considerations

Sensitive information must not be hard-coded into the application.

Examples include:

Passwords

API keys

Authentication secrets

Database credentials

Private tokens


Environment variables and secure configuration should be used for sensitive information.

.env files containing secrets should not be committed to GitHub.


---

🧪 Testing Checklist

Worker

[✔️] Language selection

[✔️] Role selection

[✔️] Training navigation

[✔️] AR module loading

[✔️] AR interaction

[✔️] Task completion

[✔️] Assessment

[✔️] Score calculation

[✔️] Pass/retry

[✔️] Certificate generation

[✔️] QR verification


Admin

[✔️] Admin login

[✔️] Invalid login handling

[✔️] Dashboard loading

[✔️] Worker records

[✔️] Training statistics

[✔️] Assessment results

[✔️] Certificate information


Mobile

[✔️] Camera permissions

[✔️] Touch interaction

[ ] Different screen sizes

[✔️] AR compatibility

[ ] Network/offline behavior



---

🏆 Hackathon Demo Flow

For the final demonstration, the recommended flow is:

Launch App
     ↓
Select Language
     ↓
Select Worker
     ↓
Start Training
     ↓
Fire Safety AR Scenario
     ↓
Complete Safety Tasks
     ↓
Assessment
     ↓
Score
     ↓
Certificate
     ↓
QR Verification
     ↓
Return to Role Selection
     ↓
Admin Login
     ↓
Admin Dashboard

This demonstrates both sides of the platform:

Worker Safety Training + Administrative Monitoring


---

⚠️ Safety Disclaimer

SURAKSHA-AR is an educational and hackathon prototype.

It does not replace certified industrial safety training, site-specific emergency procedures, professional safety officers, employer safety protocols, government regulations or formal risk assessments.

Actual industrial operations must always follow applicable safety standards and authorized procedures.


---

👥 Team ARAKSHA

Team Leader

Shrijan Kumar

Team Members

Shreya Kumari

Anjali Kumari

Vivek Kumar Rana

Preety Agarwal

Gambhir Kumar



---

🛡️ ARAKSHA

SURAKSHA-AR

Learn Safety. Practice Safely. Work Confidently.

AR-Based Vocational Training Simulator for Industrial Safety in Jharkhand's Mining & Manufacturing Sector


---

⭐ Built with the vision of making industrial safety training more interactive, accessible and practical.
