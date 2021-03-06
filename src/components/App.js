// @flow
/* eslint jsx-a11y/href-no-hash: 0 jsx-a11y/anchor-is-valid: 0 */
import React, { Component, Fragment } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {courses};
    }

    render() {
        return (
            <Fragment>
                <div className="navbar-fixed">
                    <nav className="blue lighten-2">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo center">Courses</a>
                        </div>
                    </nav>
                </div>
                <Grid items={this.state.courses} />
            </Fragment>
        );
    }
}
