!function(){if(window.screen.width<=1023){const e=document.body,s=document.querySelector(".core"),t=document.querySelector(".burger"),c=document.querySelector(".close"),d=document.querySelector(".burger__menu");t.addEventListener("click",(()=>{s.classList.remove("hide"),d.classList.remove("hide"),e.classList.add("no-scroll")})),s.addEventListener("click",(t=>{s.classList.add("hide"),d.classList.add("hide"),e.classList.remove("no-scroll")})),c.addEventListener("click",(t=>{s.classList.add("hide"),d.classList.add("hide"),e.classList.remove("no-scroll")}))}document.querySelector(".visibility-button").addEventListener("click",(()=>{const e=document.getElementById("inputPass");"password"===e.type?e.type="text":e.type="password"}))}();