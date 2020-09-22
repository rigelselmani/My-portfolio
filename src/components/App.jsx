import React from "react";
import Info from "./Info";
import Contact from "./Contact";
import Projects from "./projects"

function App(){
    return <section className="first-section">
               <Info />
               <Contact />
               <Projects />
           </section>
}

export default App;