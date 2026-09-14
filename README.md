Name of My Project: dev-stack-app
---------------------------------------------
A little description:
---------------------------------------------
This is an app thats creaty by react . This is contained some functionality like technologies add , delete, toastify alerta showing etc.

Technology that you use: 
------------------------------------------------
React , Typescript, Tailwind etc


3 features about your project: 
---------------------------------
1) User Add  technologies in stack 
2) User remove technologies in stack 
3) After click add to stack button it is showed toastify meassage .


## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a this kind of Javascript xml , that write html in react eaiser. but is's not real html . 

### 2. What is the difference between props and state?

Porps is properties inside the componet that's usage in argumen with destructure , and state use power of suer that's changed the ui state when user responsed. 

### 3. What does the `useState` hook do, and where did you use it in this project?

useState is used for change state data . I use this for changed state in ui . 

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code when certain things happen in a component. I used it to load the JSON data when the component first appeared.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React data serialaization . 

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it to show an empty stack message when no technology is selected.

Example:

```jsx
{selectedTech.length === 0 && (
  <p>Your stack is empty</p>
)}
