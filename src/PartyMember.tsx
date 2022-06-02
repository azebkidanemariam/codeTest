import "./App.css";
import { Member } from "./PartyMembers";

export interface PartyMemberProps {
  member: Member;
}
export function PartyMember(props: PartyMemberProps) {
  const { firstName, lastName, imageUrl, position, party } = props.member;
  return (
    <div key={lastName} className="member-card">
      <img src={imageUrl} alt={lastName} className="img"/>
      <h4>
        {lastName}, {firstName}
      </h4>
      <h6>
        {position} from {party}
      </h6>
      
    </div>
  );
}
