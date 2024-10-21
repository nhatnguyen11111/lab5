import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const StudentAddForm = ({ onAddStudent, onClear }) => {
  const [studentName, setStudentName] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [isActive, setIsActive] = useState(false);

  // Q6: Add student at the top of the list
  const handleAdd = () => {
    if (studentName && studentCode) {
      const newStudent = {
        id: Date.now(), // Unique ID using timestamp
        name: studentName,
        code: studentCode,
        status: isActive ? 'Active' : 'In-active'
      };
      onAddStudent(newStudent);
      // Clear form after adding
      setStudentName('');
      setStudentCode('');
      setIsActive(false);
    }
  };

  // Q9: Clear all students
  const handleClear = () => {
    onClear();
  };

  return (
    <Form className="mt-3">
      <Col md={6}>
        <Form.Control
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </Col>
      <h3></h3>
      <Col md={6}>
        <Form.Control
          type="text"
          placeholder="Student Code"
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
        />
      </Col>
      <h3></h3>
      <Col md={4}>
        <Form.Check
          type="checkbox"
          label="Still Active"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </Col>
      <Col md={4}>
        <Button variant="primary" onClick={handleAdd}>Add</Button>
        <Button variant="secondary" className="ms-2" onClick={handleClear}>Clear</Button>
      </Col>
    </Form>
  );
};

export default StudentAddForm;