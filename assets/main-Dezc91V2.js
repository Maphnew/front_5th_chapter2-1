import"./modulepreload-polyfill-B5Qt9EMX.js";const a={THUNDER:.2,ADDITIONAL:.05,EACH_PRODUCT:{QUANTITY:10,RATIO:{p1:.1,p2:.15,p3:.2,p4:.05,p5:.25}},ALL_PRODUCT:{QUANTITY:30,RATIO:.25}},y=()=>new Date().getDay()===2,c=e=>document.querySelector(e);let r=window.state={lastSelectedProduct:null,totalAmount:0,discountRate:0,prodList:{p1:{name:"상품1",price:1e4,quantity:50,originQty:50},p2:{name:"상품2",price:2e4,quantity:30,originQty:30},p3:{name:"상품3",price:3e4,quantity:20,originQty:20},p4:{name:"상품4",price:15e3,quantity:0,originQty:0},p5:{name:"상품5",price:25e3,quantity:10,originQty:10}}};const g={p1:0,p2:0,p3:0,p4:0,p5:0},h={get(e,t){return Reflect.get(e,t)},set:function(e,t,n){return r.prodList[t].quantity=r.prodList[t].originQty-n,e[t]=n,m(),!0}};let s=new Proxy(g,h);function A(){const e=c("#app");e.innerHTML=`
    <div class="bg-gray-100 p-8">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h1 class="text-2xl font-bold mb-4">장바구니</h1>
        <div id="cart-items">
        </div>
        <div id="cart-total" class="text-xl font-bold my-4">
        </div>
        <select id="product-select" class="border rounded p-2 mr-2">
        </select>
        <button id="add-to-cart" class="bg-blue-500 text-white px-4 py-2 rounded">
          추가
        </button>
        <div id="stock-status" class="text-sm text-gray-500 mt-2">
        </div>
      </div>
    </div>
  `,l(),m(),e.querySelector("#add-to-cart").addEventListener("click",P);const n=e.querySelector("#cart-items");n.addEventListener("click",$),n.addEventListener("click",U),b(),C()}function b(){setTimeout(function(){setInterval(function(){const e=r.prodList["p"+(Math.floor(Math.random()*Object.keys(r.prodList).length)+1).toString()];Math.random()<.3&&e.quantity>0&&(e.price=Math.round(e.price*(1-a.THUNDER)),console.log("번개세일! "+e.name+"이(가) 20% 할인 중입니다!"),l())},3e4)},Math.random()*1e4)}function C(){setTimeout(function(){setInterval(function(){if(r.lastSelectedProduct){const e=Object.entries(r.prodList).map(([t,n])=>({id:t,...n})).find(function(t){return t.id!==r.lastSelectedProduct&&t.quantity>0});e&&(console.log(e.name+"은(는) 어떠세요? 지금 구매하시면 5% 추가 할인!"),e.price=Math.round(e.price*(1-a.ADDITIONAL)),l())}},6e4)},Math.random()*2e4)}function l(){const e=c("#product-select");e.innerHTML="",Object.entries(r.prodList).forEach(([t,n])=>{const o=document.createElement("option");o.value=t,o.textContent=n.name+" - "+n.price+"원",n.quantity===0&&(o.disabled=!0),e.appendChild(o)})}function O(e,t){if(e>=a.EACH_PRODUCT.QUANTITY){if(t==="p1")return a.EACH_PRODUCT.RATIO[t];if(t==="p2")return a.EACH_PRODUCT.RATIO[t];if(t==="p3")return a.EACH_PRODUCT.RATIO[t];if(t==="p4")return a.EACH_PRODUCT.RATIO[t];if(t==="p5")return a.EACH_PRODUCT.RATIO[t]}return 0}function L(){var p;(p=c("#cart-items"))!=null&&p.children;let e=Object.values(s).reduce((u,i)=>u+i,0),t=Object.entries(s).reduce((u,[i,d])=>u+r.prodList[i].price*d,0),n=Object.entries(s).reduce((u,[i,d])=>{const f=r.prodList[i].price*d;let T=O(d,i);return u+f*(1-T)},0),o=(t-n)/t;if(e>=a.ALL_PRODUCT.QUANTITY){const u=n*a.ALL_PRODUCT.RATIO,i=t-n;u>i&&(n=t*(1-a.ALL_PRODUCT.RATIO),o=a.ALL_PRODUCT.RATIO)}return y()&&(n*=1-.1,o=Math.max(o,.1)),{totalAmount:n,discountRate:o}}function m(){const{totalAmount:e,discountRate:t}=L();D(e),I(t),q(),v(e),R()}function x({id:e,name:t,price:n,quantity:o}){return`
    <div id="${e}" class="flex justify-between items-center mb-2">
      <span>${t+" - "+n+"원 x "+o}</span>
      <div>
        <button class="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" data-product-id="${e}" data-change="-1">-</button>
        <button class="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" data-product-id="${e}" data-change="1">+</button>
        <button class="remove-item bg-red-500 text-white px-2 py-1 rounded" data-product-id="${e}">삭제</button>
      </div>
    </div>
  `}function R(){const e=c("#cart-items"),t=Object.entries(s).filter(([n,o])=>o>0).map(([n,o])=>x({...r.prodList[n],id:n,quantity:o})).join("");e.innerHTML=t}function D(e){const t=c("#cart-total");t.textContent="총액: "+Math.round(e)+"원"}function I(e){if(isNaN(e)||e<=0)return;const t=c("#cart-total");let n=document.createElement("span");n.className="text-green-500 ml-2",n.textContent="("+(e*100).toFixed(1)+"% 할인 적용)",t.appendChild(n)}const v=e=>{const t=Math.floor(e/1e3),n=c("#cart-total");let o=c("#loyalty-points");o||(o=document.createElement("span"),o.id="loyalty-points",o.className="text-blue-500 ml-2",n.appendChild(o)),o.textContent="(포인트: "+t+")"};function q(){const e=Object.entries(r.prodList).filter(([n,o])=>o.quantity<5).map(([n,o])=>o.quantity>0?`${o.name}: 재고 부족 (${o.quantity}개 남음)`:`${o.name}: 품절`).join(`
`),t=c("#stock-status");t.textContent=e}function P(){const t=c("#product-select").value,n={...r.prodList[t]};if(!n||n.quantity<=0){alert("재고가 부족합니다.");return}s[t]++,r.lastSelectedProduct=t}function $(e){const t=e.target;if(t.classList.contains("remove-item")){const n=t.dataset.productId,o=s[n];s[n]-=o}}function U(e){const t=e.target;if(t.classList.contains("quantity-change")){const n=t.dataset.productId,o=parseInt(t.dataset.change);if(r.prodList[n].quantity===0){alert("재고가 부족합니다.");return}s[n]+=o}}A();
