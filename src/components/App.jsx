import React from "react";
import Info from "./Info";
import Contact from "./Contact";
import Projects from "./projects"

function App(){
    return  <div>
                <section className="first-section">
                   <Info />
                   <Contact />
                </section>
                    <Projects />
            </div>
}

export default App;