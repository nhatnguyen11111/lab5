import React, { useState } from 'react';
import { Container, Badge } from 'react-bootstrap';
import StudentAddForm from './component/StudentAddForm';
import StudentTable from './component/StudentTable';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Lê Dương Bảo Lâm', code: 'QE180002', status: 'Active' },
    { id: 2, name: 'Trần Minh Hiếu', code: 'QE180014', status: 'In-active' },
    { id: 3, name: 'Đặng Thành An', code: 'QE180198', status: 'Active'}
  ]);
  const [selectedCount, setSelectedCount] = useState(0);

  // Q6: Add a new student at the top of the list
  const handleAddStudent = (newStudent) => {
    setStudents([newStudent, ...students]);
  };

  // Q7: Delete a student from the list
  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Q8: Update the count of selected students
  const handleSelect = (isSelected) => {
    setSelectedCount(isSelected ? selectedCount + 1 : selectedCount - 1);
  };

  // Q9: Clear all students and reset the selected count
  const handleClearAll = () => {
    setStudents([]);
    setSelectedCount(0);
  };

  return (
    <Container>
      <h2><Badge bg="primary">Total Selected Student: <Badge bg="dark">{selectedCount}</Badge></Badge></h2>
      <StudentAddForm onAddStudent={handleAddStudent} onClear={handleClearAll} />
      <StudentTable 
        students={students} 
        onDeleteStudent={handleDeleteStudent} 
        onSelect={handleSelect}
      />
    </Container>
  );
};

export default App;
