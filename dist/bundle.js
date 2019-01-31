/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction toggleForm() {\n    document.getElementById('form').classList.toggle('hidden');\n}\n\nvar renderContacts = function renderContacts() {\n    var storage = window.localStorage;\n    var contacts = JSON.parse(storage.getItem('contacts'));\n\n    var div = document.querySelector('.contact-list');\n\n    if (contacts) {\n        div.innerHTML = '';\n        var ul = document.createElement('ul');\n        ul.className = 'list-reset';\n\n        contacts.forEach(function (contact) {\n            var li = document.createElement('li');\n            li.className = 'list-reset';\n            li.innerHTML = '\\n            <div class=\"max-w md w-full lg:flex\">\\n                <div class=\"h-48 mb-2 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden\" style=\"background-image: url(\\'http://www.valleyroadwines.com/wp-content/uploads/2013/04/Anon-Person.png\\')\" title=\"Picture\">\\n            </div>\\n              <div class=\"w-1/6 mb-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-1 flex flex-col justify-between leading-normal\">\\n                  <div class=\"mb-8\">\\n                    <p class=\"flex justify-between text-black font-bold text-xl\">\\n                    ' + contact.name + '\\n                    <button class=\"deleteButton -mt-4\"><i class=\"material-icons flex justify-between -mt-4\">close</i></button>\\n                    </p>\\n               <div class=\"text-m text-grey-darkest flex items-center\">' + contact.company + '</div>\\n                <p class=\"text-grey-darker text-xs\">' + contact.notes + '</p>\\n                </div>\\n                <div class=\"flex items-center\">\\n                    <div class=\"text-sm\">\\n                        <p class=\"text-black leading-none\"> Phone: ' + contact.phone + '</p>\\n                        <p class=\"text-black leading-none\"> Email: ' + contact.email + '</p>\\n                        <a href=\"https://www.twitter.com/' + contact.twitter + '\">@' + contact.twitter + '</a>\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n         ';\n            ul.appendChild(li);\n        });\n\n        div.appendChild(ul);\n    } else {\n        div.innerHTML = '<p>You have no contacts in your address book</p>';\n    }\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n    document.getElementById('formButton').addEventListener('click', toggleForm);\n    renderContacts();\n    var addContactForm = document.querySelector('.new-contact-form');\n\n    addContactForm.addEventListener('submit', function (event) {\n        event.preventDefault();\n        var storage = window.localStorage;\n\n        var _addContactForm$eleme = addContactForm.elements,\n            name = _addContactForm$eleme.name,\n            email = _addContactForm$eleme.email,\n            phone = _addContactForm$eleme.phone,\n            company = _addContactForm$eleme.company,\n            notes = _addContactForm$eleme.notes,\n            twitter = _addContactForm$eleme.twitter;\n\n\n        var contact = {\n            id: Date.now(),\n            name: name.value,\n            email: email.value,\n            phone: phone.value,\n            company: company.value,\n            notes: notes.value,\n            twitter: twitter.value\n        };\n\n        console.log('Saving the following contact: ' + JSON.stringify(contact));\n        var contacts = JSON.parse(storage.getItem('contacts')) || [];\n        contacts.push(contact);\n        storage.setItem('contacts', JSON.stringify(contacts));\n        renderContacts();\n        addContactForm.reset();\n        toggleForm();\n    });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });
