import React from "react";
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./Components/Search"
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>deliciouss</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>  
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
`
const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  svg{
    font-size: 2rem;
  }
`

export default App;
