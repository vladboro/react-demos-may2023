const ModalDialog = ({ onClose }) => {
  return (
    <div className="background">
    <div className="ui fullscreen modal" style={{ display: "block" }}>
      <i className="close icon" onClick={()=>onClose()}></i>
      <div className="header">Modal Dialog</div>
      <div className="content">Dialog content</div>
      <div className="actions">
        <div className="ui black deny button">Nope</div>
        <div
          className="ui positive right labeled icon button"
          onClick={() => onClose()}
        >
          Yep, that's me
          <i className="checkmark icon"></i>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModalDialog;
