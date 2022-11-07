import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSent, setHasBeenSent] = useState(false);

    const makeUser = (e) => {
        e.preventDefault();
        const freshUser = {
            firstName,
            lastName,
            email,
            password,
        };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setHasBeenSent(true);
    };

    // const politeMessage = () => {
    //     if (hasBeenSent) {
    //         return "Thanks for pushing the button!"
    //     } else {
    //         return "The button needs pushing!"
    //     }
    // };

    return(
        <form onSubmit={makeUser}>
            {/* <h3>{politeMessage()} </h3> */}
            {
                hasBeenSent ?
                <h3>Thanks for pushing the button!</h3> :
                <h3>The button needs pushing!</h3>
            }
            <div>
                <label>First Name</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} />
            </div>
            {
                firstName && firstName.length < 2  ?
                <p>First name must be at least two (2) characters long!</p> :
                ""
            }
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} />
            </div>
            {
                lastName && lastName.length < 2 ? <p>Last name must be at least two (2) characters long!</p> : ""
            }
            <div>
                <label>Email:</label>
                <input type="email" onChange={ (e) => setEmail(e.target.value)} />
            </div>
            {
                email && email.length < 5 ? <p>Email must be at least five (5) characters long!</p> : ""
            }
            <div>
                <label>Password:</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} />
            </div>
            {
                password && password.length < 8 ? <p>Password must be at least eight (8) characters long!</p> : ""
            }
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} />
            </div>
            {
                confirmPassword && confirmPassword != password ? <p>Passwords must match!</p> : ""
            }
            <input type="submit" value= "Make User" />
        </form>
    );
};

export default Form;