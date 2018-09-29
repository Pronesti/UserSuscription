import React, { Component } from 'react';
import {Col, Card, CardTitle, Badge} from 'react-materialize';


class About extends Component {


  render() {

    return (
      <div className="About">

        <Col m={4} s={4}>
  <Card horizontal header={<CardTitle image="http://i.muyinteresante.com.mx/dam/tbg/junior/naturaleza/18/05/17/03-copia.jpg"></CardTitle>} actions={[<a href='https://github.com/Pronesti'>Go to GitHub</a>]}>
      <h3>Diego Pronesti</h3>
      <p>IFTS16</p>
      <p>dieh.diego@gmail.com</p>   
    </Card>
</Col>

      </div>
    );
  }
}

export default About;
