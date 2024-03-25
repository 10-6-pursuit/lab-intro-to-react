const UserProfile = () => {
  return (
    <div className="col-span-1 row-span-1 flex border border-swiss-coffee-300 m-[25px] pb-20 bg-[#f8f8f8]"> 
      <img className="max-w-[200px] aspect-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DZ96fH-5g3OkZuMwb2Y5rgAAAA%26pid%3DApi&f=1&ipt=687c9d356d3c76881f4ef526dbce788e4165e655feb0d7a4482cb90c598c038b&ipo=images" alt="profile image"/>
      <div className="m-5">
      <h1>Gerardo Garcia</h1>
      <h2>Full Stack Developer</h2>
      <h3 className="xl:text-lg sm:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde optio odio iste obcaecati doloremque quisquam temporibus architecto est ab quibusdam cum dicta adipisci officiis, commodi consequuntur. Ab quos debitis dolores?</h3>
      </div>
    </div>
  )
}
export default UserProfile;