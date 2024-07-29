import { useState } from 'react';


const useHubSpotForm = (portalId, formId, region = 'eu1') => {
    const [isFormLoaded, setIsFormLoaded] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const loadForm = () => {
        if (isFormLoaded) {
            setIsFormVisible(true);
            return;
        }

        const script = document.createElement('script');
        script.src = `//js-${region}.hsforms.net/forms/embed/v2.js`;
        script.type = 'text/javascript';
        script.async = true;

        script.onload = () => {
            window.hbspt.forms.create({
                region,
                portalId,
                formId,
                target: '#hubspotForm'
            });
            setIsFormVisible(true);
        };

        document.body.appendChild(script);
        setIsFormLoaded(true);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    return { loadForm, closeForm, isFormVisible };
};

export default useHubSpotForm;
