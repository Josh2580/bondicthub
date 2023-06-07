import React, { useState } from "react";
import { Button } from "../styles/Button";
import { AllCard } from "../styles/AllCard";
import { Card } from "../styles/Card";
import { Inputs } from "../styles/Input";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import ResponsiveStyle from "../styles/ResponsiveStyles";
import Logo from "../assets/LogoImg.jpeg";
import { ImageCard } from "../styles/Image";

const Header = () => {
  const [mobile, setMobile] = useState(true);

  const BurgerHandler = () => {
    setMobile((value) => !value);
  };

  return (
    <>
      <NavBar height={mobile ? "70px" : "100vh"}>
        <CardResponsive>
          <NavHashLink to="#/" smooth id="logoLink">
            <ImageCard
              src={Logo}
              alt="Bond"
              borderRadius="50%"
              width="50px"
              height="50px"
            />
          </NavHashLink>

          <Burger onClick={() => BurgerHandler()}>
            {mobile ? (
              <FaBars className="icon" />
            ) : (
              <FaTimes className="icon" />
            )}
          </Burger>
          <MyHamburger
            translate={mobile ? "translateY(-200%)" : "translateY(0%)"}
            onClick={() => BurgerHandler()}
          >
            <p>
              <NavHashLink
                to="#/"
                activeClassName="selected"
                activeStyle={{ color: "blue" }}
                smooth
              >
                Home
              </NavHashLink>
            </p>
            <p>
              <NavHashLink to="#about" smooth>
                About
              </NavHashLink>
            </p>
            <p>
              <NavHashLink to="#service" smooth>
                Services
              </NavHashLink>
            </p>
            <p>
              <NavHashLink to="#contact" smooth>
                Contact
              </NavHashLink>
            </p>
          </MyHamburger>
        </CardResponsive>
      </NavBar>
    </>
  );
};

const NavBar = styled(Card)`
  position: fixed;
  width: 100%;
  height: 70px;
  /* background-color: red; */
  top: 0;
  overflow-x: hidden;
  /* margin-top: 10px; */
  z-index: 30;
  @media (max-width: 900px) {
    height: ${(props) => props.height};
    transition: height 1s 0s ease;
  }
`;

const MyHamburger = styled(Card)`
  align-items: center;
  justify-content: space-between;
  width: 70%;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    &:hover {
      background: black;
      color: white;
      /* padding: 1rem; */
    }
  }

  p {
    background: red;
    /* height: 40px; */
  }

  @media (max-width: 900px) {
    /* background: #e6e6e6; */
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem;
    border-radius: 5px;
    top: 3rem;
    right: 0px;
    width: 100%;
    max-width: 400px;
    height: 90%;
    transform: ${(props) => props.translate};
    transition: transform 1s 0s ease;
    overflow-x: hidden;
  }
`;

const Burger = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-end;
    background: white;
    width: 100%;
    /* height: 50px; */
    .icon {
      height: 50px;
    }
  }
`;

const CardResponsive = styled(ResponsiveStyle)`
  display: flex;
  padding: 0px;
  justify-content: space-between;

  #logoLink {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 900px) {
      align-items: flex-start;
      padding-top: 10px;
    }
  }
`;

export default Header;
