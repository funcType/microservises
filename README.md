## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

1. Start the Services
Navigate to the gateway folder inside the apps directory and start the services:

```bash
pnpm start:dev users
pnpm start:dev posts
pnpm start:dev

```
2. Start MongoDB
Make sure your MongoDB server is running. 

3. Run the Frontend Application
Navigate to the frontend folder inside the apps directory and start the frontend application:

```bash
pnpm run start

```

4. Connect to MongoDB with Compass
Open MongoDB Compass and connect to your MongoDB instance using the following connection string:

mongodb://localhost:27017/nest

5. Interact with the GraphQL API
Go to http://localhost:3002/graphql.

In the HTTP headers, specify the following:
```bash

{
  "Authorization": "123"
}

```

6. Add a User Record
Use the following mutation to add a user:

mutation {
  createUser(createUserInput: {
    id: "1838",
    email: "alex@gmail.com",
    password: "somepass"
  }) {
    id
    email
    password
  }
}

Execute the query and check the record in the nest database using MongoDB Compass.

7. View Records in the Frontend
Navigate to http://localhost:3003/.

The records should be displayed.


## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```