## My name is Pavel Prokhorenko ([LinkedIn](https://www.linkedin.com/in/pavel-prokhorenko-a3273828/))

- I'm a JS/TS full-stack engineer based in Thailand, remote-first for 12+ years
- I did hundreds of projects for Russian Railways in 2011-2026
- [High-load](#high-load-ticket-platform-migration), [frontend](#rzdru-administrative-app), [backend](#backend-services) and [desktop](#electron-desktop-app) - it's about me :-)

---

## Table of Contents

- [Main Stack](#main-stack)
- [Projects & Achievements](#projects--achievements)
  - [High-Load Ticket Platform Migration](#high-load-ticket-platform-migration)
  - [RZD.ru Administrative App](#rzdru-administrative-app)
  - [Electron Desktop App](#electron-desktop-app)
  - [Metadata Migration & Architecture](#metadata-migration--architecture)
  - [Advanced Kanban App](#advanced-kanban-app)
  - [Other Notable Work](#other-notable-work)
- [AI Tools](#ai-tools)
- [My Priorities](#my-priorities)
- [Other Skills](#other-skills)
- [About Me](#me)

---

## Main Stack

- <b>Backend:</b> ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) (since 2016)
- <b>Frontend:</b> ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white) (since 2016)
- <b>Desktop:</b> ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white) (since 2018)

---

## Projects & Achievements

### High-Load Ticket Platform Migration

<img loading="lazy" src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js" />

**Critical frontend migration of high-load ticket platform**

- **Scale:** ~150K paid tickets per day (~6000/hour), 20+ million visits per month
- **Migration:** Custom jQuery-based framework → Vue 2
- **Impact:** My framework selection in 2017 became the company-wide standard
- **Complexity handled:**
  - Thousands of stations across 11 timezones
  - Intercity, international, and commuter trains
  - Tens of extra services
  - 3 languages support
  - Complex business logic implemented in frontend via JS and [metadata](#metadata-migration--architecture)-driven server templates

> *Note: Ticket sales operations have since been transferred to another company; Git history remains as proof.*

---

### RZD.ru Administrative App

<img loading="lazy" src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js" />

**Modern replacement for legacy administrative interface**

- **Before:** JSP-based IBM WebSphere stateful app (built by Java developers)
- **After:** Modern async Vue.js application
- **Architecture:** Dynamic component rendering based on declarative [metadata](#metadata-migration--architecture)
- **Result:** Significantly improved performance and developer experience

<details class="details-mar">
<summary>Screenshots</summary>
<p>News ARM (list with filter)</p>
<img loading="lazy" src="./assets/images/uarm-screens/uarm-news-1.png" alt="uarm screenshot" class="image-mar" />
<p>News ARM (record card)</p>
<img loading="lazy" src="./assets/images/uarm-screens/uarm-news-2.jpg" alt="uarm screenshot" class="image-mar" />
<p>Nav ARM (list with filter)</p>
<img loading="lazy" src="./assets/images/uarm-screens/uarm-nav-1.png" alt="uarm screenshot" class="image-mar" />
<p>Nav ARM (record card)</p>
<img loading="lazy" src="./assets/images/uarm-screens/uarm-nav-2.png" alt="uarm screenshot" class="image-mar" />
</details>

---

### Electron Desktop App

<img loading="lazy" src="https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white" alt="Electron" />

**Complex internal desktop application (Windows/Mac/Linux)**

**Key Features:**
- [Metadata](#metadata-migration--architecture) editors
- Advanced [metadata](#metadata-migration--architecture) lists with filtering (including JSONPath support)
- Database connectivity (Oracle, PostgreSQL)
- SSH/SFTP operations
- Multi-repository structure with integrated [admin web-app](#rzdru-administrative-app)

<details class="details-mar">
<summary>Screenshots</summary>
<img loading="lazy" src="./assets/images/wizard-screens/arms/list.png" alt="wizard screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wizard-screens/arms/ed-1.png" alt="wizard screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wizard-screens/arms/ed-4.png" alt="wizard screenshot" class="image-mar" />
</details>

---

### Metadata Migration & Architecture

**Declarative system for administrative and user-facing interfaces**

The metadata system defines two formats for:
- **Administrative Forms** (1000+): Database-driven CRUD interfaces
- **User-Facing Pages** (500+): Data-fetching layer and component composition

<details class="details-mar">
<summary>Metadata for <i>Administrative Forms</i></summary>

<p>
Our metadata files are declarative JSON descriptors that define the full lifecycle of an administrative interface (ARM) — from the underlying database table(-s) to the UI behavior in the browser.
</p>

<p>
This eliminates repetitive CRUD boilerplate while maintaining consistency across 1000+ forms.
</p>

<p>
Each descriptor maps database columns (or cross-table relations) to field definitions specifying behavior across three contexts:
<ul>
<li>
<b>List view</b>
<ul>
<li>Filtering</li>
<li>List itself (display, sorting, editing records on-the-fly)</li>
</ul>
</li>
<li><b>Form view</b> (create, edit of one record)</li>
</ul>
</p>

<p>
Each form field can have different control types in all three contexts, each with its own parameters like validation or defaults or custom template.
Some control type examples:
<ul>
<li>Input (text, integer, float, email etc) or Textarea</li>
<li>Dropdown (incl. async search), Popup Picker, both can be used for multi-record selection</li>
<li>Date with or without time, in Filter context can be used as range</li>
<li>Map or address picker (geocoder)</li>
<li>Charts editor</li>
<li>...and some more</li>
</ul>
</p>


</details>

<details class="details-mar">
<summary>Metadata for <i>User-Facing Pages</i></summary>

<p>These page metadata files define the complete HTML page or data-fetching layer (JSON-driven), eliminating custom backend code for each page (total: 500+ pages).</p>

<b>Components</b> are granular building blocks that:
<ul>
<li>List exact fields to select</li>
<li>Designate primary keys</li>
<li>Define relations (one-to-one, one-to-many)</li>
<li>Handle pagination and filtering</li>
</ul>


</details>

**Architecture Evolution:**
- **Before:** Two quirky XML formats with numerous workarounds and hacks
- **After:** Two elegant, maintainable JSON structures with reduced overhead
- **Developed:**
  - Conversion scripts for both formats
  - Format editors for both formats in [Electron App](#electron-desktop-app)
  - [Administrative front-end app](#rzdru-administrative-app)

---

### Advanced Kanban App

<img loading="lazy" src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js" />

**Enterprise-grade project management frontend**

**Adoption & Scale:**
- Adopted company-wide: 70+ users migrated
- Deployed at Russian University of Transport: 200+ users

**Features:**
- Drag-and-drop Kanban boards
- Custom workflow configurations
- Custom issue fields
- Issue linking and file attachments
- Custom WYSIWYG JSON editor (built on TipTap/ProseMirror)



<details class="details-mar">
<summary>Screenshots</summary>
<img loading="lazy" src="./assets/images/wflow-screens/list.png" alt="wflow screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wflow-screens/card_1.png" alt="wflow screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wflow-screens/card_2.png" alt="wflow screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wflow-screens/card_3.png" alt="wflow screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wflow-screens/card_4.png" alt="wflow screenshot" class="image-mar" />
<img loading="lazy" src="./assets/images/wflow-screens/col_edit.png" alt="wflow screenshot" class="image-mar" />
</details>

---

### Other Notable Work

#### Backend Services

<img loading="lazy" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />

- 5+ services
- Express.js, PostgreSQL, Kafka, Elasticsearch
- Microservices architecture with scalable design

#### Custom NPM Packages

<img loading="lazy" class="badge-mar" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white" alt="NPM" />
<img loading="lazy" class="badge-mar" src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js" />
<img loading="lazy" class="badge-mar" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />

- 10+ packages
- Reusable Vue components and Node utilities
- Used across multiple company projects

#### TypeScript Migrations & Coverage

<img loading="lazy" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /> 

- Large-scale codebase modernization
- Type safety improvements

#### Infrastructure & DevOps

<img loading="lazy" alt="Vite" class="badge-mar" src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" />
<img loading="lazy" alt="Rollup" class="badge-mar" src="https://img.shields.io/badge/Rollup-EC4A3F?style=flat&logo=rollup.js&logoColor=white" />
<img loading="lazy" alt="Webpack" class="badge-mar" src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=white" />
<img loading="lazy" alt="Docker" class="badge-mar" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" />
<img loading="lazy" alt="GitLab" class="badge-mar" src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=gitlab&logoColor=white" />

- Complex build pipelines: Vite, Rollup, Webpack
- Docker containerization
- GitLab CI/CD

#### Testing

<img loading="lazy" alt="Jest" class="badge-mar" src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white" />
<img loading="lazy" alt="Cypress" class="badge-mar" src="https://img.shields.io/badge/Cypress-69D3A7?style=flat&logo=cypress&logoColor=white" />

- Unit & E2E tests
- Jest for backend
- Cypress for frontend and Electron

---

## AI Tools

### Tools & Platforms
Don't like to be vendor-locked :-) so...
- VSCode with Continue, sometimes Antigravity
	- LLMs like Grok, Claude, Gemini, DeepSeek, GPT
- Openrouter with system query presets
- Deepseek (expert+thinking) for complex chat questions

### How do I use AI tools

**Chat, questions & suggestions** — Sure

**Code:**
- Build issues, tests, personal PoCs, scripts
- Exploration and rapid prototyping
- **Production code:**
	- Generally prefer hand-tailored code only with AI suggestions
	- Excited about Specification Driven Development (SDD) approach ([Openspec](https://openspec.dev/))

**Boilerplate documentation** — Sure

**Other documentation** — It depends

**General text writing** — Rarely (prefer original style)

---

## My Priorities

- **Teamwork ❤︎** — Collaborating, constantly learning while sharing knowledge with others
- **Building solutions** — Either maintainable apps for years ahead OR quick PoC/MVPs
- **Balance** — Business purposes (first priority), developer experience, and managing tech debt

---

## Other Skills

**Enterprise Stack** (legacy experience)
- Java, Oracle, IBM WebSphere, JSP, XSLT templates

**Mobile & Web**
- PWA development
- Quasar, Weex
- Interest in native Vue solutions (Lynx.js by ByteDance)

---

## Me

<img loading="lazy" width="200" src="./assets/images/profile_photo.jpg" alt="" align="left" style="margin: 0 2em .5em 0;">

- <b>Languages:</b> English (fluent), Russian (native), Deutsch & Français (rusty from university days :-))
- <b>Location & Work:</b> Remote from Asia for 12+ years

<!-- <table>
  <tr>
    <td width="200" style="padding-right: 20px; vertical-align: top;">
      <img loading="lazy" align="left" width="200" src="./assets/images/profile_photo.jpg"/>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li>
          <b>Languages:</b> English (fluent), Russian (native), Deutsch & Français (rusty from university days 😊)
        </li>
        <li>
          <b>Location & Work:</b> Remote from Asia for 12+ years
        </li>
      </ul>
    </td>
  </tr>
</table> -->

<br clear="both"/>