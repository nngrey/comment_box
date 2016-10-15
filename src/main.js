import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(CommentBox),
    document.getElementById('mount')
  );
});