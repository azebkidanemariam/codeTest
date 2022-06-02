import React from "react";
import { PartyMember } from "./PartyMember";
import "./App.css";

export interface Member {
  party: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  position: string;
}

export interface PartyMembersProp {
  members: Member[];
}

export function PartyMembers(props: PartyMembersProp) {
  const { members } = props;

  return (
   

    <div className="list-container">
      {members.map((member) => (
        <PartyMember member={member} />
      ))}
    </div>
    
  );
}
