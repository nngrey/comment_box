import React from 'react';
import CommentList from './CommentList';

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList />
      </div>
    )
  }
});

// class CommentBox extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// }

export default CommentBox;