import React from 'react';

export default class Cell extends React.Component {
  value() {
    return this.props.cell !== '-' ? this.props.cell : '';
  }

  render() {
    return (
      <div className="cell" onClick={this.props.move}>
        <p>{this.value()}</p>
      </div>
    );
  }
}
