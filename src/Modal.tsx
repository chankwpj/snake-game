import React from 'react';
import Popup from 'reactjs-popup';

interface Props {
  resetCommand: () => void;
  score: Number;
}

class Modal extends React.Component {

  render() {

    const { score, resetCommand } = this.props as Props;

    return (
      <Popup
        defaultOpen={true}
        modal={true}
        onClose={() => {
          resetCommand();
        }}
      >
        {close => (
          <div className="modal">
            <div className="header">------------ Game Over ------------</div>
            <div className="content">
              Your Score is {score}!
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >Try Again
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
  }

}

export default Modal;