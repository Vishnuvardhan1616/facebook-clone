const Post = ({ post }) => {
    return (
      <div className="border p-4 mb-4 rounded-lg shadow-md">
        <h2 className="font-bold">{post.userName}</h2>
        <p>{post.content}</p>
      </div>
    );
  };
  
  export default Post;
  