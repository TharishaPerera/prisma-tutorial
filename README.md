# Prisma Crash Course Sample Codes

Prisma is a modern ORM (Object-Relational Mapping) tool that allows you to interact with databases using a type-safe and intuitive API. With Prisma, you can easily map your database schema to a programmatic API, which you can use to read and write data.

This GitHub repository demonstrates how to use Prisma ORM with a Node project that uses TypeScript and SQLite as the database. By following the code examples and instructions in this repository, you can get started with Prisma and see how it can simplify your database interactions.

To get started with Prisma, follow these instructions:

1. Initialize a `Node` project
    
    ```jsx
    npm init -y
    ```
    
2. Install `TypeScript`, `TS-Node` & `Node Types` as Dev dependencies
    
    ```jsx
    npm install typescript ts-node @types/node -D
    ```
    
3. Initialize `TypeScript`
    
    ```jsx
    npx tsc --init
    ```
    
4. Install `Prisma`
    
    ```jsx
    npm install prisma
    ```
    
5. Initialize a new Prisma project for SQLite database
    
    ```jsx
    npx prisma init --datasource-provider sqlite
    ```
    

### Other useful CLI commands

1. To create a migration
    
    ```jsx
    npx prisma migrate dev --name <migration-name>
    ```
    
2. Start Prisma Studio
    
    ```jsx
    npx prisma studio
    ```
    

With Prisma, you can avoid writing tedious and error-prone SQL queries and focus on building your application's business logic. In this crash course, we will cover some basic usage examples of Prisma to get you started.
