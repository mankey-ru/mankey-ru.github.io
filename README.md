## Hello, world :-) My name is Pavel Prokhorenko

- I'm a JS/TS Full-Stack engineer based in Thailand
- My experience: hundreds of projects for Russian Railways in 2011-2026 as leading specialist
- rzd.ru is high-load (zillions of visitors, explained below)

---

## Main stack
- backend: Node (since 2016)
- desktop: Electron (since 2018)
- frontend: Vue (since 2016)

### Some picks of what I made:
- Critical frontend migration of high-load ticket platform
	- high-load means:
		- about 200K sold (**paid**) tickets per day (~8000 per hour)
		- 20+ million visits per month
	- migration was from custom jQuery-based framework to Vue2
	- my selection of framework in 2017 became the company-wide standard
	- now ticket sales run by other company, the only proof is GIT history
- The entire rzd.ru admin web-app (design and development)
	- It was JSP-based IBM WebSphere stateful app made mostly by Java programmers
	- Result: modern asyncronous Vue app
	- Migration of meta-data (explained below)
- A complex internal Electron desktop app with
	- multidomain functionality
		- meta-data (explained below) editors for admin and user pages
		- ssh
		- oracle
		- postgress	
	- multirepo structure (including admin web-app)
- Migration of meta-data mentioned above
	- meta-data is description standard for 1000+ admin forms and 500+ user pages
	- before it was quirky XML, then it became JSON with much easier structure and less overhead
	- What is meta-data for admin form:

<details>
<summary>Click to expand</summary>
<p>
	Our metadata files are declarative JSON descriptors that define the full lifecycle of an administrative interface (ARM) — from the underlying database table to the UI behavior in the browser. Each file represents one admin page, capturing everything the frontend needs to render filters, a record list, and a detail/edit card without writing a single line of custom UI code for that page. They describe the main database table, child and parent relationships, access permissions, sorting defaults, and many other operational settings.
</p>
<p>
	The heart of each descriptor is the fields array. Every object in it maps to a database column (or a cross‑table relation) and specifies how that field should behave in three distinct contexts: the filter (search) panel, the list view, and the card (edit/detail form). For each context, the field declares a UI control (e.g., text input, dropdown, popup picker, WYSIWYG), its parameters, validation rules, and lookup information if the field references another table. This unified field definition allows the system to automatically wire up complex relationships, many‑to‑many cross‑references, and dynamic field groups, all while remaining a pure data‑driven configuration that can be edited with a custom editor application.
</p>
</details>

- Advanced Kanban app (then all the company moved to it from Jira)
- Node services with Express.js, PostgreSQL, Kafka, Elasticsearch etc
- Custom NPM packages for Vue and Node
- Complex build pipelines: Vite/Rollup OR Webpack/Gulp etc with Gitlab CI (Docker)
- TS migrations and coverage
- All kinds of tests for all kinds of projects

## My approach to AI
I use this amazing technology carefully.
List of tools:
- VSCode with Continue
- Openrouter
- Deepseek with expert mode
- Geminy
- Qwen Coder

- For chat questions and suggestions: sure. Different LLMs, mostly via Openrouter, but it depends.
- For agentic jobs:
	- build issues, tests, personal PoCs and scripts: sure.
	- production code: in general, I prefer hand tailored code, but very excited with Specification Driven Development (SDD).
- For writing texts:
	- boilerplate documentation: sure
	- other documentation: usually not, but it depends
	- other texts than mentioned above: rarely

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

