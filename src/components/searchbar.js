import React from 'react';

class SearchBar extends React.Component {

    static propTypes = {
        term: React.PropTypes.string
    };

    static defaultProps = {
        [`term`]: ''
    };

    state = {
        term: this.props.term
    };

    handleInputChange = (event) => {
        let term = event.target.value;
        this.props.onSearchTermChange(term);
        this.setState({term});
    };

    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="search" className="form-control"
                       onChange={this.handleInputChange}
                       value={this.state.term}/>
            </div>
        )
    }
}

export default SearchBar;