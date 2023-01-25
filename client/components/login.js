import React from 'react';

export default function LoginPage({ loggedIn, setLoggedIn }) {
    return (
        <div>
            <span role="img" aria-label="wave">
            </span>
            <h3> You are signed in!</h3>
            <Button onClick={() => setLoggedIn(!loggedIn)}
                Logout />

        </div>
    )
}