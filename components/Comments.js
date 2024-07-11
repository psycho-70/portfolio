import { useState, useEffect } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(3); // Initial visible comments
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value.slice(0, 20));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || comment.trim() === '') {
      alert('Please enter your name and comment.');
      return;
    }

    const newComment = {
      id: new Date().getTime(),
      text: comment,
      username: username,
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    setComment('');
    setUsername('');
  };

  const handleLike = (id) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id && !comment.liked) {
        return { ...comment, likes: comment.likes + 1, liked: true };
      }
      return comment;
    });

    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleLoadMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 3);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold py-4">Add your Comments below</h1>
      <div className='h-[1px] w-full bg-white'></div>
      <div className="bg-slate-800 flex justify-center flex-wrap p-4">
        <div className="right w-full md:w-1/2 p-4">
          <h1 className='text-red-500 font-bold uppercase p-2 text-xl'>Join the Discussion</h1>
          <header className="formhaeder px-2 capitalize text-xl">
            If you ask something, please put the comments below
          </header>
          <form className="w-full p-2" onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-white mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChangeUsername}
              maxLength={20}
              minLength={6}
              className="w-full p-2 mb-4 border border-gray-300 text-black rounded-lg"
              required
            />
            <label htmlFor="comment" className="block text-white mb-2">
              Comment:
            </label>
            <textarea
              rows={3}
              id="comment"
              name="comment"
              value={comment}
              onChange={handleChangeComment}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
              required
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="left p-0 md:px-2 w-full md:w-1/2 overflow-y-auto">
          <h1 className="text-center font-bold text-xl p-4">Comments</h1>
          <ul className="list-none pl-0">
            {error && <li className="text-red-500">{error}</li>}
            {comments.slice(0, visibleComments).map((comment) => (
              <li
                key={comment.id}
                className="border p-0 md:p-4 mb-2 rounded-lg break-words"
              >
                <div className="flex items-center mb-2">
                  <img
                    src='/avatar-man.gif'
                    alt={comment.username}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-bold">{comment.username}</span>
                </div>
                <p
                  className="mb-2 px-12 whitespace-normal overflow-auto"
                  style={{ maxHeight: '120px', wordWrap: 'break-word' }}
                >
                  {comment.text}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleLike(comment.id)}
                    className={`text-sm px-3 py-1 m-2 rounded ${comment.liked ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                    disabled={comment.liked}
                  >
                    Like ({comment.likes})
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {visibleComments < comments.length && (
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handleLoadMore}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Load More ({comments.length - visibleComments} remaining)
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
    </>
  );
};

export default Comments;
