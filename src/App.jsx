import '@mantine/core/styles.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contacts';
import Footer from './components/footer';
import Skills from './components/skills';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='bg-orange-500'>

    <BrowserRouter>
    <Header/>
    <Home/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contacts" element={<Contacts/>}/>

    </Routes>
    <Footer/>


    </BrowserRouter>

    </div>
    )
}

export default App;
