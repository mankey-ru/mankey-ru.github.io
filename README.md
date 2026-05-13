## Hello, world :-) My name is Pavel Prokhorenko

- I'm a JS/TS Full-Stack engineer based in Thailand
- My experience: hundreds of projects for Russian Railways in 2011-2026 as leading specialist
- rzd.ru is high-load (zillions of visitors, explained below)

---

## Main stack
- <b>Backend:</b> ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) (since 2016)
- <b>Frontend:</b> ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white) (since 2016)
- <b>Desktop:</b> ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white) (since 2018)

### Some picks of what I made:
- ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white) Designed and developed critical frontend migration of high-load ticket platform
	- high-load means about 150K sold (**paid**) tickets per day (~600 per hour) and 20+ million visits per month
	- migration was from custom jQuery-based framework to Vue2
	- my selection of framework in 2017 became the company-wide standard
	- now ticket sales run by other company, the only proof is Git history
	- ticket sales is complex
		- thousands of stations; 11 timezones; intercity, international and commuter trains; tens of extra services; 3 languages;
		- much of this complexity was made by front-end engineers in JS, in templates and <i>metadata</i> (explained below)
- ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white) Designed and developed rzd.ru <i>administrative front-end app</i>
	- Before: JSP-based IBM WebSphere stateful app made mostly by Java programmers
	- After: modern async Vue app
	- Works with <i>metadata</i>  (explained below)
- ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white) Designed and developed complex internal Electron desktop app (Win/Mac/Linux) with:
	- multidomain functionality
		- <i>metadata</i> editors (explained below)
		- <i>metadata</i> lists with advanced filtering (incl. jsonpath)
		- ssh and sftp, oracle and postgress and much more back in the days
	- multirepo structure (including admin web-app)
- Migration of <i><b>metadata</b></i> mentioned above
	- <i>metadata</i> is two declarative formats for: <i>administrative forms</i> (1000+) and <i>user‑facing pages</i> (500+), explanations collapsed with spoilers below
	- Designed two new JSON formats together with Java architects, before it was quirky XML, full of workarounds and dirty hacks, then it became an elegant JSON with much easy structure and less overhead
	- Then designed and developed 
		- conversion scripts for both formats
		- editors for each format in an Electron app
		- <i>administrative front-end app</i>

<details>
<summary>What is metadata for <i>administrative forms</i> (1000+), click to expand</summary>
<p>
	Our metadata files are declarative JSON descriptors that define the full lifecycle of an administrative interface (ARM) — from the underlying database table to the UI behavior in the browser. Each file represents one admin page, capturing everything the frontend needs to render filters, a record list, and a detail/edit card without writing a single line of custom UI code for that page. They describe the main database table, child and parent relationships, access permissions, sorting defaults, and many other operational settings.
</p>
<p>
	The heart of each descriptor is the fields array. Every object in it maps to a database column (or a cross‑table relation) and specifies how that field should behave in three distinct contexts: the filter (search) panel, the list view, and the card (edit/detail form). For each context, the field declares a UI control (e.g., text input, dropdown, popup picker, WYSIWYG), its parameters, validation rules, and lookup information if the field references another table. This unified field definition allows the system to automatically wire up complex relationships, many‑to‑many cross‑references, and dynamic field groups, all while remaining a pure data‑driven configuration that can be edited with a custom editor application.
</p>
</details>

<details>
<summary>What is metadata for <i>user‑facing pages</i> (500+), click to expand</summary>
<p>
	These page metadata files define the complete data‑fetching layer for <i>user‑facing pages</i> in a declarative, JSON‑driven way. Instead of writing custom backend code for each page, a page descriptor specifies which data the page needs and how it should be retrieved, assembled, and filtered. The core structural units are fragments and components. A fragment represents an independent data‑loading block — it has its own pagination settings, a data source (like a database connection), and can be thought of as a reusable “data module” within the page. Each fragment contains one or more components, where a component directly maps to a database table (or view) and declares which columns to fetch, which filters to apply, and how this component relates to other components.
</p>
<p>
	Components are the granular building blocks: they list the exact fields to be selected, designate primary keys, and optionally define relations to other components (one‑to‑one or one‑to‑many) so that the engine can automatically join related data. Filters can be global (driven by request parameters or special variables) or local, and they can include complex SQL expressions. Together, fragments and components allow the page to be described as a graph of interconnected data sets, all rendered by a specified template that knows how to walk this structure. Shared fragments can even be reused across different pages, making the whole system modular and maintainable.
</p>
</details>

- ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white)  Designed and developed front-end of advanced Kanban app (then all the company, 70+ people, moved to it from Jira)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) Designed and developed 5 Node services with Express.js, PostgreSQL, Kafka, Elasticsearch etc
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white)   Designed and developed from scratch 10+ custom NPM packages for Vue and Node, used in several projects each
- ![NPM](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) TS migrations and coverage
- Complex build pipelines: Vite/Rollup (or Webpack etc) with Docker containerization and Gitlab CI
- Tests, unit and e2e, cypress for front-end and electron, jest for back-end

## My approach to AI
- I use this amazing technology carefully.
	- For chat questions and suggestions: sure
	- For agentic jobs:
		- build issues, tests, personal PoCs and scripts: sure.
		- production code: in general, I prefer hand tailored code, but very excited with Specification Driven Development (SDD).
	- For writing texts:
		- boilerplate documentation: sure
		- other documentation: usually not, but it depends
		- other texts than mentioned above: rarely
- List of tools:
	- VSCode with Continue
	- Openrouter
	- Claude Opus
	- Deepseek with expert mode
	- Antigravity with Geminy
	- Qwen Coder
## My priorities

- Teamwork ❤︎ Collaborating, constantly learning while sharing knowledge with others
- Building solutions: either apps that will be maintainable for years OR just quick PoC/MVP
- Keeping balance between business purposes (first), DX and tech debt

## Other skills
- Back in the days I worked much with oldschool enterprise stack as well: Java, Oracle, IBM Websphere, JSP and XSLT templates and so on
- I've had an experience in web-based mobile development (PWA, Quasar, Weex), now interested in native vue solution backed by ByteDance (Lynx.js)

## Me
<table>
  <tr>
<td width="200" style="padding-right: 20px; vertical-align: top;">
      <img align="left" width="200" src="./assets/images/profile_photo.jpg"/>
</td>
<td style="vertical-align: top;">
		
<ul>

<li>
I speak English (pretty fluently), Russian (natively) and didn't completely forget Deutsch and Francais I studied in university :-)
</li>

<li>
I work remotely for 12+ years from Asia
</li>

</ul>
		
</td>
  </tr>
</table>

<br clear="both"/>

