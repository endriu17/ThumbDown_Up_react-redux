import React from 'react';

const Comment = ({text, votesUp, votesDown, id, thumbUpComment, thumbDownComment}) =>
  <li className="Comments">
    {text} 
    {/* <span className="Votes"> votes: 
      <span className="Count"> Up: {votesUp}</span>
      <span className="Count"> Down: {votesDown}</span>
    </span>  */}
    <button className="Button" onClick={() => thumbUpComment(id)}>Up: {votesUp}</button>
    <button className="Button" onClick={() => thumbDownComment(id)}>Down: {votesDown}</button>
  </li>;

export default Comment;