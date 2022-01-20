import React, {useState} from 'react';
import About from "../About/About";
import Discover from "../Discover/Discover";
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Services from "../Services/Services";
import SignUp from "../SignUp/SignUp";

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavList = () => {
      setIsOpen(!isOpen)
    }
    return (
        <React.Fragment>
            <Nav toggleNavList={toggleNavList} isOpen={isOpen}/>
            <Header />
            <About />
            <Discover />
            <Services />
            <SignUp />
        </React.Fragment>
    )
}

export default Index;