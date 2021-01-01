import React from "react";
import Benefits from "../../components/clubs/index/Benefits";
import CTA from "../../components/clubs/index/CTA";
import Hero from "../../components/clubs/index/Hero";
import Intro from "../../components/clubs/index/Intro";
import Page from "../../components/utility/Page";

export default function clubs() {
  return (
    <Page
      title="Clubs"
      desc="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
    >
      <Hero />
      <Intro />
      <Benefits />
      <CTA />
    </Page>
  );
}
