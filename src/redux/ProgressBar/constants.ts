export const SET_PROGRESS_BAR_STATUS = 'SET_PROGRESS_BAR_STATUS';

interface setProgressBarStatusAction {
    type: typeof SET_PROGRESS_BAR_STATUS;
    payload:number;
};

export type ProgressBarActionTypes = setProgressBarStatusAction;