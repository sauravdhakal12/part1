// Print out the heading
const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
}

// Print out info about each part
const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  );
}

// Assemble point of parts
const Content = (props) => {
  return (

    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
}

// Print out the total
const Total = (props) => {
  let t = 0;

  props.parts.parts.forEach(element => {
    t = t + element.exercises;
  });

  return (
    <p>Number of exercies {t}</p>
  );
}

//Main component
const App = () => {
  const course = {

    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course} />
    </div>
  );
}

export default App