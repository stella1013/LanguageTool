export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
interface setShowModalAction {
    type: typeof SHOW_MODAL;
    payload:boolean;
};

export type ModalActionTypes = setShowModalAction;