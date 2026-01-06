# MDFlow

**Markdown, but it just… lives inside HTML.**

mdflow lets you write **pure Markdown inside normal HTML elements** using **only CSS + JS**.
No build step. No custom tags. No JSX. No ceremony.

If the browser can render a `<div>`, mdflow can render Markdown inside it

---

## 🚀 Quick Start (literally 30 seconds)

Just add **these two lines** to your HTML:

```html
<link rel="stylesheet" href="https://nightnovann.github.io/MDFlow/mdflow.css" />
<script src="https://nightnovann.github.io/MDFlow/mdflow.js"></script>
```

That’s it. You’re done.

---

## How to use

Wrap your Markdown inside **any element** and give it the `md` class.

````html
<div class="md">
  ## Card Title This is **Markdown** inside a normal div. - No build step - No
  JSX - Just JS ```js console.log("mdflow works");
</div>
````

</div>

mdflow will:

- read the raw text
- parse Markdown
- replace it with real HTML

All at runtime. All client-side.

---

## Why mdflow exists

Most tools force you into:

- custom components
- build pipelines
- framework lock-in

Markdown should be:

- declarative
- composable
- readable before JS runs
- readable after JS runs

mdflow doesn’t care **where** Markdown lives.
Cards. Sections. Footers. Modals. Layouts. It just works.

---

## Features

- Standard Markdown syntax
- Fenced code blocks (```js)
- Headings, lists, blockquotes
- Inline code, bold, italics
- Works in **any HTML element**
- Zero dependencies
- Tiny footprint

---

## Notes

- mdflow parses content **once on page load**
- It’s meant for **content**, not untrusted user input
- This is intentionally simple — not a full CommonMark clone
- As of 6/1/2026 still in its First versions

---

## 🧪 Philosophy

mdflow is **framework-level behavior**
without pretending to be a framework.

Small. Predictable. Honest.

---

## So

1. Add the CSS + JS
2. Use `class="md"`
3. Write Markdown
4. Ship

---

## License

MIT, don't worry about it.

---
