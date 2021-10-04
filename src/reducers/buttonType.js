import { SET_BUTTON_TYPE } from "../actions";

const buttonType = (state="primary", {type, buttonType}) => {
    switch(type) {
        case SET_BUTTON_TYPE:
            return buttonType;
        default:
            return state;
    }
}

export default buttonType;