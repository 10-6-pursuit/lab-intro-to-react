import Post from "./Post";

function Posts () {
    return (
        <>
        <div id="Posts">
            <h3>Posts</h3>
            <ul>
                <Post />
                <Post />
                <Post />
                <div>...</div>
            </ul>
        </div>
        </>
    )
}

export default Posts;