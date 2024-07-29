/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import useHubSpotForm from './useHubSpotForm';
import { useRouter } from 'next/router';

export default function SignUpForm() {
    const router = useRouter();

    const navigateToForm = () => {
        router.push('/signupform');
    };

    const { loadForm, isFormVisible, closeForm } = useHubSpotForm('139636134', 'e3dbe126-3d3c-4f80-bc4f-3cabb8a9381e');

    return (
        <>
            <Button
                className="donate__btn"
                variant="secondary"
                aria-label="Sign-Up"
                onClick={navigateToForm}
            >
                Sign-Up form
            </Button>
            {
                isFormVisible && (
                    <div sx={styles.formOverlay}>
                        <div sx={styles.formContainer}>
                            <button sx={styles.closeButton} onClick={closeForm}>❌</button>
                            <div id="hubspotForm"></div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

const styles = {
    formOverlay: {
        mt: '400px',
        width: '100%',
        height: '100%',
        maxWidth: '100vw',
        maxHeight: '90vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    formContainer: {
        position: 'relative',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '650px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
    },
    closeButton: {
        position: 'fixed',
        top: '-280px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: '#333',
        zIndex: 1100,
    },
};
