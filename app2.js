import React from "react";
import ReactDOM from "react-dom/client";

// *! JSX
//Using JSX from now on. Because React.createElement() is not efficient.
//JSX is converted to React.createElement() by Babel.
//JSX is a syntactic sugar for React.createElement()
//JSX is not HTML, it is a syntax extension for JavaScript.
//JSX is closer to JavaScript than HTML.
//JSX is faster because it performs optimization while compiling code to JavaScript.
//JSX is also easier to write and understand.
//JSX can be used in React Native.
//JSX is not a necessity to write React code. But it is recommended.
//JSX is optional but recommended.
//JSX is a syntax extension for JavaScript.
//JSX is used with React to describe what the UI should look like.

var jsxHeading = <h1 id="heading">Namaste React from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

/** REACT COMPONENTS
 * 1. Functional Components (New)
 * 2. Class Components (Old)
 * ! class component is old now. Functional components are used now.
 * We will still learn class based components because there are many old projects that use class based components. And there are still some interview questions on class based components.
 */

// * A function which returns JSX is called functional component.
// *! variable name start with capital letter
const HeadingComponent = () => {
  return <h1 className="headings">Namaste React from JSX</h1>;
};

const HeadingComponent2 = () => (
  <h1 className="headings">Namaste React from JSX</h1>
);

// * Render a functional component
const secondRoot = ReactDOM.createRoot(document.getElementById("secondRoot"));
const thirdRoot = ReactDOM.createRoot(document.getElementById("thirdRoot"));
secondRoot.render(<HeadingComponent />);
thirdRoot.render(<HeadingComponent2 />);

const ExerciseComponent = () => {
  return (
    <div>
      <p>Hi This is Om Raja from Functional component</p>
      {jsxHeading}
    </div>
  );
};
const CompositionComponent = () => {
  return (
    <div>
        // * Three ways of using Functional component
      <ExerciseComponent />
      <ExerciseComponent></ExerciseComponent>
      {ExerciseComponent()}
      <h2>Heading second by composition component</h2>
    </div>
  );
};

const fourthRoot = ReactDOM.createRoot(document.getElementById("fourthRoot"));
fourthRoot.render(<CompositionComponent />);
