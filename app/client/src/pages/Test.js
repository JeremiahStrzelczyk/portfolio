const Test = () => {
  return (
    <div>
      <div className="project__content">
        <h3>SUBTITLE</h3>
        <p>Paragraph</p>
        <div className="project__double-cols">
          <div className="project__column"></div>

          <div className="project__column"></div>
        </div>
        {/* BEGINNING SECTION */}
        <h4>SECTION_TITLE</h4>
        <div className="project__double-cols">
          <div className="project__column">
            <ul>
              <li>LIST</li>
              <li>LIST</li>
              <li>LIST</li>
              <li>LIST</li>
            </ul>
          </div>

          <div className="project__column">
            <p>PARAGRAPH</p>
          </div>
        </div>
        {/* END SECTION */}
      </div>
    </div>
  );
};

export default Test;
