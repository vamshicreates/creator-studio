# Creators’ Studio by Ramanaidu (Krackerz Style) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the `creator-studio` React + Vite application to replicate the exact neo-brutalist aesthetic, color palette, and micro-interactions of `krackerz.com` while integrating the full institutional storytelling and cohort content of **Creators’ Studio by Ramanaidu** (`creators-studio-site.vercel.app`).

**Architecture:** Component-driven React 19 architecture with Tailwind CSS v4, Motion (Framer Motion), canvas-confetti, and Lucide icons. All studio content, mentorship data, working lot specs, 12-week curriculum, and FAQs are cleanly decoupled into typed data models. Micro-interactions include continuous ticker marquees, tabbed bento views, Framer Motion draggable stickers, and an interactive admissions modal.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), `canvas-confetti`, `lucide-react`.

**Spec:** `creator-studio/docs/superpowers/specs/2026-10-25-creators-studio-krackerz-design.md`

## Global Constraints

- Background canvas surface must be warm newsprint cream `#F7F6F0` (with `#FEFAE7` and `#EDEBE1` highlights).
- Inks and borders must be deep jet charcoal `#161616` with crisp 2px brutalist borders (`border-2 border-[#161616]`).
- Neo-pop accent colors: Electric Lime `#C8FF2E`, Fiery Vermilion `#F8330B` / `#F26C17`, Periwinkle `#C7CAFF`, Mint Sage `#C0ECBF`, Deep Maroon `#580D14`.
- Exact institution names: "Creators’ Studio by Ramanaidu", "Ramanaidu Studios, Jubilee Hills, Hyderabad", "Melbourne MAMA Creative Space", "D. Suresh Babu", "Rana Daggubati", "Mihika".
- Responsive across mobile (375px+), tablet (768px+), and desktop (1280px+).

## Review Focus

1. *Marquee ticker smooth loop without stutter:* Verify CSS keyframe / flex infinite scroll animation.
2. *Draggable stickers interaction:* Ensure stickers do not jump or get lost off-screen on touch/drag.
3. *Application modal state & submission:* Ensure modal traps/resets properly and confetti fires on valid submit.
4. *Bento tab state switching:* Verify Stage 01, Bay 04, and Room 102 switch correctly on click with active styling.
5. *Clean production build:* Verify `npm run build` succeeds with zero TypeScript errors.

---

### Task 1: Typography, Global Styles, and Theme Configuration
**Files:**
- Modify: `creator-studio/index.html`
- Modify: `creator-studio/src/index.css`

- [ ] **Step 1: Update `index.html` with Krackerz fonts and title**
  - Add Google Fonts for `Geist`, `DM Sans`, and `Space Grotesk`.
  - Update title to `Creators’ Studio by Ramanaidu | Learn to Create Value`.
- [ ] **Step 2: Update `src/index.css` with Krackerz color tokens, ticker keyframes, and utilities**
  - Configure background `#F7F6F0`, text `#161616`, selection color `#C8FF2E`.
  - Add `@keyframes marquee` and `@keyframes marquee-reverse` for continuous banner ribbons.
- [ ] **Step 3: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 2: Type Definitions and Ramanaidu Studio Content Data Layer
**Files:**
- Create: `creator-studio/src/types/studio.ts`
- Create: `creator-studio/src/data/studioContent.ts`

- [ ] **Step 1: Define TypeScript interfaces in `src/types/studio.ts`**
  - `MentorProfile`, `MasterclassItem`, `LotEnvironment`, `CurriculumWeek`, `CurriculumPhase`, `AdmissionsProfile`, `FAQItem`, `StickerItem`.
- [ ] **Step 2: Populate `src/data/studioContent.ts` with authentic Ramanaidu & Melbourne MAMA content**
  - 60 Years heritage monograph by D. Suresh Babu.
  - 3 Lot environments (Stage 01, Bay 04, Room 102).
  - Mentors (D. Suresh Babu, Rana Daggubati, Mihika) & 5 Masterclasses (Abhigna, Kaushik, Vamsi, Dedeepya, Ajay).
  - 3 Value pillars (Fundamentals, Ideology, Monetisation).
  - 12-week curriculum across 4 phases with weekly games (*The ₹1 Lakh Creator Challenge*).
  - 3 Admissions profiles, key cohort dates, and 12 FAQ items.
- [ ] **Step 3: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 3: Announcement Bar, Sticky Navigation, and Hero Section
**Files:**
- Create: `creator-studio/src/components/AnnouncementBar.tsx`
- Create: `creator-studio/src/components/Navbar.tsx`
- Create: `creator-studio/src/components/Hero.tsx`

- [ ] **Step 1: Implement `AnnouncementBar.tsx`**
  - Scrolling ribbon: `ISSUE 01 // COHORT ADMISSIONS OPEN • RAMANAIDU STUDIOS, HYDERABAD • ZERO UPFRONT COST • APPLY FIRST, PAY AFTER SELECTION`.
- [ ] **Step 2: Implement `Navbar.tsx`**
  - Warm cream container with 2px black border, Ramanaidu Studios badge, menu links, WhatsApp button, and `APPLY FOR COHORT 01` pill button.
  - Mobile responsive drawer with toggle menu.
- [ ] **Step 3: Implement `Hero.tsx`**
  - Eyebrow badge: `RAMANAIDU STUDIOS • 60 YEARS OF CINEMA MEETS THE CREATOR BOOM`.
  * Staggered high-contrast headline:
    `FOR THE CRAFT THEY don't TEACH IN FILM SCHOOLS`
  * Action buttons + Infinite Marquee Ticker with pastel tag chips.
- [ ] **Step 4: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 4: Monograph Section, Contrast Bento, and Working Lot Interactive Environments
**Files:**
- Create: `creator-studio/src/components/MonographSection.tsx`
- Create: `creator-studio/src/components/WorkingLotBento.tsx`

- [ ] **Step 1: Implement `MonographSection.tsx`**
  - D. Suresh Babu quote and archival stamp: *“Hence we have pioneered a curriculum in content creation for the new age digitalpreneurs.”*
  - Split contrast cards: `COLLEGES TAUGHT SOCIAL MEDIA THEORY` vs `RAMANAIDU TEACHES PRODUCTION VALUE`.
- [ ] **Step 2: Implement `WorkingLotBento.tsx`**
  - Tabbed interactive bento for Stage 01 (Soundstage), Bay 04 (DaVinci Post Suite), and Room 102 (Writers' Room & Story Lab).
  - Technical equipment specs: Sony FX cinema rigs, Shure SM7B audio, Dual Scopes, DaVinci & Premiere, Storyboards.
- [ ] **Step 3: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 5: Mentors, Masterclasses, and 3 Value Pillars
**Files:**
- Create: `creator-studio/src/components/MentorsSection.tsx`
- Create: `creator-studio/src/components/PhilosophyPillars.tsx`

- [ ] **Step 1: Implement `MentorsSection.tsx`**
  - Direct Mentorship cards for D. Suresh Babu, Rana Daggubati, and Mihika with bold Krackerz borders and tags.
  - 5 Working Creator Masterclass cards (Abhigna Vuthuluri, Kaushik K, Vamsi Kurapati, Dedeepya Abbagani, Ajay @ Aye Jude).
- [ ] **Step 2: Implement `PhilosophyPillars.tsx`**
  - 3 Core Pillars: Pillar 01 Fundamentals, Pillar 02 Ideology, Pillar 03 Monetisation.
  - Direct vs Indirect monetization breakdown.
- [ ] **Step 3: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 6: 12-Week Curriculum Sprint and Interactive Draggable Sticker Canvas
**Files:**
- Create: `creator-studio/src/components/CurriculumSprint.tsx`
- Create: `creator-studio/src/components/DraggableStickerCanvas.tsx`

- [ ] **Step 1: Implement `CurriculumSprint.tsx`**
  - 4 Phases breakdown with expandable week details, practical exercises, and "Game of the Week" cards (*The ₹1 Lakh Creator Challenge*).
- [ ] **Step 2: Implement `DraggableStickerCanvas.tsx`**
  - Interactive "Work in Style / Drag the stickers to brand your desk" canvas with Framer Motion `drag` and spring physics.
  - Draggable sticker badges: `60 YRS CINEMA`, `STAGE 01`, `STORY > HYPE`, `DAVINCI SUITE`, `ZERO UPFRONT`, `NO CRINGE CONTENT`, `GUINNESS LOT`.
- [ ] **Step 3: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 7: Admissions Profiles, Tuition Cards, FAQ Accordion, Final CTA, and Footer
**Files:**
- Create: `creator-studio/src/components/AdmissionsProfiles.tsx`
- Create: `creator-studio/src/components/AdmissionsPricing.tsx`
- Create: `creator-studio/src/components/FAQSection.tsx`
- Create: `creator-studio/src/components/FinalCTA.tsx`
- Create: `creator-studio/src/components/Footer.tsx`

- [ ] **Step 1: Implement `AdmissionsProfiles.tsx`**
  - Profiles for Aspiring Creators, Working Creators, Business Owners + Cohort 01 Key Dates timeline.
- [ ] **Step 2: Implement `AdmissionsPricing.tsx`**
  - "Apply First, Pay After Selection" model cards styled in Krackerz pricing layout.
- [ ] **Step 3: Implement `FAQSection.tsx`**
  - Neo-brutalist expandable accordion with all 12 questions and answers.
- [ ] **Step 4: Implement `FinalCTA.tsx` & `Footer.tsx`**
  - Giant punchy bottom banner (`BE THE FIRST TO KRACK COHORT 01`) + retro-brutalist footer.
- [ ] **Step 5: Verify build**
  - Run `npm run build` in `creator-studio`.

---

### Task 8: Application Modal, App Assembly, and End-to-End Verification
**Files:**
- Create: `creator-studio/src/components/ApplicationModal.tsx`
- Modify: `creator-studio/src/App.tsx`

- [ ] **Step 1: Implement `ApplicationModal.tsx`**
  - Modal with form: Name, Email, WhatsApp Phone, Creator Profile, Portfolio Link, Goal.
  - Fires `canvas-confetti` upon submission, shows confirmation message and direct WhatsApp link.
- [ ] **Step 2: Assemble in `App.tsx`**
  - Wire all sections with smooth-scroll navigation IDs.
- [ ] **Step 3: Run comprehensive verification**
  - Run `npm run build` in `creator-studio`.
  - Test responsiveness, interactive tabs, ticker animation, drag-and-drop, and application flow.
