(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&h(f)}).observe(document,{childList:!0,subtree:!0});function u(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(n){if(n.ep)return;n.ep=!0;const r=u(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",function(){console.log("FitConsult Portfolio loaded successfully!");const m=document.querySelector(".hamburger"),l=document.querySelector(".nav-menu");m&&l&&(m.addEventListener("click",function(){m.classList.toggle("active"),l.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("active"),l.classList.remove("active")})})),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){o.preventDefault();const t=document.querySelector(this.getAttribute("href"));if(t){const a=t.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:a,behavior:"smooth"})}})});const u=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>100?(u.style.background="rgba(255, 255, 255, 0.98)",u.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(u.style.background="rgba(255, 255, 255, 0.95)",u.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)")});const h={threshold:.1,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(o.target.classList.add("fade-in-up"),n.unobserve(o.target))})},h);document.querySelectorAll(".service-card, .testimonial-card, .blog-card, .about-content, .hero-stats").forEach(e=>{n.observe(e)});const f=document.querySelector(".contact-form");f&&f.addEventListener("submit",function(e){e.preventDefault();const o=new FormData(this),t={};o.forEach((i,c)=>{t[c]=i});const s=["name","email","service"];let d=!0;s.forEach(i=>{const c=this.querySelector(`[name="${i}"]`);!t[i]||t[i].trim()===""?(c.style.borderColor="#dc3545",d=!1):c.style.borderColor="#28a745"});const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,p=this.querySelector('[name="email"]');t.email&&!a.test(t.email)&&(p.style.borderColor="#dc3545",d=!1),d?(g("Mensagem enviada com sucesso! Entraremos em contato em breve.","success"),this.reset(),this.querySelectorAll("input, select, textarea").forEach(i=>{i.style.borderColor="#e9ecef"}),console.log("Form data:",t)):g("Por favor, preencha todos os campos obrigatórios corretamente.","error")});function g(e,o="info"){const t=document.querySelector(".notification");t&&t.remove();const s=document.createElement("div");if(s.className=`notification notification-${o}`,s.innerHTML=`
            <div class="notification-content">
                <span class="notification-message">${e}</span>
                <button class="notification-close">&times;</button>
            </div>
        `,s.style.cssText=`
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${o==="success"?"#28a745":o==="error"?"#dc3545":"#007bff"};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
        `,!document.querySelector("#notification-styles")){const a=document.createElement("style");a.id="notification-styles",a.textContent=`
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0;
                    line-height: 1;
                }
                .notification-close:hover {
                    opacity: 0.8;
                }
            `,document.head.appendChild(a)}document.body.appendChild(s),s.querySelector(".notification-close").addEventListener("click",()=>{s.remove()}),setTimeout(()=>{s.parentNode&&s.remove()},5e3)}function v(){const e=document.querySelectorAll(".stat h3"),o=200;e.forEach(t=>{const s=t.innerText,d=s.includes("%"),a=s.includes("Anos"),p=parseInt(s.replace(/\D/g,"")),i=()=>{const c=+t.getAttribute("data-count")||0,y=p/o;c<p?(t.setAttribute("data-count",Math.ceil(c+y)),d?t.innerText=Math.ceil(c+y)+"%":a?t.innerText=Math.ceil(c+y)+" Anos":t.innerText=Math.ceil(c+y)+"+",setTimeout(i,1)):t.innerText=s};i()})}const b=document.querySelector(".hero-stats");if(b){const e=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(v(),e.unobserve(t.target))})},{threshold:.5});e.observe(b)}document.querySelectorAll(".service-card").forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-15px) scale(1.02)"}),e.addEventListener("mouseleave",function(){this.classList.contains("featured")?this.style.transform="scale(1.05)":this.style.transform="translateY(0) scale(1)"})}),document.querySelectorAll(".btn, .service-btn").forEach(e=>{e.addEventListener("click",function(o){const t=this.textContent.trim(),s=this.classList.contains("btn-primary")?"primary":this.classList.contains("btn-secondary")?"secondary":"service";console.log(`Button clicked: ${t} (${s})`)})}),window.addEventListener("scroll",()=>{const e=window.pageYOffset,o=document.querySelector(".hero-img-placeholder");if(o){const t=e*-.5;o.style.transform=`translateY(${t}px)`}}),window.addEventListener("load",()=>{if(document.body.classList.add("loaded"),!document.querySelector("#loading-styles")){const e=document.createElement("style");e.id="loading-styles",e.textContent=`
                body:not(.loaded) {
                    overflow: hidden;
                }
                body:not(.loaded)::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    z-index: 9999;
                    opacity: 1;
                    transition: opacity 0.5s ease-out;
                }
                body.loaded::before {
                    opacity: 0;
                    pointer-events: none;
                }
            `,document.head.appendChild(e)}})});
