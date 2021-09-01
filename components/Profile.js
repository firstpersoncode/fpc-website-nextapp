import { useState, useEffect } from 'react'

import ComponentVideoBG from "./VideoBG"

export default function ComponentProfile({ data, swiped }) {
  const [count, setCount] = useState(0)
  const [displaySwipe, setDsiplaySwipe] = useState("opacity-0")

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(currCount => currCount + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count > 2 && displaySwipe !== "opacity-75") {
      setDsiplaySwipe("opacity-75")
    }

    if (count >= skills.length) {
      setCount(0)
    }
  }, [count, displaySwipe]);

  const skills = ["software engineer", "web developer", "front end", "back end", "learner", "tech enthusiast", "passionated", "adventurer", "gamer", "limited edition"]
  const { video } = data

  return (
    <>
      <ComponentVideoBG poster="/img/profile.png" video={video} />

      <div className="absolute w-full h-full inset-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white font-medium mb-4">Hello, my name is Nasser</h1>
        <p className="text-white text-2xl">I am {skills[count]}</p>

        {!swiped ? <div className={"mt-4 text-center transition duration-500 ease-in-out opacity-0 " + displaySwipe}>
          <p className="text-white text-xs mb-2">Swipe to next section</p>
          <img className="inline-block" width={50} src="/img/swipe.gif" />
        </div> : null}
      </div>
    </>
  )
}
