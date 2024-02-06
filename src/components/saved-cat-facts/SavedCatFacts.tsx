interface SavedCatFactsProps {
  savedCatFacts: string[];
}

function SavedCatFacts({ savedCatFacts }: SavedCatFactsProps) {
  const savedList =
    savedCatFacts.length == 0
      ? "No Cat Facts Saved...!"
      : savedCatFacts.map((fact, index) => (
          <li className="list-group-item" key={index}>
            {(index+1) + ") " +fact}
          </li>
        ));
  return (
    <>
      <div className="card">
        <div className="card-body" style={{ backgroundColor: "#F4F1F1" }}>
          <div className="card-header">
            <h1>Saved Cat Facts</h1>
          </div>
          <div className="card-text">
            <ul
              className="list-group"
              style={{ overflowY: "scroll", maxHeight: 600 }}
            >
              {savedList}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedCatFacts;
