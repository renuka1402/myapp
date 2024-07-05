// SearchProjects.js
import React, { useState } from "react";
import { useSelector } from "react-redux";


const SearchProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projects = useSelector((state) => state.todo.projects);

  const handleSearch = () => {
    const filtered = projects.filter((project) =>
      project.name && project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="input-text"
          placeholder="Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>
      <br/>
      <div className="search-results">
        {filteredProjects.length > 0 ? (
          <>

            <table className="project-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Project Name</th>
                  <th>Project Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, index) => (
                  <tr key={project.id}>
                    <td>{index + 1}</td>
                    <td>{project.name}</td>
                    <td>${project.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="no-results">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchProjects;
