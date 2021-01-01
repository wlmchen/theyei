import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Profile({
  name,
  position,
  imgSrc,
  email,
  linkedin,
  github,
}: ProfileProps) {
  return (
    <li>
      <div className="space-y-6">
        <img
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={imgSrc}
          alt={name}
        />
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{name}</h3>
            <p className="text-yei-primary-darker">{position}</p>
          </div>
          <ul className="flex justify-center space-x-5">
            <li>
              <a
                target="_blank"
                href={linkedin}
                className="text-gray-500 hover:text-gray-500"
              >
                <span className="sr-only">linkedin</span>
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={`mailto:${email}`}
                className="text-gray-500 hover:text-gray-500"
              >
                <span className="sr-only">email</span>
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </a>
            </li>
            {github && (
              <li>
                <a
                  target="_blank"
                  href={github}
                  className="text-gray-500 hover:text-gray-500"
                >
                  <span className="sr-only">github</span>
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
}

type ProfileProps = {
  name: string;
  position: string;
  imgSrc: string;
  email: string;
  linkedin: string;
  github?: string;
};
