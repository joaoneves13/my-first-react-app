import React from "react";

export default class ArticleList extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        image: "https://coding.images/react.jpg",
        title: "What is React all about?",
        description: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
      },
      {
        id: 2,
        image: "https://animal.images/kid.jpg",
        title: "A lovely kid",
        description: "In fact, a kid is also the name of a baby goat!"
      },
      {
        id: 3,
        image: "https://another.nonexistent/image.jpg",
        title: "On placeholder image URLs",
        description: "So yeah, you won't be able to look these images up. They're placeholders"
      }
    ]
  };

  render() {
    return (
      <div>
        <p>Here's a lovely list of articles, for your reading pleasure:</p>
       {this.state.articles.map(articles => {
       return <div>
           <h1>{articles.title}</h1>
           <h2>{articles.image}</h2>
      </div>

       })}
       </div>
    );
  }
}