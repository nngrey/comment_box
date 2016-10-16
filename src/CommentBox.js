import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
    },

    componentDidMount: function() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

  render: function(){
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
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