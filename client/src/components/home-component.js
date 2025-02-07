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
              This system uses React.js as the frontend framework, Node.js and
              MongoDB as a backend server.
              <br />
              This type of project is called a MERN project, and it is one of
              the most popular ways to create modern websites.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              See how it works
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>
                <br />
                Students can enroll in the courses they like.
              </p>
              <button className="btn btn-outline-light" type="button">
                Log in as a member or register an account
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a instructor</h2>
              <p>
                <br />
                Start creating courses by signing up to become an instructor.
              </p>
              <button className="btn btn-outline-light" type="button">
                Start courses today
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
