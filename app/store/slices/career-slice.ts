import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { JobCareerPositionType } from '~/constants/navigation';

type CareerState = {
  selectedPosition: JobCareerPositionType | null;
};

const initialState: CareerState = {
  selectedPosition: null,
};

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {
    setPosition(state, action: PayloadAction<JobCareerPositionType>) {
      state.selectedPosition = action.payload;
    },
    clearPosition(state) {
      state.selectedPosition = null;
    },
  },
});

export const { setPosition, clearPosition } = careerSlice.actions;
export default careerSlice.reducer;
