
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "components/headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "./images/logo-app.png";
import serverIllustrationImageSrc from "./images/main-promote.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

const PrimaryBackgroundContainer = tw.div`bg-green-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-green-400 lg:hocus:bg-green-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`flex items-center flex-col text-center`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-green-400 inline-block hocus:bg-green-500`;
const Image = tw.img`w-144 ml-auto`

export default ({
  heading = "Drop file to upload",
  description = "คุณกำลังกำลังประสบปัญหาเกี่ยวกับการดูแลต้นไม้อยู่หรือไม่ ถ้าหากคุณกำลังมีปัญหาเช่นนี้อยู่ เรามีทางออกให้ เพียงคุณอัพโหลดรูปภาพต้นไม้ของคุณ เราก็พร้อมที่จะวินิจฉัยโรคพร้อมกับวิธีการดูแลต้นไม้ของคุณรวมถึงอาการลักษณะโดยรวมลองใช้เลยตอนนี้",
  primaryButtonText = "Upload file",
  primaryButtonUrl = "#",
  imageSrc = serverIllustrationImageSrc,
}) => {

  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      dIP
    </LogoLink>
  )

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/components/innerPages/Use">การใช้งาน</NavLink>
      <NavLink href="/components/innerPages/Info">เกี่ยวกับระบบ</NavLink>
      <NavLink href="/components/innerPages/Login">เข้าสู่ระบบ</NavLink>
      <PrimaryLink href="/components/innerPages/Signup">สมัครสมาชิก</PrimaryLink>
    </NavLinks>
  ];
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl style={{ marginTop: 20 }}>

        <Header logoLink={logoLink} links={navLinks} />

        <Container style={{ textAlign: 'center' }} >
          <ContentWithVerticalPadding >

            <TextColumn>
              <form   action="/components/innerPages/PInfo">
                <input type="file" name="myImage" multiple />
                <p>Drag your files here or click in this area.</p>
                <button type="submit">Upload</button>
              </form>
            </TextColumn>


          </ContentWithVerticalPadding>

        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
