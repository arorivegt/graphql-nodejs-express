const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

//data

var {courses} = require('./date.json');

var schema = buildSchema(`
  type Query {
      course(id:Int!): Course
      courses(topic:String):[Course]
  }

  type Mutation{
    updateCourseTopic(id:Int!, topic:String!): Course
  }


  type Course {
      id: Int
      tittle: String
      author: String
      topic: String
      url: String
  }
`);

let getCourse = (args) => {
    let id = args.id;
    return courses.filter(course => {
        return course.id == id;
    })[0]
}

let getCourses= (args) => {
    if(args.topic) {
        let topic = args.topic;
        return courses.filter(course => course.topic === topic);
    }else{
        return courses;
    }
}

let updateCourseTopic = ({id, topic}) =>{
    courses.map(course => {
      if (course.id === id){
          course.topic = topic;
          return course;
      }  
    })

    return courses.filter(course => course.id == id)[0];
}

var root = { 
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic

};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => console.log('server on port 3000'));