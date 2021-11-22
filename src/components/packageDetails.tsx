import React from 'react';
import Form from 'react-bootstrap/Form';

function PackageDetails() {
    return (
        <div>
            <Form className="orderForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>כתובת</Form.Label>
          <Form.Control type="text" placeholder="כתובת"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>הערות</Form.Label>
          <Form.Control type="text" placeholder="הערות לכתובת"/>
        </Form.Group>
        
      </Form>
        </div>
    );
}

export default PackageDetails;