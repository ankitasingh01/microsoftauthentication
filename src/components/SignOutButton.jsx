import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

// Same options as SignInButton, option 1 uses popups, option 2 uses redirects. Comment in your pick...
// The instance.logoutXXX call in the function must match the exported statement

function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign Out using Popup</Button>
    );
}

// function handleLogout(instance) {
//     instance.logoutRedirect().catch(e => {
//         console.error(e);
//     });
// }

// export const SignOutButton = () => {
//     const { instance } = useMsal();

//     return (
//         <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign Out using Redirect</Button>
//     )
// }
