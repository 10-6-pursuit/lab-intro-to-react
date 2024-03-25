import "./UserProfile.css"

function UserProfile () {
    return (
        <div className="UserProfile">
            <img src="src/profile.png" alt="profile" />
            <div className="info">
                <h3>Jordan Walke</h3>
                <h4>React Creator</h4>
                <h5>Lorem Ipsem</h5>
            </div>
        </div>
    )
}

export default UserProfile;