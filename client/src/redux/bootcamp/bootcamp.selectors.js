import { createSelector } from 'reselect';

const selectBootcampState = state => state.bootcampState;


export const selectBootcamps = createSelector(
    [selectBootcampState],
    (bootcampState) => bootcampState.bootcamps
)