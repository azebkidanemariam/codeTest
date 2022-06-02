import { Member } from "../PartyMembers";

interface Person {
  parti: string;
  tilltalsnamn: string;
  efternamn: string;
  bild_url_80: string;
  status: string;
}
interface PersonLista {
  person: Person[];
}

export interface ResponseWrapper {
  personlista: PersonLista;
}
interface TransformedData {
  parties: string[];
  members: Member[];
}
export function transformData(
  responseObject: ResponseWrapper
): TransformedData {
  let parties: string[] = [];
  const members: Member[] = responseObject.personlista.person.map((p) => {
    const party = p.parti;
    const firstName = p.tilltalsnamn;
    const lastName = p.efternamn;
    const imageUrl = p.bild_url_80;
    const position = p.status;

    if (!parties.includes(party)) {
      parties.push(party);
    }
    return { party, firstName, lastName, imageUrl, position };
  });
  return { parties, members };
}
