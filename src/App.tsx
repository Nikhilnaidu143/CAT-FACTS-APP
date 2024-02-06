import axios from "axios";
import CatFactView from "./components/cat-fact-view/CatFactView";
import SavedCatFacts from "./components/saved-cat-facts/SavedCatFacts";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [currentCatFact, setCurrentCatFact] = useState<string>("");
  const [savedCatFacts, setSavedCatFacts] = useState<string[]>([]);
  
  const fetchRandomCatFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setCurrentCatFact(response.data.fact);
    } catch (error) {
      console.log("Error while fetching random cat fact: ", error);
    }
  };

  const saveCatFact = () => {
    if (savedCatFacts.includes(currentCatFact)) {
      return;
    }
    const updatedSavedCatFacts = [...savedCatFacts, currentCatFact];
    setSavedCatFacts(updatedSavedCatFacts);

    localStorage.setItem("savedCatFacts", JSON.stringify(updatedSavedCatFacts));
  };

  useEffect(() => {
    const storedCatFacts = localStorage.getItem("savedCatFacts");

    if (storedCatFacts) {
      setSavedCatFacts(JSON.parse(storedCatFacts));
    }

    fetchRandomCatFact();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <CatFactView
              catFact={currentCatFact}
              onLoadNewFact={fetchRandomCatFact}
              onSaveCatFact={saveCatFact}
            ></CatFactView>
          </div>
          <div className="col-6">
            <SavedCatFacts savedCatFacts={savedCatFacts}></SavedCatFacts>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
