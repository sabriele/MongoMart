# MongoMart
Final Project for [M101JS - MongoDB for Node.js Developers](https://university.mongodb.com/courses/M101JS/about): an ecommerce app using the MongoDB driver and Express.

https://university.mongodb.com/

## Prerequisites
- [Node.js and npm](https://www.nodejs.org/)
- [MongoDB version 3.2.x](https://www.mongodb.com/)

## Configuration and Usage
Installing:
```bash
git clone https://github.com/sabriele/MongoMart && cd mongomart
npm install
```
Populate the MongoDB database:
```bash
mongoimport --drop -d mongomart -c item data/items.json
mongoimport --drop -d mongomart -c cart data/cart.json
```
Run app:
```bash
node mongomart.js
```
When you have completed the setup, visit http://localhost:3000 in your browser. 

## Live Demonstration
[You can view this app in production here.](https://mongo-mart.herokuapp.com)
