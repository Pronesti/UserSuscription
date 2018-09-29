import React, { Component } from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {

        return (
            <div className="Home">
            <Row></Row>
            <Row></Row>
                <Row>
                    <Col m={6} s={6}>
                        <Card id="free" className='grey lighten-5' textclassname='grey-text' title='Free' actions={[<Link to={{
                            pathname: '/register',
                            state: 'free'
                        }}> <Button waves="light" className="black floatRight" textclassname="white">
                                Go Free </Button></Link>]}>
<Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Available</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Spec1</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
    <tr>
      <td>Spec2</td>
      <td><i className="material-icons">clear</i></td>
    </tr>
    <tr>
      <td>Spec3</td>
      <td><i className="material-icons">clear</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                    <Col m={6} s={6}>
                        <Card id="pro" className='grey lighten-5' textclassname='grey-text' title='Pro ($10)' actions={[<Link to={{
                            pathname: '/register',
                            state: 'pro'
                        }}><Button waves="light" className="black floatRight" textclassname="white">
                                Go Pro </Button></Link>]}>
                                <Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Available</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Spec1</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
    <tr>
      <td>Spec2</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
    <tr>
      <td>Spec3</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;
