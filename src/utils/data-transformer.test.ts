import { assert } from "console";
import { transformData } from "./data-transformer";

test("transformer gets the right number of parties", () => {
  const apiResponse = {
    personlista: {
      person: [
        {
          hangar_guid: "9b9ed4ec-b46b-4c1c-85ce-0f8edda77518",
          sourceid: "b0cce726-5e23-4d21-a609-95071f8820f0",
          intressent_id: "0512510717328",
          hangar_id: "5003992",
          fodd_ar: "1987",
          kon: "kvinna",
          efternamn: "Busch",
          tilltalsnamn: "Ebba",
          sorteringsnamn: "Busch,Ebba",
          iort: "",
          parti: "KD",
          valkrets: "Västra Götalands läns östra",
          status: "Tjänstgörande riksdagsledamot",
          person_url_xml:
            "http://data.riksdagen.se/person/b0cce726-5e23-4d21-a609-95071f8820f0",
          bild_url_80:
            "http://data.riksdagen.se/filarkiv/bilder/ledamot/b0cce726-5e23-4d21-a609-95071f8820f0_80.jpg",
          bild_url_192:
            "http://data.riksdagen.se/filarkiv/bilder/ledamot/b0cce726-5e23-4d21-a609-95071f8820f0_192.jpg",
          bild_url_max:
            "http://data.riksdagen.se/filarkiv/bilder/ledamot/b0cce726-5e23-4d21-a609-95071f8820f0_max.jpg",
          personuppdrag: {
            uppdrag: [
              {
                organ_kod: "kam",
                roll_kod: "Riksdagsledamot",
                ordningsnummer: "340",
                status: "Tjänstgörande",
                typ: "kammaruppdrag",
                from: "2018-09-24",
                tom: "2022-09-26 10:59:00",
                uppgift: [{}],
                intressent_id: "0512510717328",
                hangar_id: "5003992",
                sortering: "10",
                organ_sortering: "10",
                uppdrag_rollsortering: "60",
                uppdrag_statussortering: "10",
              },
              {
                organ_kod: "KD",
                roll_kod: "Ledamot",
                ordningsnummer: "12",
                status: "",
                typ: "Riksdagsorgan",
                from: "2018-10-09",
                tom: "2022-10-09 23:59:00",
                uppgift: ["Krigsdelegationen"],
                intressent_id: "0512510717328",
                hangar_id: "5003992",
                sortering: "30",
                organ_sortering: "300",
                uppdrag_rollsortering: "90",
                uppdrag_statussortering: "90",
              },
              {
                organ_kod: "UN",
                roll_kod: "Ledamot",
                ordningsnummer: "9",
                status: "",
                typ: "Riksdagsorgan",
                from: "2018-10-02",
                tom: "2022-10-02 23:59:00",
                uppgift: ["Utrikesnämnden"],
                intressent_id: "0512510717328",
                hangar_id: "5003992",
                sortering: "30",
                organ_sortering: "300",
                uppdrag_rollsortering: "90",
                uppdrag_statussortering: "90",
              },
              {
                organ_kod: "KD",
                roll_kod: "Partiledare",
                ordningsnummer: "0",
                status: "",
                typ: "partiuppdrag",
                from: "2015-04-25",
                tom: "",
                uppgift: ["Kristdemokraterna"],
                intressent_id: "0512510717328",
                hangar_id: "5003992",
                sortering: "20",
                organ_sortering: "300",
                uppdrag_rollsortering: "90",
                uppdrag_statussortering: "90",
              },
              {
                organ_kod: "KD",
                roll_kod: "Partiledare",
                ordningsnummer: "0",
                status: "",
                typ: "partiuppdrag",
                from: "2015-04-25",
                tom: "",
                uppgift: ["Kristdemokraterna"],
                intressent_id: "0512510717328",
                hangar_id: "5003992",
                sortering: "20",
                organ_sortering: "300",
                uppdrag_rollsortering: "90",
                uppdrag_statussortering: "90",
              },
            ],
          },
          personuppgift: {
            uppgift: [
              {
                kod: "Uppdrag inom riksdag och regering",
                uppgift: [
                  "Riksdagsledamot 18-. Ledamot Utrikesnämnden 18- och krigsdelegationen 18-. Partiledare Kristdemokraterna 15-.",
                ],
                typ: "biografi",
                intressent_id: "",
                hangar_id: "5003992",
              },
              {
                kod: "Utbildning",
                uppgift: [
                  "Grundskola. Gymnasieskola, IB-programmet, Uppsala. Freds- och konfliktkunskap, Uppsala universitet.",
                ],
                typ: "biografi",
                intressent_id: "",
                hangar_id: "5003992",
              },
              {
                kod: "Anställningar",
                uppgift: [
                  "Utomhusmålare. Kommunpolitisk sekreterare, Kristdemokraterna 06-10. PR-konsult. Kommunalråd, Uppsala kommun 10-15.",
                ],
                typ: "biografi",
                intressent_id: "",
                hangar_id: "5003992",
              },
              {
                kod: "Kommunala uppdrag",
                uppgift: ["Kommunalråd, Uppsala 10-15."],
                typ: "biografi",
                intressent_id: "",
                hangar_id: "5003992",
              },
              {
                kod: "Uppdrag inom förenings- och näringsliv",
                uppgift: [
                  "Vice förbundsordförande KDU 08-11. Ledamot Kristdemokraternas partistyrelse 13-, Partiordförande, Kristdemokraterna 15-. ",
                ],
                typ: "biografi",
                intressent_id: "",
                hangar_id: "5003992",
              },
              {
                kod: "Officiell e-postadress",
                uppgift: ["ebba.busch[på]riksdagen.se"],
                typ: "eadress",
                intressent_id: "0512510717328",
                hangar_id: "5003992",
              },
              {
                kod: "KandiderarINastaVal",
                uppgift: ["true"],
                typ: "val",
                intressent_id: "0512510717328",
                hangar_id: "5003992",
              },
            ],
          },
        },
      ],
    },
  };

  const expectedPersonList = [
    {
      firstName: "Ebba",
      lastName: "Busch",
      party: "KD",
      imageUrl:
        "http://data.riksdagen.se/filarkiv/bilder/ledamot/b0cce726-5e23-4d21-a609-95071f8820f0_80.jpg",
      position: "Tjänstgörande riksdagsledamot",
    },
  ];
  const transformedData = transformData(apiResponse);
  const actualPersonList = transformedData.members;

  expect(actualPersonList).toEqual(expectedPersonList);
});

export {};
