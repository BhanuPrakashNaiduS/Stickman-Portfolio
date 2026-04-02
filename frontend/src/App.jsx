/** This the main/root component
 * This is the controller of UI
 * React does: index.html -> main.jsx -> App.jsx -> UI
 * 
 */

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import useScroll from "./hooks/useScroll";
import Stickman from "./components/Stickman";

function App() {
  const scrollY = useScroll();

  //Defines what appears on screen
  //Inernally - JSX is converted to DOM (Document Object Model) elements that the browser can render.
  return (
    /*fixed scroll display at top of page, scrollY is the value from useScroll hook*/
    //Rendering components: Home, About, Project are rendered in order. Each component can have its own state and logic, but they all contribute to the overall UI of the application.
    /*Virtual DOM: React uses a virtual DOM to efficiently update the UI. When state changes (like scrollY), React compares the new virtual DOM with the previous one 
      and only updates the parts of the actual DOM that have changed, improving performance. 
      A light weight copy of the real DOM, allowing React to optimize updates and rendering.
      When state changes, React updates the virtual DOM first, then efficiently updates the real DOM based on the differences.
    */
    <div>
      <h2 style={{position: "fixed", top: 0, color: "white"}}>
        Scroll: {scrollY}
      </h2>

      {/* Stickman X */}
      <Stickman x={100} y={200} label="X" />
      {/* Stickman Y */}
      <Stickman x={300} y={200} label="Y" />

      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;

/**
 * Flow : Scroll -> Event -> State Update -> Re-render -> UI Update
 */