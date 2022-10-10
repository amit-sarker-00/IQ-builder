import React from "react";

const Blog = () => {
  return (
    <div className="mx-20 my-10">
      <div className="text-center font-bold text-5xl underline mb-10">
        <h2>Question Part</h2>
      </div>
      <div className="my-10">
        <h2 className="text-3xl">Q-1:What is the purpose of react router?</h2>
        <p>
          <strong>
            <span className="text-2xl">Ans</span>: Routing is a process in which
            a user is directed to different pages based on their action or
            request. ReactJS Router is mainly used for developing Single Page
            Web Applications. React Router is used to define multiple routes in
            the application. When a user types a specific URL into the browser,
            and if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route. React Router is a
            standard library system built on top of the React and used to create
            routing in the React application using React Router Package. It
            provides the synchronous URL on the browser with data that will be
            displayed on the web page. It maintains the standard structure and
            behavior of the application and mainly used for developing single
            page web applications.
          </strong>
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-3xl">Q-1:How does context API work?</h2>
        <p>
          <strong>
            <span className="text-2xl">Ans</span>: The Context API can be used
            to share data with multiple components, without having to pass data
            through props manually. For example, some use cases the Context API
            is ideal for: theming, user language, authentication, etc. To start
            with the Context API, the first thing we need to do is create a
            context using the createContext function from React.The
            createContext function accepts an initial value, but this initial
            value is not required.After creating your context, that context now
            has two React components that are going to be used: Provider and
            Consumer.The Provider component is going to be used to wrap the
            components that are going to have access to our context.The Provider
            component receives a prop called value, which can be accessed from
            all the components that are wrapped inside Provider, and it will be
            responsible to grant access to the context data. After you wrap all
            the components that are going to need access to the context with the
            Provider component, you need to tell which component is going to
            consume that data.
          </strong>
        </p>
      </div>
      <div>
        <h2 className="text-3xl">Q-1:What do you know About useRef?</h2>
        <p>
          <strong>
            <span className="text-2xl">Ans</span>: TThe useRef is a hook that
            allows to directly create a reference to the DOM element in the
            functional component.The useRef Hook allows you to persist values
            between renders. It can be used to store a mutable value that does
            not cause a re-render when update.A unique way to implement a useRef
            hook is to use it to store values instead of DOM references. These
            values can either be a state that does not need to change too often
            or a state that should change as frequently as possible but should
            not trigger full re-rendering of the component.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Blog;
