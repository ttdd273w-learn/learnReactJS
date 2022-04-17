# Learning ReactJS

I will learn ReactJS through online resources, and this is where I will take notes on the topics.

Credits to [freeCodeAcademy](https://youtu.be/bMknfKXIFA8)

# First React

- We will first pull in ReactDoms through CDN and Babble to start coding.
- Importing the script tags give us global access to ReactDom in `index.js`
  - First is what do I render, second is where do I render it
  - We make a `div` with an id of `"root"`, and call `document.getElementById("root")` to get it
  - Really annoying, you need to run it on your own server to be able to display it, so you need `python -m http.server 8800` to make the server, and then go to `localhost:8800`
  - Think of it under the hood as getting the element, and then writing something similar to append to the element
  - We can also use the `Live Server` extension to host and run a website on locally, rather than typing the python command

# Introduction

- ## Why React?
  - ### React allows us to write composable code
    - Idea is to build from much smaller pieces than to start with one big piece
    - Put code together to make a larger piece
  - ### React is declarative
    - Opposite is imperative
    - **Declarative** is "what should be done?", just tell me what to do, and I'll do it
    - **Imperative** is "how it should be done?", describe to me every step on how to do something, and I'll do it
- ## JSX - JavaScript XML
  - A flavor of JavaScript that looks a lot like HTML
  - It essentially is syntactic sugar for writing a JavaScript object that includes all of those properties
  - You can only render one single parent element in React
- ## Goodbye CDN
  - We've been using what's called a **CDN**, content delivery network, which is the easier way to start using React.
  - The CDNS we've been using are the script tags that we copied
  - We will now do it the more "formal" way
  - Creating local variables such as `const page` is not very effective, we will use custom components later to replace this.
- ## Pop quiz #1
  1. Why do we need the import statement?
     - We need it because we're not using babel, and react defines JSX.
  2. If I were to console.log(page), what would show up?
     - Nothing, the console will display a javascript object. React elements that describe what React should eventually add to the real DOM for us.
  3. What's wrong with `const page = ( <h1></h1> <p></p> )`
     - It's not wrapped in a single element, you can use fragments, `<></>`.
  4. What's declarative vs imperative?
     - Declarative is you tell them to do something, they will do, while imperative is you have to tell them how to do something.
  5. What does it mean to be "composable"?
     - Composable means you can build a bigger thing from smaller components.
- ## Components (Composability)
  - The whole point is creating custom components that's reusable
  - Function that creates elements over and over again
  - We use pascal case instead of camelCase for component names
    - Camel case always starts out lowercase with each word delimited by a capital letter (like personOne, textUtil, thingsToDo)
    - Pascal case is similar to camel case, but the first letter is always capitalized (like PersonOne, TextUtil, ThingsToDo)
    - Snake case means that we delimit words with an underscore (like person_one, text_util, things_to_do)
  - And we wrap the function in angle brackets: `<Function />`
- ## Custom Components Quiz
  1. What is a react component?
     - A react component is a function that returns some JSX that can be inserted into HTML.
     - A function that returns React elements.
  2. What's wrong with the code?
     - The function should be PascalCase, and it needs to begin with captial letter.
  3. What's wrong with the code?
     - You need to call with `<Header />` to get the component
- ## Parent and Child Components
  - The parent component is the main component that gets rendered
  - The children components are components that the parent component calls
- ## Styling React Components
  - Use `className=""`, which is very similar to HTML, which uses `class=""`
- ## Organizing Code in React
  - An important way to organize code in React is to separate them out into different folders, etc.
  - General principle:
    - Name the file with PascalCase, similar to the name of the function that its exporting
    - Export the function with `export default function`, depending on the use case
    - Import with `import FunctionName from "./FunctionName"`, you don't neeed the `js` extension since it is the default extension
    - The `./` is a way to indicate you're referring to a file that's in your project, not a dependency
    - Another convention is also to call `Page` the `App` component, or the main component
    - Doesn't exactly work with imports since we don't have the correct dependencies and we're using babel
  - ## Create App
    - In browser babel transformer is not a good long term solution
      - It is necessary because the browser cannot interpret JSX
    - Normally, you need a whole bundler system called `Webpack`
      - You would then configure it so that it compiles your React code into something the browser can understand
    - However, webpack is normally very difficult to pickup, so the React team created a package called `Create-React-App` to hide those abstraction details
      - To use this, you need Node and npm
      - nvm is another module that makes it really easy to change node versions
    - Create-react-app generates a boiler plate, but you can delete everything in it and start from scratch to get it up and running, but you don't need `index.html` file, since it's in the public folder

Checkpoint: [YouTubeLink](https://youtu.be/bMknfKXIFA8?t=6091)
