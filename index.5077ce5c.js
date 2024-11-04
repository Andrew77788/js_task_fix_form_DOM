document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.htmlFor=e.id,t.className="field-label",t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.placeholder=t.textContent,e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.5077ce5c.js.map
