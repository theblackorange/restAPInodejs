import express from 'express';
import { v4 as uuidv4 } from 'uuid';
let users = []

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(users);
};

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) =>  user.id !== id);
    res.send(users);
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const foundUser = users.find((user) => user.id == id);
    if(firstName){
        foundUser.firstName = firstName;
    }
    if(lastName){
        foundUser.lastName = lastName;
    }
    if(age){
        foundUser.age = age;
    }
    res.send("updated");
}

