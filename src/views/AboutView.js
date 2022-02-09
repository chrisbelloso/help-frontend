import './AboutView.css'

const AboutView = () => {
    return (
        <>
            <div>
                <h1 className="AboutTitle">How It Works?</h1>
            </div>

            <div>
                <h5 className="AboutSubtitle">
                The Help App is a website used to get immediate help after a crash. 
                It also has a pre-saved "favorites" feature for a faster 
                contact with your loved ones in a moment of distress.
                </h5>
            </div>

            <div className="BrbContainer">
                <h2 className="BrbTitle">Big Red Button</h2>
                <ul className="UlText">
                    <li>
                        Once you press the big red button you will be directed to a 911 operator.
                    </li>
                    <br />
                    <li>
                        DO NOT press the red button if there is no emergency going on.
                    </li>
                </ul>
            </div>

            <div className="FavContainer">
                <h2 className="FavTitle">Favorites Button</h2>
                <ul className="UlText">
                    <li>
                        By pressing the "Favorites" button you will enter your own customizable
                        list of favorite contacts.
                    </li>
                </ul>
            </div>

            <div className="FavInfoContainer">
                <h2 className="FavInfoTitle">
                    "Favorites" Page:
                </h2>

                <h4>What you will see here?</h4>
            
                <p>
                    In the "Favorites" page you will be able to add new favorites in your
                    account, and see the ones you've already added.
                </p>

                <h5 className="addNew">
                Add Favorite Contact +
                </h5>

                <p>
                    Click this to add a new favorite
                </p>
                <ul>
                    <li>
                        Insert the name and phone number of this favorite.
                    </li>
                    <li>
                        Make sure to type the phone number without any spaces or 
                        special characters
                    </li>
                    <br />
                    <p>Example: 0000000000</p>
                    <li>
                        Once added you will see your new "Favorite" displayed like this:
                    </li>
                    <br />
                    <li className="favExample">
                        name
                    </li>
                    <br />
                    <br />
                    <li>
                        Click on the needed "Favorite" to call
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AboutView;

