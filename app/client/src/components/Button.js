const Button = ({ content, icon, styling }) => {
  return (
    <button className={styling}>
      <div className="button__wrapper">
        <h6>{content}</h6>
        {icon}
      </div>
    </button>
  );
};

export default Button;
