export const CHANGE_MODE = 'CHANGE_MODE'

export enum ScreenTypes {
    DASHBOARD_MODE = 'DASHBOARD_MODE',
	EDIT_MODE = 'EDIT_MODE',
    PREVIEW_MODE = 'PREVIEW_MODE',
    SUCCESS_MODE = 'SUCCESS_MODE',
    AUTH_MODE = 'AUTH_MODE',
    USERPROFILE_MODE = 'USERPROFILE_MODE'
}

interface changeModeAction{
    type: typeof CHANGE_MODE;
    payload:ScreenTypes;
};

export type ModeActionTypes = changeModeAction;