import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>When should you use context API?</h2>
      <p>
        We know that to props drill we need to send a prop from his grand child
        ,so to make an alternative of it we se ContextAPI. TO use it: First we
        need to create context using CreateContext method. Then bound it with
        Context Provider.Now we can put any value like array,string ,object in
        our context provider. then we can read the value within any component by
        using useContext.
      </p>
    </div>
  );
};

export default Blog;
