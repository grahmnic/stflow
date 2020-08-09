import React from 'react';
import './App.scss';
import Post from './components/post.js';

import Recruiter from './assets/recruiter.webp';
import Punpun from './assets/punpun.jpg';
import Me from './assets/me.jpg';

import Question from './assets/question.md';
import Answer1 from './assets/answer_1.md';
import Answer2 from './assets/answer_2.md';

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
    content: "+1 Ran into this problem a lot, there really isn't a good way of finding valid Candidates so I often just use a hack. Not sure if there are other libraries that come with a fix.",
    options: {
      author: "recruiter_george",
      score: 28,
      date: "Aug 4'20",
      time: "20:09"
    }
  }, {
    content: "@recruiter_george I heard of a new candidate library but I'm not exactly an expert of it, can anyone point us in the right direction?",
    options: {
      author: "recruiter_joe",
      score: 0,
      date: "Aug 4'20",
      time: "20:43"
    }
  }, {
    content: `What is even the point of this garbage question? Do your own research first before coming to us to do your homework for you`,
    options: {
      author: "moop",
      score: 2,
      date: "Aug 5'20",
      time: "8:15"
    }
  }
  ]
}

const answer1Ops = {
  counter: 118,
  isQuestion: false,
  asked: {
    date: "Aug 6'20",
    time: "7:42",
    user: {
      img: Punpun,
      name: "oyasumi",
      reputation: 2481,
      gold: 8,
      silver: 80,
      bronze: 212
    }
  },
  comments: [{
    content: "Why is this garbage even the accepted answer?",
    options: {
      author: "greg95",
      score: 0,
      date: "Aug 6'20",
      time: "8:11"
    }
  },
  ]
}

const answer2Ops = {
  counter: 1336,
  isQuestion: false,
  asked: {
    date: "Aug 6'20",
    time: "17:22",
    user: {
      img: Me,
      name: "Nick_Chen",
      reputation: 1,
      gold: 346,
      silver: 650,
      bronze: 7523
    }
  },
  comments: [{
    content: "THANK YOU THANK YOU. Will use this from now on +1",
    options: {
      author: "recruiter_pete",
      score: 6,
      date: "Aug 6'20",
      time: "18:35"
    }
  },
  ]
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answers: [],
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
      fetch(Question),
      fetch(Answer1),
      fetch(Answer2)
    ])
    .then(([res1, res2, res3]) => Promise.all([res1.text(), res2.text(), res3.text()]))
    .then(([text1, text2, text3]) => this.setState({question: text1, answers: [text2, text3]}));
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
                      <ReactMarkdown source={this.state.question} renderers={{code: codeBlock}} />
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
                  <Post options={answer1Ops}>
                    <ReactMarkdown source={this.state.answers[0]} renderers={{code: codeBlock}} />
                  </Post>
                  <Post options={answer2Ops}>
                    <ReactMarkdown source={this.state.answers[1]} renderers={{code: codeBlock}} />
                  </Post>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
