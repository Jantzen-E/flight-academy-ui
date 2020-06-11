import React from 'react';

class signUpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <form>
                    <label>First Name</label>
                    <input type="text"/>
                    <label>Last Name</label>
                    <input type="text"/>
                </form>
            </div>
        );
    }
}

export default signUpForm;