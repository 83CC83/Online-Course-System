import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Learning System</h1>
            <p className="col-md-8 fs-4">
              <br />
              This system demonstrates the power of the MERN stack—React.js on
              the frontend, Node.js and Express.js on the backend, and MongoDB
              as the database.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              See how it works
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Student</h2>
              <p
                className="lead fw-bold"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <br />
                Enroll in Courses You Love Now !
              </p>
              <button className="btn btn-outline-light" type="button">
                Login or Register
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Instructor</h2>
              <p
                className="lead fw-bold"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <br />
                Start Creating Courses Today !
              </p>
              <button className="btn btn-outline-light" type="button">
                Login and Start
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; This website is for practice purposes only. Please do not
          provide any personal information such as credit card numbers. 2025
          Tracy Wu
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
