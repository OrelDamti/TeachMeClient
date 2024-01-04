/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import MyNavbar from '../Navbar/Navbar';

const Layout = ({ children, defaultPage }) => {
    return (
        <div>
            <Container fluid className="justify-content-end">
                <MyNavbar defaultPage={defaultPage} />
                <main>
                    {children}
                </main>
            </Container>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    defaultPage: PropTypes.string.isRequired,
};

export default Layout;
