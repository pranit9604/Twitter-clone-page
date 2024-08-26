import React, { useState } from 'react';
import './TweetList.css';

const TweetList = ({ tweets, deleteTweet, retweet, addReply }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          tweet={tweet}
          index={index}
          deleteTweet={deleteTweet}
          retweet={retweet}
          addReply={addReply}
        />
      ))}
    </div>
  );
};

const Tweet = ({ tweet, index, deleteTweet, retweet, addReply }) => {
  const [likes, setLikes] = useState(0);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleReplyToggle = () => {
    setShowReplyInput(!showReplyInput);
  };

  const handleReplySubmit = () => {
    if (replyText) {
      addReply(index, replyText);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className="tweet">
      <div className="tweet-content">
        <p>{tweet.text}</p>
        <span className="tweet-timestamp">{tweet.timestamp}</span>
        {tweet.replies && (
          <div className="replies">
            {tweet.replies.map((reply, i) => (
              <p key={i} className="reply">
                {reply}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="tweet-actions">
        <button onClick={handleLike}>Like {likes}</button>
        <button onClick={() => retweet(tweet.text)}>Retweet</button>
        <button onClick={handleReplyToggle}>Reply</button>
        <button onClick={() => deleteTweet(index)}>Delete</button>
      </div>
      {showReplyInput && (
        <div className="reply-input">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button onClick={handleReplySubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default TweetList;