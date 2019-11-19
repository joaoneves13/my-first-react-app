import React from "react";

export default class AwesomeAnimals extends React.Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  }

  render () {
    return (
      <ul>
        <li>Level { 1 }: { "Chicken" }</li>
        <li>Level { 2 }: { "Sloth" }</li>
        <li>Level { 3 }: { "Porcupine" }</li>
        <li>Level { 4 }: { "Killer whale" }</li>
        <li>Level { 5 }: { "Velociraptor" }</li>
      </ul>
    );
  }
}