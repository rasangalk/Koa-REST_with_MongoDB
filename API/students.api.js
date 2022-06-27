const {saveStudent, getAllStudents, getOneStudent, updateOneStudent, removeOneStudent} = require('../database/students.dao');

const addStudent = async({fullName, age, email, gender}) => {
    const student = {
        fullName,
        age,
        email,
        gender
    }

    return await saveStudent(student);
}

const getStudents = async()=>{
    return await getAllStudents();
}

const getStudent = async(id)=>{
    return await getOneStudent(id);
}

const updateStudent = async(id, {fullName, age, email, gender})=>{
    return await updateOneStudent(id, {fullName, age, email, gender});
}

const removeStudent = async(id)=>{
    return await removeOneStudent(id);
}

module.exports = {addStudent, getStudents, getStudent, updateStudent, removeStudent}