# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector("#my-button").style.color = "red";
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**
The error is a TypeError, typically something like:
Cannot read properties of null (reading 'style'). 2. Why does this error occur?
This error occurs because the JavaScript file is loaded before the browser has finished parsing the HTML body. When document.querySelector('#my-button') runs, the button element does not exist in the DOM yet, so querySelector returns null. Attempting to access .style on null causes the error. 3. What can be done to fix it?
There are several valid fixes:
Move the <script> tag to the bottom of the <body> so the DOM loads first
Add the defer attribute to the script tag
Wrap the JavaScript code in a DOMContentLoaded event listener
Any of these ensure the DOM elements exist before the JavaScript runs.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id="button-container">
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector("#button-container");
div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**
event.target refers to the actual element that was clicked which is the <button>
<event.currentTarget> refers to the element that the event listener is attached to, which is the <div id= "button container">

they are different because the click event bubbles up from the button to the div. even though the button handles the event, the original click happened on the button.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: "iPhone 17",
  price: 1099.99,
  img: "./images/iphone17.png",
};

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement("div");
const productImage = document.createElement("img");
const productName = document.createElement("h3");
const productPrice = document.createElement("p");

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
The issue is that although the elements are created and populated with data, they are never appended to the productCard div. Only the empty productCard is added to the document body.
To display the content, the image, name, and price elements must be appended as children of productCard before appending productCard to the body.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class="description">Walk the dog</p>
    <p class="is-complete">✅</p>
  </li>
  <li id="todo-2">
    <p class="description">Take out the trash</p>
    <p class="is-complete">❌</p>
  </li>
  <li id="todo-3">
    <p class="description">Wash the dishes</p>
    <p class="is-complete">❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", (event) => {
  const clickedLi = event.target.closest("li");

  if (!clickedLi) return;

  clickedLi.querySelector(".is-complete").textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

1. What is the name for this approach and why is it better?
   This approach is called event delegation.
   The alternative is attaching event listeners to each individual <li>. Event delegation is better because it:
   Uses fewer event listeners
   Works for dynamically added elements
   Improves performance and maintainability

2. What does event.target.closest('li') do and why is it essential?
   event.target.closest('li') finds the nearest parent <li> element of the element that was clicked. This is essential because the user may click on a child element (like a <p>), but the logic needs to operate on the entire list item. Without closest(), the code wouldn’t reliably know which todo item was clicked.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

1. Difference between querySelectorAll() and querySelector()
   querySelector() returns the first matching element
   querySelectorAll() returns all matching elements as a NodeList
   You would use querySelectorAll() when you need to work with multiple elements, such as selecting all buttons or list items on a page.

2. Difference between a NodeList and an array
   A NodeList looks similar to an array but is not a true array. It does not have access to all array methods like map() or filter() (without conversion). Knowing this is important so you don’t accidentally try to use array methods on a NodeList and cause errors. When needed, a NodeList can be converted into an array using Array.from().
