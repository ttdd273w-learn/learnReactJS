import React from "react";
import Jokes from "./Components/Joke";

export default function App() {
  return (
    <div>
      <Jokes
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
      />
    </div>
  );
}
