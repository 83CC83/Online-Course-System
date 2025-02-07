import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);

  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        setSearchResult(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id)
      .then(() => {
        window.alert(
          "Course register successfully! Redirect to course page..."
        );
        navigate("/course");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You need to login first to register the course</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Back to login
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>Only student can register courses</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="search input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInput}
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      )}
      {currentUser && searchResult && searchResult.length != 0 && (
        <div>
          <p>Search Results</p>
          {searchResult.map((course) => {
            return (
              <div key={course._id} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Class Title: {course.title}</h5>
                  <p style={{ margin: "0.5rem 0rem" }} className="card-text">
                    {course.description}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Student Number: {course.students.length}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Course Price: {course.price}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Instructor: {course.instructor.username}
                  </p>
                  <a
                    href="#"
                    id={course._id}
                    className="card-text btn btn-primary"
                    onClick={handleEnroll}
                  >
                    Register class
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;
