import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);      // start in “loading”
  const [error, setError] = useState(null);

  /** -----------------------------------------
   * Fetch users once when the component mounts
   * ---------------------------------------- */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 👉 change the port if your API isn’t on 3000
        const { data } = await axios.get("http://localhost:3000/users");
        setUsers(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(
          err.response?.status
            ? `Server returned ${err.response.status}`
            : err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


//     useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/users"); // adjust port if needed
//         if (!res.ok) {
//           // res.status is 4xx / 5xx
//           throw new Error(`HTTP ${res.status}`);
//         }

//         const data = await res.json();
//         setUsers(data);
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

  /** ---------- UI ---------- */
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1 className="mb-4">List of Users</h1>

      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/create" className="btn btn-success">
            Add
          </Link>
        </div>

        {/* Loading / error states */}
        {loading && <p className="text-center m-0">Loading users…</p>}
        {error && (
          <p className="text-center text-danger m-0">
            Unable to load users: {error}
          </p>
        )}

        {!loading && !error && (
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.website}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-info me-2">Read</button>
                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
