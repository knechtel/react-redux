import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import HeaderV from './Header';
import * as actionType from '../store/actions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vetor: ["maiquel", "knechtel"],
            login: 'test',
            storedResults: [],
            valor: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ login: event.target.value });
    }
    goTest = () => {
        this.props.onStoreResult(this.state.login);
    }

    render() {
        return (
            <div>
                <HeaderV />
                <center>
                    <table>
                        <tr>
                            <td>{this.props.ctr.result}</td>
                        </tr>
                        <tr>
                            <td>Login:</td>
                            <td><input value={this.props.login} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Senha:</td>
                            <td><input type="password" /></td>
                        </tr>
                        <button onClick={() => this.props.onStoreResult(this.state.vetor)}>Submit</button>
                    </table>
                </center>
                <Footer />
                <div>
                    <ul>
                        {this.props.storedResults.map(item => {
                            return <li>{item.value}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

        ctr: state.vetor,
        storedResults: state.results,
        valor: state.vlr
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onStoreResult: (login) => dispatch({ type: actionType.SET_PAYLOAD, login })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);