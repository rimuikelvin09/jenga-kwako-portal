import React, { useEffect } from 'react';
import { jsx } from 'theme-ui';

const FacebookFeed = () => {
    useEffect(() => {
        // Load the Facebook SDK if it hasn't been loaded already
        if (!window.FB) {
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0';
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            script.nonce = 'IuDCVoPJ'; // Your nonce value
            document.body.appendChild(script);

            script.onload = () => {
                // Initialize the Facebook SDK after it's loaded
                if (window.FB) {
                    window.FB.XFBML.parse();
                }
            };

            return () => {
                document.body.removeChild(script);
            };
        } else {
            // If the SDK is already loaded, force reparse
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <section sx={styles.section}>
            <div
                className="fb-page"
                data-href="https://www.facebook.com/bbsltdke" // Replace with your Facebook Page URL
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="true"
                sx={styles.facebookFeed}
            >
                <blockquote cite="https://www.facebook.com/bbsltdke" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/bbsltdke">Benchmark Building Solutions Company LTD</a>
                </blockquote>
            </div>
        </section>
    );
};

const styles = {
    section: {
        mt: 4,
        mb: 4,
    },
    facebookFeed: {
        width: '100%',
        height: ['500px'], // Adjust height as needed
        overflow: 'hidden',
    },
};

export default FacebookFeed;
