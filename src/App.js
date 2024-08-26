import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';

function App() {
  const [tweets, setTweets] = useState(() => {
    const savedTweets = localStorage.getItem('tweets');
    return savedTweets ? JSON.parse(savedTweets) : [];
  });

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  const handleNewTweet = (tweet) => {
    const newTweet = {
      text: tweet,
      timestamp: new Date().toLocaleString(),
      replies: [],
      
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleDeleteTweet = (index) => {
    setTweets(tweets.filter((_, i) => i !== index));
  };

  const handleRetweet = (tweet) => {
    handleNewTweet(tweet);
  };

  const addReply = (tweetIndex, replyText) => {
    const updatedTweets = tweets.map((tweet, i) =>
      i === tweetIndex
        ? { ...tweet, replies: [...tweet.replies, replyText] }
        : tweet
    );
    setTweets(updatedTweets);
  };

  return (
    <div>
      <Header />
      <TweetInput onSubmit={handleNewTweet} />
      <TweetList
        tweets={tweets}
        deleteTweet={handleDeleteTweet}
        retweet={handleRetweet}
        addReply={addReply}
      />
    </div>
  );
}

export default App;