const ButtonPrimary = ({ content, icon, link }) => {
  return (
    <a role="button" href={link} className="button__link button__primary">
      {content} {icon}
    </a>
  );
};

const ButtonForm = ({ content, icon }) => {
  return (
    <button className="button__link button__primary">
      {content} {icon}
    </button>
  );
};

const ButtonSecondary = ({ content, icon, link, ariaLabel }) => {
  return (
    <a
      href={link}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      title="This link will open in a new tab"
      className="button__link button__secondary"
    >
      {content} {icon}
    </a>
  );
};

export { ButtonPrimary, ButtonSecondary, ButtonForm };
