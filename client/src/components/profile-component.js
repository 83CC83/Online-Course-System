import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = ({ currentUser, setCurrentUser }) => {
  // useEffect(() => {
  //   setCurrentUser(AuthService.getCurrentUser());
  // }, []);

  return (
    // <h1>This is profile page...</h1>
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>You must be logged in before accessing your profile.</div>
      )}
      {currentUser && (
        <div>
          <h2>Personal Profile </h2>
          <br />

          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Name: {currentUser.user.username}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Your ID: {currentUser.user._id}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Your Email: {currentUser.user.email}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Role: {currentUser.user.role}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
