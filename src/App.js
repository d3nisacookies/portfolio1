import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';
import backgroundImage from './images/background.jpg'
function App() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };


  return (
    <div className="App" style={styles}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;