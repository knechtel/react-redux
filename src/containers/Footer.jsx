import React, { Component } from 'react';

class Footer extends Component {
   


    render() {
        return (
            <div>
                <p>Posted by: Hege Refsnes</p>
                <p>Contact information: <a href="mailto:someone@example.com">
                    someone@example.com</a>.</p> Current Counter: {this.props.value}
            </div>
        );
    }

} export default Footer;