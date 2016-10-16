import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(CommentBox, {url: "/api/comments", pollInterval: 2000}),
    document.getElementById('mount')
  );
});