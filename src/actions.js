// import uuid from 'uuid';
// export const ADD_COMMENT = 'ADD_COMMENT';
// export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

// export function addComment(text) {
//   return {
//     type: ADD_COMMENT,
//     id: uuid.v4(),
//     text: text
//   }
// }


// export function thumbUpComment(commentId) {
//   return {
//     type: THUMB_UP_COMMENT,
//     id: commentId
//   }
// }

import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const EDIT_COMMENT = 'EDIT_COMMENT';

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'


export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: text,
    id: uuid.v4()
  }
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text: text,
    id: id
  }
}

export function thumbUpComment(id) {
    return {
      type: THUMB_UP_COMMENT,
      id: id
    }
  }

export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  }
}


// dispatch(addComment('new comment!'));
// dispatch(addComment('next new comment!'));


// const boundAddComment = text => dispatch(addComment(text));

// boundAddComment('new comment!');
// boundAddComment('next new comment!');

// const boundRemoveComment = id => dispatch(removeComment(id));
// boundRemoveComment(10);

// const boundEditComment = (id, text) => dispatch(editComment(id, text));
// boundEditComment(10, 'this is edited comment');

// const boundThumbUpComment = value => disptach(thumbUpComment(value));
// boundThumbUpComment(+1);

// const boundThumbDownComment = value => disptach(thumbDownComment(value));
// boundThumbDownComment(-1);