# Run Tracker BE

## Created By: Mark Loegel

## Documentation:

Base URL for Deployed API: https://run-tracker-be.herokuapp.com/ <br>
Front-End Github: https://github.com/meloegel/run-tracker-fe <br>
Front-End Deployed Link: <br>

## About

Run Tracker was created by Mark Loegel. Mark created Run Tracker because he has a passion for running as well as programming. Run Tracker keeps track of your run times and you able to post good runs to a main feed. Creating an account allows you to view your runs, edit and delete your runs and edit your profile. Thank you for using Run Tracker and Just Keep Running!

## Technologies Used

-Node <br>
-Express<br>
-Knex<br>
-Bcryptjs<br>
-Helmet<br>
-Jsonwebtoken<br>
-PostgresSQL3<br>
-Jest<br>
-Supertest<br>

## File Structure

<img src="./imgs/BE-FileStructure.PNG" width = "200" />

## Database Schema

<img src="./imgs/DatabaseSchema.PNG" width = "700" />

## **Endpoints**

| Request | URL                            | Description                         | Requires Token | Requires Account |
| ------- | ------------------------------ | ----------------------------------- | -------------- | ---------------- |
| POST    | /api/auth/register             | register as a new user              | -              | -                |
| POST    | /api/auth/login                | login as existing user              | -              | -                |
| POST    | /api/auth/run-tracker          | adds run                            | X              | X                |
| GET     | /api/auth/users                | gets all users                      | X              | -                |
| GET     | /api/auth/users/:id            | gets a specifc user                 | X              | -                |
| GET     | /api/run-tracker               | gets all runs                       | X              | -                |
| GET     | /api/run-tracker/user/:id      | gets a users info for run post info | -              | -                |
| GET     | /api/run-tracker/runs          | gets all published runs             | -              | -                |
| GET     | /api/auth/run-tracker/run/:id  | gets a specific run                 | X              | X                |
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
| email    | string  | no       | no     | email of user                   |

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

## **Requests and Returns**

### POST /api/auth/register

Request Body:

```
{
    "username": "RunnerDude",
    "password": "ILoveRunning",
}
```

Returns:

```
{
    "data": {
        "username": "RunnerDude",
        "password": "$2a$10$/RqzR6JBVXeTYSGHwLdsQOItb56bUB5Hr1RanRyC0b1PayVchwRnO"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTU3MjcyMDQsImV4cCI6MTU5NjU5MTIwNH0.CTp5cRIYGPpjrmS7kfyE4_CzxLgA_-FvzxkDk_wpHWs"
}
```

### POST /api/auth/login

Request Body:

```
{
    "username": "RunnerDude",
    "password": "ILoveRunning"
}
```

Returns:

```
{
    "message": "Welcome",
    "user": {
        "id": 10,
        "username": "RunnerDude",
        "password": "$2a$10$/RqzR6JBVXeTYSGHwLdsQOItb56bUB5Hr1RanRyC0b1PayVchwRnO"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJzdGV2ZSIsInJvbGUiOjIsImlhdCI6MTU5NTcyNzY0MiwiZXhwIjoxNTk2NTkxNjQyfQ.AObU_nV-7YlrrADdsuFkKO92rNFeY-ajJLX4ulWQvrI"
}
```

### POST /api/auth/run-tracker

Request Body:

```
 {
     "runTime": "18:42",
     "distance": "2",
     "pace": "8",
     "description": "Nice Run",
     "publish": "1",
     "userId": "1"
 }
```

Returns:

```
{
    "Posted": {
        "runTime": "18:42",
        "distance": "2",
        "pace": "8",
        "description": "Nice Run",
        "publish": "1",
        "userId": "1"
    }
}
```

### GET /api/auth/users

Returns:

```
[
     {
        "id": 1,
        "username": "Mark",
        "password": "asdasd",
        "avatar": "https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jp",
        "location": "Detroit, MI",
        "email": "email@email.com"
    },
    {
        "id": 2,
        "username": "RunnerDude",
        "password": "asdasd",
        "avatar": "https://st4.depositphotos.com/3369547/25587/v/1600/depositphotos_255876378-stock-illustration-young-athletic-man-running-avatar.jpg",
        "location": "Devner, Co",
        "email": "testemail@email.com"
    },
    .......
]
```

### GET /api/auth/users/:id

Returns:

```
{
    "id": 1,
    "username": "Mark",
    "password": "asdasd",
    "avatar": "https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jp",
    "location": "Detroit, MI",
    "email": "email@email.com"
}
```

### GET /api/run-tracker

Returns:

```
[
   {
        "id": 1,
        "runTime": "24:31",
        "distance": 3,
        "publish": 1,
        "timePosted": "2020-11-17 01:34:07",
        "pace": "8:10",
        "description": "Hard run, it was 70 degrees",
        "userId": 1
    },
    {
        "id": 2,
        "runTime": "25:07",
        "distance": 3,
        "publish": 0,
        "timePosted": "2020-11-17 01:34:07",
        "pace": "8:19",
        "description": "Easy pace",
        "userId": 1
    },
    ..........
]
```

### GET /api/run-traker/user/:id

Returns:

```
{
    "id": 1,
    "username": "Mark",
    "password": "asdasd",
    "avatar": "https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jp",
    "location": "Detroit, MI",
    "email": "email@email.com"
}
```

### GET /api/run-traker/runs

Returns:

```
 {
        "id": 1,
        "runTime": "24:31",
        "distance": 3,
        "publish": 1,
        "timePosted": "2020-11-17 01:34:07",
        "pace": "8:10",
        "description": "Hard run, it was 70 degrees",
        "userId": 1
    },
    {
        "id": 3,
        "runTime": "33:08",
        "distance": 4,
        "publish": 1,
        "timePosted": "2020-11-17 01:34:07",
        "pace": "8:19",
        "description": "Easy pace",
        "userId": 1
    },
    .........
```

### GET /api/auth/run-tracker/run/:id

Returns:

```
{
    "id": 1,
    "runTime": "24:31",
    "distance": 3,
    "publish": 1,
    "timePosted": "2020-11-17 01:34:07",
    "pace": "8:10",
    "description": "Hard run, it was 70 degrees",
    "userId": 1
}
```

### GET /api/auth/run-tracker/user/:id

Returns:

```
[
    {
        "runTimeID": 1,
        "runTime": "24:31",
        "distance": 3,
        "publish": 1,
        "timePosted": "2020-11-17 01:34:07",
        "pace": "8:10",
        "description": "Hard run, it was 70 degrees"
    },
    {
        "runTimeID": 2,
        "runTime": "25:07",
        "distance": 3,
        "publish": 0,
        "timePosted": "2020-11-17 01:34:07",
        "pace": "8:19",
        "description": "Easy pace"
    },
    ........
```

### PUT /api/auth/users/:id

Request Body:

```
{
    "id": 1,
    "username": "Mark",
    "password": "asdasd",
    "avatar": "https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jp",
    "location": "Detroit, MI",
    "email": "email@email.com"
}
```

Returns:

```
{
    "Message": "Updated user with id: 1"
}
```

### PUT /api/auth/run-tracker/:id

Request Body:

```
{
     "runTime": "18:42",
     "distance": "2",
     "pace": "8",
     "description": "Nice Run",
     "publish": "1",
     "userId": "1"
 }
```

Returns:

```
{
    "Message": "Updated run with id: 1"
}
```

### DELETE /api/auth/run-tracker/:id

Returns:

```
{
    "Message": "Run with id: 1 has been deleted"
}
```

### DELETE /api/auth/users/:id

Returns:

```
{
    "Message": "User with id: 1 has been deleted"
}
```
