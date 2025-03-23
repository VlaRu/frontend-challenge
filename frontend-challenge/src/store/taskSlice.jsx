import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: [],
    count: 0,
  },
  reducers: {
    addNewTask: (state, action) => {
      if (!Array.isArray(state.value)) state.value = [];
      state.value.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
      state.count = state.value.length;
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
      state.count = state.value.length;
    },
    toggleTask: (state, action) => {
      const task = state.value.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      state.count = state.value.filter((task) => !task.completed).length;
    },
    clearCompletedTasks: (state) => {
      state.value = state.value.filter((task) => !task.completed);
      state.count = state.value.length;
    },
  },
});

export const { addNewTask, deleteTask, toggleTask, clearCompletedTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
