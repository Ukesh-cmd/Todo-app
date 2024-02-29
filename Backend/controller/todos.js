const express = require('express');
const {pool} = require('../connfig/dbConnect')

const createTodo = (req, res) => {
    pool.getConnection((err, connection) =>{
        console.log("connection established");
        connection.query(
            `INSERT into todos (task, description) values (?,?)`,
            [req.body.task, req.body.description],
            (err, result)=>{
                connection.release();
                if(err){
                    return res.status(500).send(
                        console.log(err)
                    )
                }
                return res.status(200).send({
                    msg:"success"
                })
            }
        )
    })
}

const show = (req, res) => {
    pool.getConnection((err, connection)=>{
        console.log("Connection established");

        connection.query(
            'SELECT * from todos', 
            (err, result)=>{
                connection.release();
                if(err){
                    console.log(err);
                }
                return res.status(200).json(result);
            }
        )
    })
}
const showById = (req, res) => {
    pool.getConnection((err, connection)=>{
        console.log("Connection established");

        connection.query(
            'SELECT * from todos where id=?',[req.params.id], 
            (err, result)=>{
                connection.release();
                if(err){
                    console.log(err);
                }
                return res.status(200).json(result);
            }
        )
    })
}
const deleteTask = (req, res) =>{
    pool.getConnection((err, connection)=>{
        console.log("Connection established");

        connection.query(
            'DELETE from todos where id = ?', [req.params.id],
            (err, result)=>{
                connection.release();
                if(err){
                    console.log(err);
                }
                return res.status(200).json(result);
            }
        )
    })
}
const updateTask = (req, res) =>{
    pool.getConnection((err, connection)=>{
        console.log("Connection established");

        connection.query(
            'UPDATE todos set task=?, description=? where id =?', [req.body.task, req.body.description,req.params.id],
            (err, result)=>{
                connection.release();
                if(err){
                    console.log(err);
                }
                return res.status(200).send({msg:"Success"});
            }
        )
    })
}
module.exports={
    createTodo,
    show,
    showById,
    updateTask,
    deleteTask
}