!function(){if(window.screen.width<=1023){const e=document.body,t=document.querySelector(".burger"),s=document.querySelector(".close"),o=document.querySelector(".burger__menu");t.addEventListener("click",(()=>{o.classList.remove("hide"),e.classList.add("no-scroll")})),s.addEventListener("click",(t=>{o.classList.add("hide"),e.classList.remove("no-scroll")}))}document.querySelector(".visibility-button").addEventListener("click",(()=>{const e=document.getElementById("inputPass");"password"===e.type?e.type="text":e.type="password"})),document.addEventListener("click",(function(e){var t=(e=e||window.event).target||e.srcElement;if(t.hasAttribute("data-toggle")&&"modal"==t.getAttribute("data-toggle")&&t.hasAttribute("data-target")){var s=t.getAttribute("data-target"),o=document.querySelector(`#${s}`).querySelector("#get-demos"),d=document.querySelector(`#${s}`).querySelector("#back-button");document.getElementById(s).classList.add("open"),document.getElementsByTagName("body")[0].classList.add("no-scroll"),o&&(o.addEventListener("click",(()=>{o.closest("#modal-content").classList.add("hide"),o.closest("#modal-content").nextElementSibling.classList.add("modal-form-show")})),d.addEventListener("click",(e=>{o.closest("#modal-content").classList.remove("hide"),o.closest("#modal-content").nextElementSibling.classList.remove("modal-form-show")})))}(t.hasAttribute("data-dismiss")&&"modal"==t.getAttribute("data-dismiss")||t.classList.contains("modal"))&&(document.querySelector('[class="modal open"]').classList.remove("open"),document.getElementsByTagName("body")[0].classList.remove("no-scroll"))}),!1)}();