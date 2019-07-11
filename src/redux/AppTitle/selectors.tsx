import { createSelector } from 'reselect';

function getAppTitleSelector(state: any) {
	return state.appTitle;
}
const getAppTitleSelectorMemo = createSelector(
	getAppTitleSelector,
	(data: any) => data
);

export default {
	getAppTitleSelectorMemo
};
