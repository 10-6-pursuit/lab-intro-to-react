import Post from "./Post";

function Posts () {
    return (
        <>
        <div id="Posts">
            <h2>Posts</h2>
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