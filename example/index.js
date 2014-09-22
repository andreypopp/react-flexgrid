/**
 * @jsx React.DOM
 */
'use strict';

require('./index.css');

var React         = require('react');
var ReactStyle    = require('react-style');
var ReactFlexgrid = require('react-flexgrid');

function theme(BaseComponent, styles) {
  return React.createClass({
    displayName: BaseComponent.type.displayName,
    render() {
      return this.transferPropsTo(
        <BaseComponent styles={[styles, this.props.styles]}>
          {this.props.children}
        </BaseComponent>
      );
    }
  });
}

var Container = ReactFlexgrid.Container;

var Block = theme(ReactFlexgrid.Block, ReactStyle({
  fontFamily: '"Menlo", "Monaco", monospace',
  background: '#000',
  color: '#fff',
  padding: '0.5rem',
  marginBottom: '1rem',
  fontSize: '80%'
}));

var ReactFlexgridExample = React.createClass({

  styles: ReactStyle({
    width: '80%',
    padding: '1rem',
    fontSize: '100%'
  }),

  render() {
    return (
      <div styles={this.styles}>
        <h1>React Flexgrid</h1>
        <h2>Let the grid figure out the widths of blocks automatically</h2>
        <Container>
          <Block>{`<Block />`}</Block>
          <Block>{`<Block />`}</Block>
        </Container>
        <Container>
          <Block>{`<Block />`}</Block>
          <Block>{`<Block />`}</Block>
          <Block>{`<Block />`}</Block>
        </Container>
        <h2>Specify block width with the fractions of total width</h2>
        <Container>
          <Block width={2}>{`<Block width={2} />`}</Block>
          <Block width={2}>{`<Block width={2} />`}</Block>
          <Block width={1}>{`<Block width={1} />`}</Block>
        </Container>
        <Container>
          <Block width={2}>{`<Block width={2} />`}</Block>
          <Block>{`<Block />`}</Block>
          <Block>{`<Block />`}</Block>
        </Container>
        <h2>You can also fix some block's width with percentage</h2>
        <Container>
          <Block width="30%">{`<Block width="30%" />`}</Block>
          <Block>{`<Block />`}</Block>
          <Block>{`<Block />`}</Block>
        </Container>
        <h2>Or even specify block width in pixels</h2>
        <Container>
          <Block width="250px">{`<Block width="250px" />`}</Block>
          <Block>{`<Block />`}</Block>
          <Block>{`<Block />`}</Block>
        </Container>
      </div>
    );
  }
});

ReactStyle.inject();
React.renderComponent(
  <ReactFlexgridExample />,
  document.getElementById('main'));
