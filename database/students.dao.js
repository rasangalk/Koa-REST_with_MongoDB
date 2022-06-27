const students = require('./index').db('ClassRoom').collection('students');

const ObjectId = require('mongodb').ObjectId;

const saveStudent = async({fullName, age, email, gender}) => {
    const result = await students.insertOne({fullName, age, email, gender});
    return result;
}

const getAllStudents = async() => {
    const result = await students.find();
    return result.toArray();
}

const getOneStudent = async(id)=>{
    const result = await students.findOne({_id:ObjectId(id)});
    return result;
}

const updateOneStudent = async(id, {fullName, age, email, gender}) => {
    const update = {fullName, age, email, gender}
    const result = await students.updateOne({_id:ObjectId(id)}, {$set: update});
    return result;
}

const removeOneStudent = async(id) => {
    return await students.deleteOne({_id: ObjectId(id)});
}

module.exports = {saveStudent, getAllStudents, getOneStudent, updateOneStudent, removeOneStudent} 