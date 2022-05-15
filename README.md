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
    - Generally recommended to load css directly in the source folder, and then get it with an import
      - Behind the scenes, React is using something called styleloader that does this
    - For images, put them all in a folder called images and also import them
      - Set `src` to the imported name

# Project 1

- ## Setup
  - Create a components folder, and we will remove most of the boilerplate code from create-react-app
  - Not a whole lot of new materials, definitely keep in mind of the parent child structure
    - Export default for react components
  - Some characteristics unique to this project
    - To make an image into the background, use the `url()` tag in css
    - Specify things in JSX with `classNames`
      - Generally use names with two dashes, e.g. `main--list`

# Project 2

- ## Setup

  - In project 1, everything is hardcoded, and not data driven, and this project will tackle that with props
  - Clone of airbnb experiences page, the list on the page are from the database
  - Remember that CSS elements have a model organized like the following
    - ![CSS Model](/assets/css_model.png "CSS Model")
  - Hero component is a component that contains multiple images, texts, and links.
  - Want to give the font family to the entire body, so that it is spread throughout the website
  - Project card component
    - Need to build out a single instance of the component
    - Problem is that it is not reusable at all, and instead, it should be data driven
    - In React, this is where `props` come into play
  - To type a variable in JSX, use the curly braces `{}`
    - In fact, anything that's inside the curly braces can be run as JavaScript code
  - Duplicating a certain component will always cause it to have the same data
    - To do this, we can add whatever property we want into React
    - In the function parenthesis, just add the word `props` inside it, it can really be named anything, but it passes in a dictionary with the attribute name and the corresponding value that's passed in
  - Pop quiz:

    1. What do props help us accomplish?
       - They allow our components to be data driven, and we can pass in whatever we want into the component.
    2. How do you pass in a prop into a component?
       - Type the name of the prop and its corresponding value, such as `<Component attr=""/>`, and this is a dictionary, so call `props.attr` to access that element
    3. Can I pass in a custom prop into a native DOM element? ex) `<div blahblah={true}/>`
       - WRONG: I think you can since native DOM elements are just JavaScript objects
       - RIGHT: No, you cannot, the JSX will be turned into real DOM elements, and real DOM elements will ony have the properties/attributes specified in the HTML specification.
    4. How do I receive props in a component?

       - The name of the parameter in the function header is the dictionary name, call `props.attr` to get the corresponding attribute.

    5. What data type is `props` when the component receives it?
       - WRONG: A dictionary or a map
       - RIGHT: An object!

  - Object Destructuring:
    - `const {img, name} = person`, will take the corresponding attributes of person and store them into those variables.
    - Rename using colons: `const {img: image...}`
    - You can therefore choose to destructure immediately:
      - `function Header({img, name, ...})`
  - Jokes Page
    - <hr /> tag is the thematic break tag, puts a line in the page
    - It is also an option to conditionally render
    - `{props.setup && <h3>Setup: {props.setup}</h3>} `
    - In React, we can also pass in nonstring props into the components, or any JavaScript types as props
    - To do this, we just surround the types in `{}`
    - You can also pass in additional variables within a string like so:
      - `` {`../images/${props.img}`} ``
    - `Array.map()` method can be used to expand the array elements
    - React JSX can also render the entire array on the page, with `{}` as usual
  - Map array quiz
    1. What does the `.map()` array method do?
    - It loops through the array and applies the function you pass in on each element of the array
    3. What do we usually use the `.map()` method for in React?
       - It is usually used for creating components out of an array of data elements, which are usually objects
    4. Why is using the `.map()` better than just creating the components manually by typing them out?
       - It is better because you are making your website data driven, and reduces code duplicity and makes it flexible for changes, and makes our code more "self-sustaining," not requiring additional changes whenever the data changes.
  - For the project, we will need to move the images folder into the public folder for images to load. In reality, We usually won't have a `data.js` file, and instead, we will load the data in from online resources.
  - You will see a key prop warning anytime you use, and the key is just something unique about the item, `key` propery.
    - You can use certain properties, such as in this case, the rating, etc. However, this is not unique for every item. Therefore, you should use something similar to an ID, which should normally come with a database.
  - Our card component is getting pretty long with all the properties that we're passing in. One way to avoid this is just passing in the entire object
  - Another way to make it simpler is with the object spread syntax
    - `{...item}` will spread all components of item and create a separate prop for each one of them

# Project 3

- This is where we will create interactive web apps using React, until now, we've been making static websites, and reusable components.
- Static web pages
  - Read only, no changes to data
  - Examples: blogs, news sites, recipes
- Dynamic web apps
  - Read-write: ability to change data
  - Highly interactive
  - Displays _your_ data
    - Examples: Bank website, Airbnb
- In this project, we will create a meme generator that takes the top 100 memes from a website and allows the user to generate a random new meme
- Push something to the right in CSS by giving it a margin of auto

Checkpoint: [YouTubeLink](https://youtu.be/bMknfKXIFA8?t=17834)
