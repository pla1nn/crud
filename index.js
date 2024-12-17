(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i="./movies.json";async function s(){fetch(i).then(r=>r.json()).then(r=>{const o=document.getElementById("table").querySelector("tbody");o.innerHTML=r.map(n=>`<tr>
        <td>${n.title}</td>
        <td>${n.genre}</td>
        <td>${n.director}</td>
        <td>${n.year}</td>
        <td>
            <button onclick="updateMovie(${n.id})">Update</button>
            <button onclick="editMovie(${n.id})">Edit</button>
            <button onclick="deleteMovie(${n.id})">Delete</button>
        </td>
        </tr>`).join("")})}const u=document.getElementById("button");u.addEventListener("click",s);const l=document.getElementById("moviesForm");l.addEventListener("submit",function(r){r.preventDefault();const o={title:document.getElementById("title").value,genre:document.getElementById("genre").value,director:document.getElementById("director").value,year:document.getElementById("year").value};fetch(i,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then(s)});
//# sourceMappingURL=index.js.map
