import React from "react";
import Profile from "./Profile";

import team from "../../../data/people/team";

export default function Members() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul className="mx-auto flex md:flex-wrap align-middle justify-center flex-col md:flex-row lg:max-w-5xl">
            {team.map((member: any) => {
              let key = member.name.replace(/\s+/g, "-").toLowerCase();
              return (
                <Profile
                  key={key}
                  imgSrc={`/img/people/team/${key}.jpg`}
                  name={member.name}
                  position={member.positions.join(", ")}
                  linkedin={member.linkedin}
                  github={member.github}
                  email={
                    member.email
                      ? member.email
                      : `${member.name.split(" ")[0].toLowerCase()}@theyei.org`
                  }
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
