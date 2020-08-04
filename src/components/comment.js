import React from 'react';
import './comment.scss';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: this.props.options.score,
            author: this.props.options.author,
            date: this.props.options.date,
            time: this.props.options.time
        }
    }

    render() {
        return (
            <div className="comment-wrapper">
                <span className={this.state.score >= 15 ? `score-high` : (this.state.score >= 5 ? `score-medium` : `score-low`)}>{this.state.score}</span>
                <div>{this.props.children} - <span>{this.state.author}</span> <span>{this.state.date}</span><span>{this.state.time}</span></div>
            </div>
        )
    }
}