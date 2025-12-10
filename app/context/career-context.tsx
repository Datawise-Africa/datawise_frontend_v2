import type { JobCareerPositionType } from '@/constants/navigation';
import { createContext, useContext, useReducer } from 'react';

type JobCareerState = {
  selectedPosition: JobCareerPositionType | null;
};

type JobCareerAction =
  | { type: 'SET_POSITION'; payload: JobCareerPositionType }
  | { type: 'CLEAR_POSITION' };

type JobCareerContextType = {
  state: JobCareerState;
  dispatch: React.Dispatch<JobCareerAction>;
};

export const JobCareerContext = createContext<JobCareerContextType | undefined>(
  undefined
);

const initialState: JobCareerState = { selectedPosition: null };

function reducer(state: JobCareerState, action: JobCareerAction) {
  switch (action.type) {
    case 'SET_POSITION':
      return { ...state, selectedPosition: action.payload };
    default:
      return state;
  }
}

type JobCareerProviderProps = {
  children: React.ReactNode;
};

export const JobCareerProvider = ({ children }: JobCareerProviderProps) => {
  //   if (typeof window === "undefined") {
  //     return <>{children}</>;
  //   }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <JobCareerContext.Provider value={{ state, dispatch }}>
      {children}
    </JobCareerContext.Provider>
  );
};

export const useJobCareerContext = () => {
  const context = useContext(JobCareerContext);
  if (!context) {
    throw new Error(
      'useJobCareerContext must be used within a JobCareerProvider'
    );
  }
  return context;
};
