import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

export default class Grid extends Component {
    renderList() {
        return this.props.items.map((item) => (
            <Single key={item.id} item={item} />
        ));
    }

    render() {
        return(
            <ul className="row">
                {this.renderList()}
            </ul>
        );
    }
}

Grid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
        release_date: PropTypes.string,
        views: PropTypes.string,
        image: PropTypes.string,
    })).isRequired,
};
