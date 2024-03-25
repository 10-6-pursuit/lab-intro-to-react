import Post from "./Post"

const Posts =() => {
  return (
    <div className="bg-[#f8f8f8] col-start-1 row-start-2 row-span-2 m-[25px] border border-swiss-coffee-50 text-center">
      <h1 className="mb-4">Posts</h1>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts