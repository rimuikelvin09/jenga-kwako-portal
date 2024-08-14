import React, { useEffect } from 'react';
import { jsx } from 'theme-ui';

const TwitterFeed = () => {
    useEffect(() => {
        // Check if the Twitter widgets.js script is already present
        const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');

        if (!existingScript) {
            // If the script is not already added, create and append it
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            document.body.appendChild(script);

            // Initialize Twitter widget after the script loads
            script.onload = () => {
                if (window.twttr) {
                    window.twttr.widgets.load();
                }
            };

            return () => {
                document.body.removeChild(script);
            };
        } else {
            // If the script is already loaded, force reparse
            if (window.twttr) {
                window.twttr.widgets.load();
            }
        }
    }, []);

    return (
        <section sx={styles.section}>
            <div
                className="twitter-feed"
                sx={styles.twitterFeed}
            >
                <a
                    className="twitter-timeline"
                    href="https://twitter.com/BenchmarkBuild4?ref_src=twsrc%5Etfw"
                >
                    Tweets by BenchmarkBuild4
                </a>
            </div>
        </section>
    );
};

const styles = {
    section: {
        mt: 4,
        mb: 4,
    },
    twitterFeed: {
        width: '100%',
        height: ['500px', '400px'], // Adjust height as needed
        overflow: 'hidden',
    },
};

export default TwitterFeed;
