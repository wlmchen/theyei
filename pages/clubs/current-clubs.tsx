import React from "react";
import Schools from "../../components/clubs/current-clubs/Schools";
import Page from "../../components/utility/Page";

export default function currentclubs() {
  return (
    <Page
      title="Current Clubs"
      desc="YEI EconClubs is the premier high school economics club program for students who want to supercharge their economics journey. View YEI's current list of clubs."
    >
      <Schools />
    </Page>
  );
}
