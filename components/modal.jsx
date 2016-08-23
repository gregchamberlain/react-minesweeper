import React from 'react';

const Modal = ({won, restart, undo}) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <h3>{ won ? "You Won!" : "You lost!" }</h3>
      <button onClick={restart}>Play again</button>
      { !won ? <button onClick={undo}>Undo</button> : null }
    </div>
  </div>
);

export default Modal;
