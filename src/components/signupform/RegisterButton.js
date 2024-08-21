/** @jsx jsx */
import { jsx, Button, Box } from 'theme-ui';
import useHubSpotForm from './useHubSpotForm';

const RegisterButton = ({ onClick, isInHeader }) => {
    const { loadForm, closeForm, isFormVisible } = useHubSpotForm('139636134', 'e3dbe126-3d3c-4f80-bc4f-3cabb8a9381e');

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            loadForm();
        }
    };

    return (
        <>
            <Box
                sx={styles.registerButton}
                aria-label="Register Here"
                onClick={handleClick}
            >
                Register Here
            </Box>
            {isFormVisible && (
                <div sx={styles.formOverlay}>
                    <div sx={isInHeader ? styles.headerFormContainer : styles.formContainer}>
                        <button sx={styles.closeButton} onClick={closeForm}>❌</button>
                        <div id="hubspotForm"></div>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    formOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3000,
    },
    formContainer: {
        position: 'fixed',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: ['90%', '80%', '60%', '50%'],
        maxWidth: '650px',
        maxHeight: '90vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    headerFormContainer: {
        position: 'fixed',
        top: '50px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: ['90%', '80%', '60%', '50%'],
        maxWidth: '650px',
        maxHeight: '90vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    registerButton: {
        borderRadius: '45px',
        fontSize: ['14px', null, null, 2],
        letterSpacing: '-0.15px',
        padding: ['12px 20px', null, '15px 30px'],
        fontFamily: 'body',
        cursor: 'pointer',
        lineHeight: 1.2,
        transition: 'all 0.25s',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
        fontWeight: 700,
        color: 'primary',
        animation: 'pulse 2s infinite',
        '@keyframes pulse': {
            '0%': {
                boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.7)',
            },
            '70%': {
                boxShadow: '0 0 0 20px rgba(255, 0, 0, 0)',
            },
            '100%': {
                boxShadow: '0 0 0 0 rgba(255, 0, 0, 0)',
            },
        },
        '& svg': {
            color: 'white',
        },
        '&:hover': {
            color: 'white',
            bg: 'primary',
            boxShadow: 'rgba(0, 0, 0, 0.7) 0px 12px 24px -10px',
        },
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: '#333',
        zIndex: 3100,
    },
};

export default RegisterButton;