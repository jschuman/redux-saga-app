import { SET_DANGER_BUTTON } from "../actions";

const dangerButton = (state=false, {type, on}) => {
    switch(type) {
        case SET_DANGER_BUTTON:
            return on;
        default:
            return state;
    }
}

export default dangerButton;