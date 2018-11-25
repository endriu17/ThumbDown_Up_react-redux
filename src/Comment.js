import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li className="Comments">
    {text} <span>votes: <span className="Count">{votes}</span></span> <button className="Button" onClick={() => thumbUpComment(id)}>Thumb up</button><button className="Button" onClick={() => thumbDownComment(id)}>Thumb down</button>
  </li>;

export default Comment;