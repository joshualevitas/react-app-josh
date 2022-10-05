const Course = ({course}) => (
  <div className="card m-2 p-2">
    <div className="card-body">
      <h5 className="card-title">{course.term} CS {course.number}</h5>
      <div className="card-text">{course.title}</div>
    </div>

    <div className="card-text">
      <p>{course.meets}</p>
      </div>
  </div>
);

const courseList = ({courses}) => (
  <div className="course-list justify-content-center">

    { Object.entries(courses).map(([course, i]) => <Course key={course} course={i}/>) }

  </div>
);

export default courseList;