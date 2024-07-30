//<a class="twitter-timeline" href="https://twitter.com/BenchmarkBuild4?ref_src=twsrc%5Etfw">Tweets by BenchmarkBuild4</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const TwitterFeed = () => {
    return (
        <section sx={styles.section}>
            <div
                className="twitter-feed"
                sx={styles.twitterFeed}
                dangerouslySetInnerHTML={{
                    __html: `
            <a class="twitter-timeline" href="https://twitter.com/BenchmarkBuild4?ref_src=twsrc%5Etfw">T
            weets by BenchmarkBuild4
            </a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          `,
                }}
            ></div>
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
        height: ['400px', '500px'], // Adjust height as needed
        overflow: 'hidden',
    },
};

export default TwitterFeed;
