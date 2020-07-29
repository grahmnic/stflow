import React from 'react';
import './post.scss';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post-wrapper">
                <div className="post-side">

                </div>
                <div className="post-main">
                    <div className="post-content">

                    </div>
                    <div className="post-tags">

                    </div>
                    <div className="post-meta">
                        <div className="post-links">

                        </div>
                        <div className="post-history">
                            <div className="post-edited">

                            </div>
                            <div className="post-asked">

                            </div>
                        </div>
                    </div>
                    <div className="post-comments">
                    </div>
                </div>
            </div>
        );
    }
}