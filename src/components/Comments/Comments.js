import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { id, userName, text} = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {props.map((prop) => {
        return (
          <Prop id={prop.id} userName={prop.userName} text={prop.text} />
        );
      })}
    </div>
  );
};

export default Comments;
