import actions from "./actions";

// This is a link to an action defined in actions.js.
const incrementPage = actions.incrementCurrentPageAction;
const decrementPage = actions.decrementCurrentPageAction;

export default {
    incrementPage,
    decrementPage
};