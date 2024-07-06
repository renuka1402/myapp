import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state, action) => {
      const projectName = action.payload.name;
      const isDuplicate = state.projects.some(project => project.name === projectName);

      if (isDuplicate) {
        toast.error(`${projectName} already exists!`); // Use toast.error() for error notification
      } else {
        state.projects.push(action.payload);
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
  },
});

export const { addProject, deleteProject } = todoSlice.actions;
export default todoSlice.reducer;
