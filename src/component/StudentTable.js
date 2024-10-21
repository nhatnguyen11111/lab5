import React, { useState } from 'react';
import { Table, Button, Form, Badge } from 'react-bootstrap';

const StudentTable = ({ students, onDeleteStudent, onSelect }) => {
  const StudentRow = ({ student }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectChange = (e) => {
      const checked = e.target.checked;
      setIsSelected(checked);
      onSelect(checked);
    };

    return (
      <tr>
        <td>
          <Form.Check
            type="checkbox"
            checked={isSelected}
            onChange={handleSelectChange}
          />
        </td>
        <td>{student.name}</td>
        <td>{student.code}</td>
        <td>
          <Badge bg={student.status === 'Active' ? 'success' : 'danger'}>
            {student.status}
          </Badge>
        </td>
        <td>
          <Button variant="danger" onClick={() => onDeleteStudent(student.id)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Select</th>
          <th>Student Name</th>
          <th>Student Code</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow key={student.id} student={student} />
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;