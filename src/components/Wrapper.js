const Wrapper = ({ children, onClick }) => {
  return (
    <div className="background" onClick={onClick}>
      <div className="clip">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
