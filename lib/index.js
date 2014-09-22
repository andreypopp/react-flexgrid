/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react');
var ReactStyle  = require('react-style');

var Container = React.createClass({

  render() {
    var styles = [].concat(this.style, this.props.styles);
    return (
      <div styles={styles}>
        {this.props.children}
      </div>
    );
  },

  style: ReactStyle({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: '-0.5rem',
    marginLeft: '-0.5rem'
  })
});

var Block = React.createClass({

  render() {
    var width;
    if (typeof this.props.width === 'number') {
      width = ReactStyle({flex: this.props.width});
    } else if (this.props.width) {
      width = ReactStyle({
        flexBasis: this.props.width,
        maxWidth: this.props.width
      });
    } else {
      width = ReactStyle({flex: 1});
    }
    return (
      <div styles={[this.style, width]}>
        <div styles={this.props.styles}>
          {this.props.children}
        </div>
      </div>
    );
  },

  style: ReactStyle({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0,
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem'
  })
});

module.exports = {Container, Block};
