import { RECEIVE_HELLO_WORLD } from "../actions";

const helloWorld = (state="", {type, text}) => {
    switch(type) {
        case RECEIVE_HELLO_WORLD:
            return text;
        default:
            return state;
    }
}

export default helloWorld;