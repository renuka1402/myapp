import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "./todoSlice";
import "./App.css"; 
import { RxCross1 } from "react-icons/rx";


const Product= () => {
  const [projectName, setProjectName] = useState("");
  const [projectPrice, setProjectPrice] = useState("");

  const [filteredProjects, setFilteredProjects] = useState([]);

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.todo.projects);

  const handleAddProject = () => {
    dispatch(addProject({ id: Date.now(), name: projectName, price: projectPrice, status: "pending" }));
    setProjectName("");
    setProjectPrice("");
  };

  const handleDeleteProject = (projectId) => {
    dispatch(deleteProject(projectId));
  };



  const projectsToDisplay = filteredProjects.length ? filteredProjects : projects;

  let sno = 0;
  const projectRows = projectsToDisplay.map((project) => {
    sno++;
    return (
      <tr key={project.id} className="project-row">
        <td>{sno}</td>
        <td>{project.name}</td>
        <td>${project.price}</td>
        <td>
          <button className="btn-delete" onClick={() => handleDeleteProject(project.id)}><RxCross1 /></button>
        </td>
      </tr>
    );
  });

  return (
    <div className="todo-container">
      <center><h1>Project Form</h1></center>

      <div className="input-container">
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="input-text"
          placeholder="Project Price"
          value={projectPrice}
          onChange={(e) => setProjectPrice(e.target.value)}
        />
        <button className="btn-add" onClick={handleAddProject}>Add Project</button>
      </div>


      <table className="project-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Project Name</th>
            <th>Project Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projectRows.length > 0 ? (
            projectRows
          ) : (
            <tr>
              <td className="no-projects">No projects found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Product;