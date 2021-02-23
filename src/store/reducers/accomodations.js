import react from 'react';
const accomodation = (state = [], action) => {
    switch (action.type === "CREATE_ACCOMODATION") {
        case "CREATE_ACCOMODATION":
            return state.concat(action.payload);
    }
    return state

}
export default accomodation;