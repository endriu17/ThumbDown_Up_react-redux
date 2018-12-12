import {
    ADD_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT,
} from './actions.js';

export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votesUp: 0,
                votesDown: 0
            }
            , ...state];
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votesUp: comment.votesUp + 1}
                }
            return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votesDown: comment.votesDown - 1}
                }
            return comment;
            });
        default:
            return state;
    }
}