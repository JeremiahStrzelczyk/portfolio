/**
 * Two button styles currently exist
 */

const ButtonPrimary = ({ bType, content, icon, link }) => {
  return (
    <a href={link}>
      <button
        // tabindex="-1"
        // aria-hidden="true"
        type={bType}
        className="button__primary"
      >
        <div className="button__content">
          {content} {icon}
        </div>
      </button>
    </a>
  );
};

const ButtonSecondary = ({ bType, content, icon, link, ariaLabel }) => {
  return (
    <a href={link} aria-label={ariaLabel} target="_blank" rel="noreferrer">
      <button
        tabindex="-1"
        aria-hidden="true"
        type={bType}
        className="button__secondary"
      >
        <div aria-hidden="true" className="button__content">
          {content} {icon}
        </div>
      </button>
    </a>
  );
};

export { ButtonPrimary, ButtonSecondary };
