import React, { useDeferredValue, useTransition } from "react";
import user from "../data/user";


const bio = !!user.bio
console.log(bio)

function HasBio(bio){
  if (bio){
    return <p>{user.bio}</p>
  }
}

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <HasBio />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={user.links.github}>{user.links.github}</a>
      <a href={user.links.linkedin}>{user.links.linkedin}</a>
    </div>
  );
}

export default About;
