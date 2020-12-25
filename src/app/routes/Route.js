import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

export default function RouteWrapper({component: Component, isPrivate, ...rest}) {
    const login = false;

    if (isPrivate && !login) {
        return <Redirect to="/"/>;
    }

    if (!isPrivate && login) {
        return <Redirect to="/"/>;
    }

    return <Route {...rest} component={Component}/>;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false
};
