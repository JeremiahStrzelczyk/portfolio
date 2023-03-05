import Button from "../components/Button";

const Project = ({
  title,
  abstract,
  point1,
  point2,
  point3,
  summary,
  stack,
  contributions,
}) => {
  return (
    <div>
      <div className="double-cols">
        <div className="ProjectImageContainer">Image</div>
        <div className="ProjectTextContainer">
          <h3>{title}</h3>
          <p>{abstract}</p>
          <ul>
            <li>
              <p>{point1}</p>
            </li>
            <li>{point2}</li>
            <li>
              <p>{point3}</p>
            </li>
          </ul>
          <p>{summary}</p>
          <p>{stack}</p>
          <div className="ProjectLinksContainer">
            <Button content={"GitHub"} />
            <Button content={"Link"} />
            <Button content={"Contributions"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
