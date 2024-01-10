import { createContext, useReducer } from "react";

// Will use with useContext hook as useContext(WorkoutContext)
export const WorkoutContext = createContext();

const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter(w => w._id !== action.payload._id)
      }
    default:
      return state;

  }
}
export const WorkoutContextProvider = ({ children }) => {

  // useReducer Hook
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
}