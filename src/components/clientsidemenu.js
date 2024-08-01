// components/SideMenu.js

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Box } from 'theme-ui';

const menuItems = [
    {
        id: 'calculator',
        label: 'Amortization Calculator'
    },
    {
        id: 'application',
        label: 'Application Form'
    },
    {
        id: 'requirements',
        label: 'Requirements'
    },
    {
        id: 'plans',
        label: 'Sample Plans'

    },
];

const SideMenu = () => {
    return (
        <Box sx={styles.sideMenu}>
            <nav>
                <ul sx={styles.menuList}>
                    {menuItems.map((item) => (
                        <li key={item.id} sx={styles.menuItem}>
                            <ScrollLink
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                sx={styles.navLink}
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    );
};

const styles = {
    sideMenu: {
        position: 'sticky',
        top: '100px', // Adjust this value based on your design
        width: '250px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        zIndex: 1000,
        '@media screen and (max-width: 768px)': {
            display: 'none', // Hide on mobile
        },
    },
    menuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    menuItem: {
        marginBottom: '10px',
        '&:last-child': {
            marginBottom: 0,
        },
    },
    navLink: {
        textDecoration: 'none',
        color: 'text',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'color 0.25s',
        '&:hover': {
            color: 'primary',
        },
    },
};

export default SideMenu;
