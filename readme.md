## WELCOME TO EMERGENCHCY SERVICE
---

# JavaScript DOM & Event Handling Concepts

This is README explains key JavaScript concepts related to DOM manipulation and event handling

---

## 1.Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

| Method | Returns| Description | Example |
|---------|---------|---------|--------|
|`getElementById('id')`|Single Element|Returns the element with the specified Id|`document.getElementById(myId)`|
|`getElementsByClassName('class')`|Multiple Elements|Live HTMLCollection |Returns all elements with the given class.Update automatically DOM changes|`document.getElementsByClassName('myClassName')`|
||`querySelector('selector')`|First Element matching a CSS selector|Selects the first element in the DOM that matches a CSS selector.|`document.querySelectory('.class')`|
|`querySelectorAll('sector')`|NodeList of All matching elements |Return all matching elements.Dosen't auto update.|`document.querySelectorAll('.Class')`|