import Button from "../components/Button";

const Project = ({ data, image }) => {
  return (
    <div>
      <div className="project__double-cols">
        {/* <div className="project__imageContainer"> */}
        <div className="project__column">
          <img
            className="project__img"
            src={image}
            width={data.image.width}
            height={data.image.height}
            alt={data.image.alt}
          />
        </div>
        {/* <div className="project__textContainer"> */}
        <div className="project__column">
          <h3>{data.title}</h3>
          <p>{data.abstract}</p>
          <ul>
            <li>{data.point1}</li>
            <li>{data.point2}</li>
            <li>{data.point3}</li>
          </ul>
        </div>
      </div>
      <div className="project__summary">
        <p className="bold">{data.summary}</p>
        {/* <p>{data.stack}</p> */}
        <div className="project__stackWrapper">
          {data.stack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="project__linksWrapper">
          <Button content={"GitHub"} />
          <Button content={"Link"} />
          <Button content={"Contributions"} />
        </div>
      </div>
    </div>
  );
};

export default Project;
