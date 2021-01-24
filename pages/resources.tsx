import React from "react";
import Demos from "../components/resources/Demos";
import Hero from "../components/resources/Hero";
import Page from "../components/utility/Page";

export default function resources() {
  return (
    <Page
      title="Resources"
      desc="Youth Economics Initiative (YEI) provides numerous high quality resources for both AP and IB curriculums."
    >
      <Hero />
      <Demos />
    </Page>
  );
}
