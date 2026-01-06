// mdflow.js

(function () {
  function parseMarkdown(md) {
    md = md.replace(/\r\n/g, "\n").trim();

    // CODE BLOCKS ```lang?
    md = md.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre><code>${escapeHTML(code.trim())}</code></pre>`;
    });

    // HEADINGS
    md = md.replace(/^### (.*)$/gm, "<h3>$1</h3>");
    md = md.replace(/^## (.*)$/gm, "<h2>$1</h2>");
    md = md.replace(/^# (.*)$/gm, "<h1>$1</h1>");

    // BLOCKQUOTE
    md = md.replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");

    // LISTS (grouped correctly)
    md = md.replace(
      /(?:^|\n)([-*] .*(?:\n[-*] .*)*)/g,
      match => {
        const items = match
          .trim()
          .split("\n")
          .map(i => `<li>${i.slice(2)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
    );

    // INLINE
    md = md.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    md = md.replace(/\*(.*?)\*/g, "<em>$1</em>");
    md = md.replace(/`([^`]+)`/g, "<code>$1</code>");

    // PARAGRAPHS (last!)
    md = md.replace(/^(?!<h|<ul|<pre|<blockquote)(.+)$/gm, "<p>$1</p>");

    return md;
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function initMdFlow() {
    document.querySelectorAll(".md").forEach(el => {
      const raw = el.textContent;
      el.innerHTML = parseMarkdown(raw);
    });
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", initMdFlow)
    : initMdFlow();
})();
