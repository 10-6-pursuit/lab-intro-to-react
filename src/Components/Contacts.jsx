import ContactUserCard from "./ContactUserCard"

const Contacts = () => {
  return (
    <div className="bg-[#f8f8f8] col-start-2 col-span-1
    row-start-1 row-span-3 h-[90vh] m-[25px] border-2 border-swiss-coffee-300 text-center">
      <h1>Contacts</h1>
      <ContactUserCard/>
      <ContactUserCard/>
      <ContactUserCard/>
      <ContactUserCard/>
    </div>
  )
}

export default Contacts