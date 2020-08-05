import React from 'react';
import './App.scss';
import Post from './components/post.js';
import Recruiter from './assets/recruiter.webp';

import Question from './assets/question.md';

import ReactMarkdown from 'react-markdown';
import codeBlock from './components/codeBlock.js';

// POSTS
const questionOps = {
  counter: 82,
  isQuestion: true,
  tags: ["fullstack", "react", "angular", "javascript"],
  asked: {
    date: "Aug 4'20",
    time: "17:42",
    user: {
      img: Recruiter,
      name: "recruiter_pete",
      reputation: 481,
      gold: 1,
      silver: 24,
      bronze: 140
    }
  },
  comments: [{
    content: "Note that though, you might get this: 'Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience.'",
    options: {
      author: "Haru",
      score: 28,
      date: "Aug 4'20",
      time: "20:09"
    }
  }, {
    content: "@Hari What is the way to perform a synchronous ajax call using jQuery without use the main thread?",
    options: {
      author: "moopet",
      score: 6,
      date: "Aug 4'20",
      time: "20:43"
    }
  }, {
    content: `I don't see that this answer has anything to offer, it's just the accepted answer wrapped into a function and answered four years later. It's a bad thing to advise people to C+P, because the function does not indicate what it does. "So getURL vs get ? why does one hang my browser?" etc.`,
    options: {
      author: "Jose Juanez",
      score: 2,
      date: "Aug 5'20",
      time: "8:15"
    }
  }
  ]
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: '',
      sort_answers: 'votes'
    }
  }

  sort_answer = (sort) => {
    this.setState({
      sort_answers: sort
    });
  }

  // parseMarkdown = (text, keywords) => {
  //   let words = keywords.map(x => x.trim()).join("|");
  //   console.log(text);
  //   text = text.replace(/&lt;([A-Z][\w\d]*)/, "<<span class='green'>$1</span>");
  //   text = text.replace(/(".*")/, "<span class='red'>$1</span>");
  //   text = text.replace(/(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/, "<span class='red'>$1$2$3</span>");
  //   text = text.replace(new RegExp("\\b(" + words + ")\\b", "g"), "<span class='blue'>$1</span>");
  //   text = text.replace(new RegExp("(?:" + words + ")\\s(\\w+)", "g"), "<span class='green'>$1</span>");
  //   return text;
  // }

  componentDidMount() {
    Promise.all([
      fetch(Question)
    ])
    .then(([res1]) => Promise.all([res1.text()]))
    .then(([text1]) => this.setState({markdown: text1}));
  }

  render() {
    return (
      <div className="root">
        <header className="navbar">
          <div className="navbar-logo">
            full
            <span>stack</span>
            <span>overflow</span>
            &nbsp;dev
          </div>

        </header>
        <div className="side-panel-wrapper">
            <div className="side-panel">
                <a href="#">Top</a>
                <div className="side-panel-list">
                  <span>Skills</span>
                  <a className="active" href="#">Tags</a>
                  <a href="#">Technical</a>
                  <a href="#">Non-technical</a>
                </div>
                <div className="side-panel-list">
                  <span>Projects</span>
                  <a href="#">C4ME</a>
                  <a href="#">Boba Beware</a>
                  <a href="#">LolEsports CRUD</a>
                </div>
            </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="main-panel">
                <div className="main-title">
                    <div>Keep getting "CandidateError: This candidate isn't the right fit"</div>
                    <span>
                      4 months ago
                    </span>
                    <span>
                      22 days ago
                    </span>
                    <span>
                      138 times
                    </span>
                </div>
                <div className="main-question">
                    <Post options={questionOps}>
                      <ReactMarkdown source={this.state.markdown} renderers={{code: codeBlock}} />
                    </Post>      
                </div>
                <div className="main-answers">
                  <div className="main-answers-header">
                    <span>{15} Answers</span>
                    <div className="tabs">
                      <div onClick={() => this.sort_answer('active')} className={`tab ${this.state.sort_answers === 'active' ? 'active' : null}`}>Active</div>
                      <div onClick={() => this.sort_answer('oldest')} className={`tab ${this.state.sort_answers === 'oldest' ? 'active' : null}`}>Oldest</div>
                      <div onClick={() => this.sort_answer('votes')} className={`tab ${this.state.sort_answers === 'votes' ? 'active' : null}`}>Votes</div>
                    </div>
                  </div>
                  <div> ALL WORK AND NO PLAY </div>
                  <div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div>
                  <div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div>
                  <div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div>
                  <div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div>
                  <div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div><div> ALL WORK AND NO PLAY </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
