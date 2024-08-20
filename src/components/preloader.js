/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export default function PreLoader({ isExiting }) {
    return (
        <Box
            sx={styles.loaderContainer}
            className={isExiting ? 'slide-up' : ''}
        >
            <Box sx={styles.spinner}></Box>
        </Box>
    );
}

const styles = {
    loaderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        zIndex: 9999,
        transition: 'transform 0.8s ease, opacity 0.8s ease',
        '&.slide-up': {
            transform: 'translateY(-100%)',
            opacity: 1,
        },
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '5px solid rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid #007BFF', // Change color here
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    },
};
