!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){document.getElementById("form").classList.toggle("hidden")}var o=function(){var e=window.localStorage,t=JSON.parse(e.getItem("contacts")),n=document.querySelector(".contact-list");if(t){n.innerHTML="";var r=document.createElement("ul");r.className="list-reset",t.forEach(function(e){var t=document.createElement("li");t.className="list-reset",t.innerHTML='\n            <div class="max-w md w-full lg:flex">\n             <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url(\'\')" title="Picture">\n            </div>\n              <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">\n               <div class="mb-8">\n                <p class="text-sm text-grey-dark flex items-center">\n                 Something\n                </p>\n                <div class="text-black font-bold text-xl mb-2"> something else</div>\n                <p class="text-grey-darker text-base">something something</p>\n                </div>\n                <div class="flex items-center">\n                    <div class="text-sm">\n                        <p class="text-black leading-none"> name here?</p>\n                        <p class="text-grey-dark">something</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n         ',r.appendChild(t)}),n.appendChild(r)}else n.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){document.getElementById("formButton").addEventListener("click",r),o();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=window.localStorage,l=e.elements,a=l.name,i=l.email,d=l.phone,c=l.company,s=l.notes,u=l.twitter,f={id:Date.now(),name:a.value,email:i.value,phone:d.value,company:c.value,notes:s.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(f));var m=JSON.parse(n.getItem("contacts"))||[];m.push(f),n.setItem("contacts",JSON.stringify(m)),o(),e.reset(),r()})})}]);