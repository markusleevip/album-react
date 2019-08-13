import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            date : new Date(),
        }
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.updateDate, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    updateDate() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <footer>
                <h2>Photo Albums! {this.state.date.toLocaleTimeString()}</h2>
            </footer>
        );

    }
}
export default Header;