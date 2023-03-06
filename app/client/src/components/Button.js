const ButtonPrimary = ({ bType, content, icon }) => {
  return (
    <button type={bType} className="button__primary">
      {content} {icon}
    </button>
  );
};

export default ButtonPrimary;
