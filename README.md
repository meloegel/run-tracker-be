# Run Tracker BE

## Documentation:

Base URL for Deployed API:

## **Endpoints**

| Request | URL                            | Description                         | Requires Token | Requires Account |
| ------- | ------------------------------ | ----------------------------------- | -------------- | ---------------- |
| POST    | /api/auth/register             | register as a new user              | -              | -                |
| POST    | /api/auth/login                | login as existing user              | -              | -                |
| POST    | /api/auth/run-tracker          | adds run                            | X              | X                |
| GET     | /api/auth/users                | gets all users                      | X              | -                |
| GET     | /api/auth/users/:id            | gets a specifc user                 | X              | -                |
| GET     | /api/run-tracker               | gets all runs                       | X              | -                |
| GET     | /api/run-tracker/user/:id      | gets a users info for run post info | X              | -                |
| GET     | /api/run-tracker/runs          | gets all published runs             | X              | -                |
| GET     | /api/auth/run-tracker/:id      | gets a specific run                 | X              | -                |
| GET     | /api/auth/run-tracker/user/:id | gets a users runs                   | X              | X                |
| PUT     | /api/auth/users/:id            | edits info for user with given id   | X              | X                |
| PUT     | /api/auth/run-tracker/:id      | edits info for run with given id    | X              | X                |
| DELETE  | /api/auth/run-tracker/:id      | deletes run with given id           | X              | X                |
| DELETE  | /api/auth/users/:id            | deletes user with given id          | X              | X                |

## **Table Requirements**

## **Users**

| Name     | Type    | Required | Unique | Notes                           |
| -------- | ------- | -------- | ------ | ------------------------------- |
| id       | integer | yes      | yes    | User id (auto generated by API) |
| username | string  | yes      | yes    | User's username                 |
| password | string  | yes      | no     | User's password                 |
| avatar   | string  | no       | no     | html url of users avatar        |
| location | string  | no       | no     | location of user                |
| eamil    | string  | no       | no     | email of user                   |

## **Run Times**

| Name        | Type      | Required | Unique | Notes                           |
| ----------- | --------- | -------- | ------ | ------------------------------- |
| id          | integer   | yes      | yes    | User id (auto generated by API) |
| runTime     | time      | yes      | no     | Time of run                     |
| distance    | integer   | yes      | no     | Distance of run                 |
| publish     | boolean   | no       | no     | Publish run to main feed        |
| timePosted  | timestamp | no       | no     | Time run was posted             |
| pace        | time      | no       | no     | Pace of run                     |
| description | string    | yes      | no     | Short description of run        |
| userId      | integer   | yes      | no     | Id of user posting              |

## **Login's**

If i need to update the database at any point during the week all users made up until that point will be deleted. These logins will always be available to use.
| Login | Password | Role |
| ----- | -------- | ---- |
| user | asd | user |
| creator | asd | creator |

## **Requests and Returns**

### POST /api/auth/register

Request Body:

```
{
    "username": "steve",
    "password": "asd",
    "role":2
}
```

Returns:

```
{
    "data": {
        "username": "steve",
        "password": "$2a$10$/RqzR6JBVXeTYSGHwLdsQOItb56bUB5Hr1RanRyC0b1PayVchwRnO",
        "role": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTU3MjcyMDQsImV4cCI6MTU5NjU5MTIwNH0.CTp5cRIYGPpjrmS7kfyE4_CzxLgA_-FvzxkDk_wpHWs"
}
```

### POST /api/auth/login

Request Body:

```
{
    "username": "steve",
    "password": "asd"
}
```

Returns:

```
{
    "message": "Welcome",
    "user": {
        "id": 10,
        "username": "steve",
        "password": "$2a$10$/RqzR6JBVXeTYSGHwLdsQOItb56bUB5Hr1RanRyC0b1PayVchwRnO",
        "role": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJzdGV2ZSIsInJvbGUiOjIsImlhdCI6MTU5NTcyNzY0MiwiZXhwIjoxNTk2NTkxNjQyfQ.AObU_nV-7YlrrADdsuFkKO92rNFeY-ajJLX4ulWQvrI"
}
```

### POST /api/auth/howto/creator

Request Body:

```
 {
     "name": "Start a fire",
     "description": "Simple way to start a fire",
     "steps": "Step 1: Pile up your wood in fireplace Step 2: add lighter fluid Step 3: light a match and throw it in the lighter fluid and enjoy! ",
      "category": "Home",
     "complexity": "5min"
 }
```

Returns:

```
[
    6
]
```

### GET /api/auth/users

Returns:

```
[
    {
        "id": 4,
        "username": "test",
        "password": "$2a$10$6VtVm1Ygj.oBISVTkvJig.eggF0FZ5zEXo2TKb7Uwwz0MUBOPAhZa",
        "role": 2
    },
    {
        "id": 5,
        "username": "admin",
        "password": "$2a$10$aHXy8LIckAloSElGhBH3f.aTZL0y6E9cnrKaNqfhNmjmNv412YgCy",
        "role": 2
    }
]
```

### GET /api/auth/users/:id

Returns:

```
{
    "id": 1,
    "username": "mark",
    "password": "asd",
    "role": 2
}
```

### GET /api/auth/howto

Returns:

```
[
    {

    {
        "id": 6,
        "name": "Start a fire",
        "description": "Simple way to start a fire",
        "steps": "Step 1: Pile up your wood in fireplace Step 2: add lighter fluid Step 3: light a match and throw it in the lighter fluid and enjoy! ",
        "category": "Home",
        "complexity": "5min"
    }
]
```

### GET /api/auth/howto/:id

Returns:

```
{

}
```

### PUT /api/auth/users/:id

Request Body:

```
{
    "username": "steve",
    "password": "asd",
    "role":1
}
```

Returns:

```
{
    "Message": "Updated User"
}
```

### PUT /api/auth/howto/creator/:id

Request Body:

```
{

    }
```

Returns:

```
{
    "Message": "Updated How-to with id: 1"
}
```

### DELETE /api/auth/howto/creator/:id

Returns:

```
{
    "Removed": "How-to with id: 6"
}
```

### DELETE /api/auth/users/:id

Returns:

```
{
    "Removed": "User with id: 9"
}
```
