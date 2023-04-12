import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl font-medium">When should you use context API?</h2>
      <p>
        We know that, to props drill we need to send a prop from his
        grandparents to child component. So to send props one by one from
        granparent to child is quite troublesome.To solve this issue we should
        use ContextAPI.
        <br />
        And also if we dont have state management library like Redux, we can use
        UseContext API to easily manage state quickly, though it has it's
        limitation then redux.
      </p>
      <h2 className="text-3xl font-medium">What is a custom hook?</h2>
      <p>
        This custom hook name indicating it can be creatd by ourselves. It is
        used to call other hooks.When we need to use some codes to another part
        again we can use custom hook.So if we need to create a resuable function
        like fetching data from API, which could be used in other component we
        do it by custom hook
      </p>
      <h2 className="text-3xl font-medium">What is useRef?</h2>

      <p>
        useRef is also a rect hook which is used in a functional component to
        create and keep mutable variables. With it we can keep a value in dom
        object who will not trigger rerender. The purpose of useRef is to
        accessed react Element. <br />
        Normally value that keep changing we keep them of react hooks to
        rerender on every update. In a functional component, if we update a
        react state with hook like useState() etc. it will rerender the DOM.And
        also another way to keep mutable value is using useRef(), if we take a
        instance variable using useRef(), and if we change the current property
        of instance variable it won't rerender.
      </p>
      <h2 className="text-3xl font-medium">What is useMEmo?</h2>
      <p>
        {" "}
        UseMemo hook is used to avaoid unnecessary rerender . This useMemo hook
        memorize function so that the function can not call at every render but
        only if the input value is changed. We know that if you define a
        function react will call it in every render, but using usememo we can
        avoid it.So if we want to render only the component which value is
        changed,we use useMemo()
      </p>
      <p></p>
    </div>
  );
};

export default Blog;
