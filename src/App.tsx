import React, { useState } from "react";
import "./App.css";
import { ApiResponse, useApiGet } from "./DataFetcher";
import { PartyMembers } from "./PartyMembers";
import { PartySelector } from "./PartySelector";
import { transformData } from "./utils/data-transformer";

function App() {
  const [selectedParty, setSelectedParty] = useState("S");

  const url = "http://data.riksdagen.se/personlista/?utformat=json";
  const apiResponse: ApiResponse = useApiGet(url);

  const processedData =
    !apiResponse.loading && apiResponse.data
      ? transformData(apiResponse.data)
      : null;

  return (
    <div className="wrapper">
      <h1>Memebers of the parlament for {selectedParty} party</h1>
      {processedData ? (
        <>
          <PartySelector
            parties={processedData.parties}
            onChange={setSelectedParty}
          />
          <PartyMembers
            members={processedData.members.filter(
              (member) => member.party === selectedParty
            )}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
