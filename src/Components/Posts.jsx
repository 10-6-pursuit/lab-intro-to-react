import Post from "./Post";

function Posts () {
    return (
        <>
        <div className="posts">
            <h3>Posts</h3>
                <Post />
                <Post />
                <Post />
                <div></div>
        </div>
        </>
    )
}

export default Posts;