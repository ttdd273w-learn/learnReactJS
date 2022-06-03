import React from "react";
import Jokes from "./Components/Joke";
import jokesData from "./jokesData";

export default function App() {
  const jokesElements = jokesData.map((joke) => {
    return (
      <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    );
  });
  return <div>{jokesElements}</div>;
}

// const colors = ["Red", "Orange", "Yellow"].map((color) => {
//   return `<h3>${color}</h3>`;
// });
// return <div>{colors}</div>;

/* <Jokes
        isPun={true}
        upvotes={10}
        comments={[{ author: "", body: "", title: "" }]}
        // etc, we can really include anything in here
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait for her face to light up when she opens it."
      />
      <Jokes
        setup="How did the hacker escape from the police?"
        punchline="He just ransomware"
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus."
      /> */
