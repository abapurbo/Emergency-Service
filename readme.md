## WELCOME TO EMERGENCHCY SERVICE
---

# JavaScript DOM & Event Handling Concepts

This is README explains key JavaScript concepts related to DOM manipulation and event handling

---

## 1.Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

| Method                            | Returns                               | Description                                                                | Example                                          |
| --------------------------------- | ------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------ |
| `getElementById('id')`            | Single Element                        | Returns the element with the specified Id                                  | `document.getElementById(myId)`                  |
| `getElementsByClassName('class')` | Live HTMLCollection                   | Returns all elements with the given class.Update automatically DOM changes | `document.getElementsByClassName('myClassName')` |
| `querySelector('selector')`       | First Element matching a CSS selector | Selects the first element in the DOM that matches a CSS selector           | `document.querySelectory('.class')`              |
| `querySelectorAll('sector')`      | NodeList of All matching elements     | Return all matching elements.Dosen't auto update                           | `document.querySelectorAll('.Class')`            |

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


```

## 3. What is Event Bubbling and how does it work
Event bubbling is a process where, when an event is triggered on a DOM element, it bubbles up to the parent element and continues upwards.

```javascript

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

// Clicking on the child element logs
//Output:
Child clicked
Parent clicked

```
## 4. What is Event Delegation in JavaScript? Why is it useful?
 
 Event delegation is a process where, instead of attaching an event to each child element, we attach a single event listener to a parent element. When an event occurs on a child element, it is handled by the parent element’s listener. This approach reduces memory usage and code repetition, improving performance, which is why event delegation is used.

 ```html
 <ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javaScript
const list = document.getElementById('myList');

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('Clicked:', event.target.textContent);
  }
});

```
## 5. Difference between preventDefault() and stopPropagation()

| Method              | Purpose                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| `preventDefault()`  | Prevents the default browser behavior (e.g., stops a link from navigating, stops form submission) |
| `stopPropagation()` | Stops the event from bubbling up (or capturing down) in the DOM.                                  |


```javaScript

document.getElementById('myLink').addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()    
})


