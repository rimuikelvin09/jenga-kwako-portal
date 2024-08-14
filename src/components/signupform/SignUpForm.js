/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import RegisterButton from './RegisterButton'; // Import RegisterButton

export default function SignUpForm() {
    const router = useRouter();

    const navigateToForm = () => {
        router.push('/signupform');
    };

    return (
        <>
            <RegisterButton onClick={navigateToForm} />
        </>
    );
}
