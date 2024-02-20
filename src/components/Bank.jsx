import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import './Bank.css';

function BankForm() {
  const [fullName, setFullName] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [services, setServices] = useState([]);
  const [accountType, setAccountType] = useState('');
  const [selectedDocument, setSelectedDocument] = useState('');
  const [documentUpload, setDocumentUpload] = useState([]);

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServices([...services, value]);
    } else {
      setServices(services.filter((service) => service !== value));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', {
      fullName,
      dob,
      gender,
      phoneNumber,
      services,
      accountType,
      selectedDocument,
      documentUpload
    });
  };

  return (
    <div className='container'><br />
        <Container>
          <h2>Bank Registration Form</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
    
            <Row>
              <Col>
                <Form.Group controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Male"
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === 'male'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="Female"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === 'female'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
    
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
    
            <Form.Group controlId="services">
              <Form.Label>Service</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="ATM"
                  type="checkbox"
                  value="ATM"
                  checked={services.includes('ATM')}
                  onChange={handleServiceChange}
                />
                <Form.Check
                  inline
                  label="Online Banking"
                  type="checkbox"
                  value="Online Banking"
                  checked={services.includes('Online Banking')}
                  onChange={handleServiceChange}
                />
              </div>
            </Form.Group>
    
            <Form.Group controlId="accountType">
              <Form.Label>Account Type</Form.Label>
              <Form.Control
                as="select"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="">Select account type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </Form.Control>
            </Form.Group>
    
            <Form.Group controlId="selectDocument">
              <Form.Label>Select Document</Form.Label>
              <Form.Control
                as="select"
                value={selectedDocument}
                onChange={(e) => setSelectedDocument(e.target.value)}
              >
                <option value="">Select document</option>
                <option value="Voter ID">Voter ID</option>
                <option value="Aadhar Card">Aadhar Card</option>
                {/* Add other document options here */}
              </Form.Control>
            </Form.Group>
    
            <Form.Group controlId="documentUpload">
              <Form.Label>Document Upload</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setDocumentUpload(e.target.files)}
              />
            </Form.Group><br></br>
    
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Container><br /><br />
    </div>
  );
}

export default BankForm;
