import React from "react";
import "./Posts.css";

class Posts extends React.Component {
  state = { posts: [] };

  getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts.json");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (e) {
      console.error(`Fetch failed: ${e.message}`);
    }
  };

  componentDidMount = () => this.getPosts();

  render() {
    return (
      <ul id="posts">
        {this.state.posts.map(post => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Posts;
