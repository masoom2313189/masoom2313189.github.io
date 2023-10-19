import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps. Here are
          some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "react" ? (
            <ToggleButton
              active
              value="react"
              onClick={() => setToggle("react")}
            >
              React Js
            </ToggleButton>
          ) : (
            <ToggleButton value="react" onClick={() => setToggle("react")}>
              React Js
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("android app")}
            >
              Frontend
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              Frontend
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend" ? (
            <ToggleButton
              active
              value="backend"
              onClick={() => setToggle("backend")}
            >
              Backend
            </ToggleButton>
          ) : (
            <ToggleButton value="backend" onClick={() => setToggle("backend")}>
              Backend
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
