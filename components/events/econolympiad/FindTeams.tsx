import React from "react";

export default function FindTeams() {
  return (
    <div className="bg-whitez">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Newly Piloted: A Way to Find Teams
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
          If you don’t yet have a team but would still like to compete, hop into
          our{" "}
          <a href="" target="_blank" className="green-link">
            Discord server
          </a>{" "}
          and react to the “finding teams” message in the EconOlympiad channel!
          You’ll receive a special role that will allow you to join a channel
          specifically for team finding, where you will be able to meet others
          who are looking for teammates as well.{" "}
          <p className="mt-2">
            If you are not able to give yourself the role via the above process
            for some reason, please fill out{" "}
            <a href="" target="_blank" className="green-link">
              this form
            </a>{" "}
            so we can manually give you the role. Happy team finding!
          </p>
        </div>
      </div>
    </div>
  );
}
