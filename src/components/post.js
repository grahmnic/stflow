import React from 'react';
import Comment from './comment.js';
import './post.scss';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            difference: 0
        }
    }

    componentDidMount() {
        this.setState({
            counter: this.props.options.counter,
            asked: this.props.options.asked,
            loading: true
        });
    }

    changeDifference = (val) => {
        this.setState({
            difference: val
        });
    }

    render() {
        if(this.state.loading) {
            const tags = this.props.options.tags.map(x => 
                <div key={x} className="post-tag">{x}</div>
            );

            const comments = this.props.options.comments.map(x => 
                <Comment options={x.options}>{x.content}</Comment>
            );

            return (
                <div className="post-wrapper">
                    <div className="post-side">
                        <svg className={`post-caret ${this.state.difference > 0 ? "active" : ""}`} preserveAspectRatio="none" width="36" height="36" viewBox="0 0 36 36"><path onClick={() => this.changeDifference(1)} d="M2 26h32L18 10 2 26z"></path></svg>
                        <div className="post-counter">{this.state.counter + this.state.difference}</div>
                        <svg className={`post-caret ${this.state.difference < 0 ? "active" : ""}`} preserveAspectRatio="none" width="36" height="36" viewBox="0 0 36 36" ><path onClick={() => this.changeDifference(-1)} d="M2 10h32L18 26 2 10z"></path></svg>
                    </div>
                    <div className="post-main">
                        <div className="post-content">
                            {this.props.children}
                        </div>
                        <div className="post-tags">
                            {tags}
                        </div>
                        <div className="post-meta">
                            <div className="post-links">
                                <div>share</div>
                                <div>improve this {this.props.options.isQuestion ? "question" : "answer"}</div>
                                <div>follow</div>
                            </div>
                            <div className="post-history">
                                <div className="post-edited">

                                </div>
                                <div className="post-asked">
                                    <div className="post-asked-stamp">
                                        asked {this.state.asked.date} at {this.state.asked.time}
                                    </div>
                                    <div className="post-asked-user">
                                        <img width="32" height="32" src={this.state.asked.user.img} />
                                        <div className="post-asked-user-info">
                                            <div>{this.state.asked.user.name}</div>
                                            <div>
                                                <span>{this.state.asked.user.reputation}</span>
                                                <span className="dot gold"></span>
                                                <span>{this.state.asked.user.gold}</span>
                                                <span className="dot silver"></span>
                                                <span>{this.state.asked.user.silver}</span>
                                                <span className="dot bronze"></span>
                                                <span>{this.state.asked.user.bronze}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-comments">
                            {comments}
                            <div className="post-user-comment">
                                add a comment
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}