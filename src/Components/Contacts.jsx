import ContactUserCard from "./ContactUserCard";

function Contacts () {
    return (
        <>
        <div id="Contacts">
        <h2>Yo, this is the Contacts! I am going to have 4 more children components.</h2>
        <ul>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        </ul>
        </div>
        </>
    )

}

export default Contacts;