import React from "react";
import FAQs from "../../components/events/econolympiad/FAQs";
import Hero from "../../components/events/econolympiad/Hero";
import Page from "../../components/utility/Page";

export default function econolympiad() {
  return (
    <Page
      title="EconOlympiad"
      desc="Youth Economics Initiative's (YEI) Flagship Competition, EconOlympiad, takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members."
    >
      <Hero />
      <FAQs />
    </Page>
  );
}
