import React from 'react'

import {exec, team} from '../../../data/people/team'
import Profile from './Profile'

export default function Members({currentDepartment}: MembersProps) {
  return (
    <div className="bg-gray-100 py-10 px-5">
      {/* {currentDepartment === "All" ? ( */}
        <div>
          <h2 className="text-center text-5xl text-black font-extrabold pt-6">Executive Board</h2>
          <div className="flex flex-row flex-wrap max-w-7xl m-auto items-start justify-center gap-6 mt-14">
          {exec.map((member: any) => {
              let key = member.name.replace(/\s+/g, '-').toLowerCase()
              return (
                <Profile
                  key={key}
                  type="exec"
                  imgSrc={`/img/people/team/${key}.jpg`}
                  name={member.name}
                  positions={member.positions}
                  linkedin={member.linkedin}
                  github={member.github}
                  email={
                    member.email
                      ? member.email
                      : `${member.name.split(' ')[0].toLowerCase()}@theyei.org`
                  }
                />
              )
            })}</div>
            <h2 className="text-center text-5xl text-black font-extrabold pt-28">Our Staff</h2>
            <div className="flex flex-row flex-wrap max-w-7xl m-auto items-start justify-center gap-6 mt-14">
            {team.map((member: any) => {
                let key = member.name.replace(/\s+/g, '-').toLowerCase()
                return (
                  <Profile
                    key={key}
                    type="staff"
                    imgSrc={`/img/people/team/${key}.jpg`}
                    name={member.name}
                    positions={member.positions}
                    linkedin={member.linkedin}
                    github={member.github}
                    email={
                      member.email
                        ? member.email
                        : `${member.name.split(' ')[0].toLowerCase()}@theyei.org`
                    }
                  />
                )
              })}</div>
        </div>
      {/* ) : (
        <div>
          other
        </div>
      )} */}
      {/* <div className="max-w-7xl mx-auto py-8 px-4 text-left sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12">
          <ul className="mx-auto flex md:flex-wrap align-middle justify-center flex-col md:flex-row lg:max-w-7xl">
            {team.map((member: any) => {
              let key = member.name.replace(/\s+/g, '-').toLowerCase()
              return (
                <Profile
                  key={key}
                  imgSrc={`/img/people/team/${key}.jpg`}
                  name={member.name}
                  positions={member.positions}
                  linkedin={member.linkedin}
                  github={member.github}
                  email={
                    member.email
                      ? member.email
                      : `${member.name.split(' ')[0].toLowerCase()}@theyei.org`
                  }
                />
              )
            })}
          </ul>
        </div>
      </div> */}
    </div>
  )
}

type MembersProps = {
  currentDepartment: String;
}
