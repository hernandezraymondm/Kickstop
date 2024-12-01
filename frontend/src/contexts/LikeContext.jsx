import React, { createContext, useContext, useState, useEffect } from 'react';

const LikeContext = createContext();

export const useLike = () => useContext(LikeContext);

export const LikeProvider = ({ children }) => {
  const [likeItems, setLikeItems] = useState(() => {
    const localData = localStorage.getItem('likeItems');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('likeItems', JSON.stringify(likeItems));
  }, [likeItems]);

  const addToLiked = (item) => {
    setLikeItems((prevItems) => {
      const itemInLiked = prevItems.find((i) => i._id === item._id);
      if (itemInLiked) {
        // Item already liked, no need to add it again
        return prevItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromLiked = (id) => {
    setLikeItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const clearLiked = () => {
    setLikeItems([]);
    localStorage.removeItem('likeItems');
  };

  return (
    <LikeContext.Provider
      value={{
        likeItems,
        addToLiked,
        removeFromLiked,
        clearLiked,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
};
