# React Flexgrid

[Flexbox Grid][] reimagined as a set of React components.

Installation:

    % npm install react-flexgrid

Usage:

    var {Container, Block} = require('react-flexgrid')

React Flexgrid automatically assigns equal width for any number of blocks inside
the container:

    <Container>
      <Block>1</Block>
      <Block>2</Block>
    </Container>

    <Container>
      <Block>1</Block>
      <Block>2</Block>
      <Block>3</Block>
    </Container>

You can specify block widths with fractions:

    <Container>
      <Block width={2}>1</Block>
      <Block width={2}>2</Block>
      <Block width={1}>3</Block>
    </Container>

Fix some block's width with percentage:

    <Container>
      <Block width="30%">1</Block>
      <Block>2</Block>
      <Block>3</Block>
    </Container>

Or even specify block width in pixels:

    <Container>
      <Block width="250px">1</Block>
      <Block>2</Block>
      <Block>3</Block>
    </Container>

[Flexbox Grid]: http://flexboxgrid.com/
