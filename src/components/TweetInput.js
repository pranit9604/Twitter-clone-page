import React, { useState } from 'react';
import './TweetInput.css';

const TweetInput = ({ onSubmit }) => {
  const [tweet, setTweet] = useState('');
  const maxChars = 280;

  const handleChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setTweet(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet) {
      onSubmit(tweet);
      setTweet('');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={tweet}
        onChange={handleChange}
        placeholder="What's happening?"
      />
      <div className="tweet-info">
        <span>{maxChars - tweet.length} characters remaining</span>
        <button type="submit" disabled={!tweet.trim()}>
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetInput;