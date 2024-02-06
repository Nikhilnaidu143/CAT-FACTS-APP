interface CatFactViewProps {
  catFact: string;
  onLoadNewFact: () => void;
  onSaveCatFact: () => void;
}

function CatFactView({
  catFact,
  onLoadNewFact,
  onSaveCatFact,
}: CatFactViewProps) {
  return (
    <>
      <div className="card">
        <div className="card-body" style={{ backgroundColor: "#F4F1F1" }}>
          <div className="card-header">
            <h1>Random Cat Facts</h1>
          </div>
          <div className="card-text">
            <p>{catFact}</p>

            <div className="row">
              <button
                className="btn btn-secondary col-6"
                onClick={onLoadNewFact}
              >
                Load New Fact
              </button>
              <button
                className="btn btn-secondary col-6"
                onClick={onSaveCatFact}
              >
                Save Cat Fact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatFactView;
