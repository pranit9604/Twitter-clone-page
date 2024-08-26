import React, { useState } from 'react';
import Reply from './Reply';

function Tweet({ text, replies, addReply }) {
  const [replyText, setReplyText] = useState('');

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    addReply(replyText);
    setReplyText(''); // Clear the reply input after submission
  };

  return (
    <div className="tweet">
      <p>{text}</p>
      <form onSubmit={handleReplySubmit}>
        <input
          type="text"
          value={replyText}
          onChange={handleReplyChange}
          placeholder="Reply..."
        />
        <button type="submit">Reply</button>
      </form>
      <div className="replies">
        {replies.map((reply, index) => (
          <Reply key={index} text={reply} />
        ))}
      </div>
    </div>
  );
}

export default Tweet;