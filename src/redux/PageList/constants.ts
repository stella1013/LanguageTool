export const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE'
export const DECREMENT_CURRENT_PAGE = 'DECREMENT_CURRENT_PAGE'


interface incrementCurrentPageAction{
    type: typeof INCREMENT_CURRENT_PAGE;
    payload:number;
};

interface decrementCurrentPageAction{
    type: typeof DECREMENT_CURRENT_PAGE;
    payload:number;
};

export type PageListActionTypes = incrementCurrentPageAction | decrementCurrentPageAction;