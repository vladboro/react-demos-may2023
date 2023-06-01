const Link = ({ href, className, text, onClick }) => {
  const onLinkClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
    onClick(href);
  };
  return (
    <div>
      <a href={href} className={className} onClick={(e) => onLinkClick(e)}>
        {text}
      </a>
    </div>
  );
};

export default Link