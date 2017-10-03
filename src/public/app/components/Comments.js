import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>Comments</span>
        {this.props.selectedVideoComments.map((comment, idx) => (
          <div key={idx}>
            <span>{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
            <span>{comment.snippet.topLevelComment.snippet.textDisplay}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default Comments;
