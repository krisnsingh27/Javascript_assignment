import React, { useState } from 'react';


const Dashboard = () => {
 
  const [students, setStudents] = useState([
    {}
  ]);

 
  const [newName, setNewName] = useState('');
  const [newCourse, setNewCourse] = useState('');

  
  const addStudent = () => {
    if (newName.trim() === '' || newCourse.trim() === '') {
      alert('Please enter both a name and a course.');
      return;
    }

    
    const newStudent = {
      name: newName.trim(),
      course: newCourse.trim(),
    };

    
    setStudents([...students, newStudent]);

   
    setNewName('');
    setNewCourse('');
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      
      
      <h2>Add New Student</h2>
      <div>
        <input
          type="text"
          placeholder="Student Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          
        />
        <input
          type="text"
          placeholder="Course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          
        />
        <button 
          onClick={addStudent}
         
        >
          Add Student
        </button>
      </div>

      
     
      <h2>Current Students</h2>
       {students.length === 0 ? (
        <p >No students yet! </p>
      ) : (
       
        <ul >
          {students.map((student, index) => (
            
            <li 
              key={index} 
             
            >
            
              <strong>Name:</strong> {student.name}<strong>Course:</strong> {student.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;