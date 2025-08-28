## WELCOME TO EMERGENCHCY SERVICE
---

# JavaScript DOM & Event Handling Concepts

This is README explains key JavaScript concepts related to DOM manipulation and event handling

---

## 1.Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

| Method | Returns| Description | Example |
|---------|---------|---------|--------|
|`getElementById('id')`|Single Element|Returns the element with the specified Id|`document.getElementById(myId)`|
|`getElementsByClassName('class')`|Live HTMLCollection |Returns all elements with the given class.Update automatically DOM changes|`document.getElementsByClassName('myClassName')`|
|`querySelector('selector')`|First Element matching a CSS selector|Selects the first element in the DOM that matches a CSS selector|`document.querySelectory('.class')`|
|`querySelectorAll('sector')`|NodeList of All matching elements |Return all matching elements.Dosen't auto update|`document.querySelectorAll('.Class')`|

**Notes**
-`getElementById` is faster for single Id selection.
-`getElementsByClassName` returns a **live HTMLCollection** (updates automatically when DOM changes).
-`querySelector` returns a **static NodeList** (does not auto-update).

----

## 2.How to create and insert a new element into the DOM  

```javascript
// 1. Create element
const newDiv = document.createElement('div');

// 2. Add content / attributes
newDiv.textContent = 'Hello World!';
newDiv.className = 'my-div';

// 3. Select parent element
const parent = document.getElementById('container');

// 4. Insert into DOM
parent.appendChild(newDiv);