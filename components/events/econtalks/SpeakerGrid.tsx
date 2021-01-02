import React from "react";
import speakers from "../../../data/people/speakers";
import Speaker from "./Speaker";

export default function SpeakerGrid() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-14 mb-2">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Previous Speakers
            </h2>
            {/* <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p> */}
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {speakers.map(({ name, occupation }) => {
              let key = name.replace(/[\W_]+/g, "-").toLowerCase();
              return (
                <Speaker
                  key={key}
                  name={name}
                  occupation={occupation}
                  imgSrc={`/img/people/speakers/${key}.jpg`}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
