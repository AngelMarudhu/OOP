"use strict";
//// Definition: Singleton Pattern is a creational design pattern that guarantees a class has only one instance and provides a global point of access to it
//// Global Access: The getInstance method can be called from anywhere in the application to get the single instance of the Singleton class this is what is meant by providing a global point of access
class singleTon {
    static instance;
    //// static used here because it depend on class not any instance of this classses
    //// he is here for singleton class holds the "instance of singleton"
    //// private constructor helps us to can't create instance outside of class
    constructor() { }
    //// static helps us to use outside of class which means global access that means prevent direct instantiation
    static getInstance() {
        if (!singleTon.instance) {
            singleTon.instance = new singleTon();
        }
        return singleTon.instance;
    }
}
let checkOne = singleTon.getInstance();
let checkTwo = singleTon.getInstance();
if (checkOne === checkTwo) {
    console.log(`proper singlet class`);
}
else {
    console.log(`something happened your singleton class`);
}
/// Controlled Access: Only one instance is created, and it's controlled through a single access point.
/// Implement a reset capability by setting the instance to null, which allows creating a new instance when needed for future purpose
//// REAL WORLD EXAMPLE ONE PICTURE SOLUTION
//// COMMON METHODS AND ATTRIBUTES FOR DATABASE CONNECTION I KNOW THERE ARE MORE BUNCH OF STUFFS
//// EVERYTHING SIMPLE LOGIC SO NO CHAOS DON'T THINK ABOUT LOGIC TRY TO VISUALIZE THE PATTERN LOGIC CAN DIFFER
class DatabaseConnection {
    id;
    status;
    constructor(id) {
        this.id = id;
        this.status = "disconnected";
    }
    connect() {
        this.status = "connected";
        console.log(`Connection ${this.id} is now connected.`);
    }
    disconnect() {
        this.status = "disconnected";
        console.log(`Connection ${this.id} is now disconnected.`);
    }
    getStatus() {
        return this.status;
    }
    getId() {
        return this.id;
    }
}
class ConnectionPool {
    static instance;
    connections = [];
    maxConnections;
    currentConnectionId = 0;
    constructor(maxConnections) {
        ///// CREATING MULTIPLE DATABASE WITH DIFFERENT ID
        this.maxConnections = maxConnections;
        for (let i = 0; i < this.maxConnections; i++) {
            this.connections.push(new DatabaseConnection(this.currentConnectionId++));
        }
    }
    ///// PATTERN STRATEGY
    static getInstance(maxConnections = 5) {
        if (!ConnectionPool.instance) {
            //// SINGLE CONNECTION POOOL MULTIPLE DATABASE CONNECTION REUSE INFINITE TIMES GET CONNECTION THEN RELEASING BACK TO CONNECTION POOOL THEN USE
            ConnectionPool.instance = new ConnectionPool(maxConnections);
        }
        return ConnectionPool.instance;
    }
    getConnection() {
        if (this.connections.length > 0) {
            return this.connections.pop();
        }
        else {
            console.log("No available connections.");
            return null;
        }
    }
    ///// RELEASING BACK TO THE POOL
    releaseConnection(connection) {
        this.connections.push(connection);
    }
}
// Usage example:
const pool1 = ConnectionPool.getInstance(3);
const conn1 = pool1.getConnection();
///// OPTIONAL ? OPERATOR SOMETIME YOU WILL RECEIVE NULL THAT'S WHY IF YOU HAVE DOUBT GO TO GETCONNECTION METHOD SEE AT THE ELSE STATEMENT
conn1?.connect();
const conn2 = pool1.getConnection();
conn2?.connect();
pool1.releaseConnection(conn1);
pool1.releaseConnection(conn2);
const pool2 = ConnectionPool.getInstance();
console.log(pool1 === pool2); // Outputs: true, proving the Singleton pattern is used
///// ALTERNATIVE WAYS TO ACHIEVE THIS:
// can be used as an alternative to manage different types of databases, such as MongoDB and SQL, in a more flexible and decoupled manner more efficient buddy see at the solid principles dependency inversion you will understood what's happening
// Flexibility: Easily switch between different database implementations without changing the dependent code
// Decoupling: The client code does not need to know about the specific implementation of the database, making it more maintainable and testable
////////// DOUBLE CHECK MECHANISM
