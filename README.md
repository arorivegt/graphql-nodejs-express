# Graphql-nodejs-express
i create a project with GraphQL, NodeJS and Express as my framework

This is my libraries, packages, framework, laguages that i used
- [GraphQL](https://graphql.org/)
- [Express](https://expressjs.com/)
- [How to install GraphQL for my project with Express](https://graphql.org/code/)

I started my project with the following commands:
``` sh
# to create a package.json
npm init --yes

#i add to my project express, graphql and express-graphql
npm install express graphql express-graphql

#In my proyect i create a file with the name index.js and i execute the following command to start my proyect.
#my proyect is listening on port 3000 http://localhost:3000/
npm index.js
```

My queries GraphQL
```sh

query getSingleCourse($courseID:Int!){
  course(id: $courseID){
    tittle
    author
    topic
    url
  }
}

#Query variables
{
  "courseID": 1
}
```
```sh
query getCourses($topic:String!){
  courses(topic: $topic){
    tittle
    author
    topic
    url
  }
}

#Query variables
{
  "topic": "Javascript"
}
```

``` sh

query getCoursesWIthFragments($courseID1:Int!, $courseID2:Int!){
  course1 : course(id: $courseID1){
    ...courseFields
  } 
  
  course2 : course(id: $courseID2){
    ...courseFields
  }
  
}

fragment courseFields on Course{
  tittle
  author
  topic
  url
}

#Query variables
{
  "courseID1": 1,
  "courseID2": 3
  
}

```

```sh
mutation updateCourseTopic($id:Int!, $topic:String!){
  updateCourseTopic(id: $id, topic: $topic){
    ...courseFields
  }
} 

fragment courseFields on Course{
  id
  tittle
  author
  topic
  url
}

#Query variables
{
  "id": 3,
  "topic": "NodeJS"
}

```