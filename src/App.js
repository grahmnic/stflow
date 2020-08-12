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
const questionOptions = {
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
    content: "+1 Ran into this problem a lot, there really isn't a good way of finding valid Candidates so I often just use a hack. Not sure if there's another module we can use as a fix.",
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
      author: "greg86",
      score: 2,
      date: "Aug 5'20",
      time: "8:15"
    }
  }
  ]
}

const skillsOptions = {
  counter: 48,
  id: "skills",
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
  comments: [
  ]
}

const introOptions = {
  counter: 336,
  id: "introduction",
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

  convertRemToPixels = (rem) => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  // LOAD ALL THE MARKDOWN FILES HERE
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.querySelector(a.getAttribute('href'));
        const top = el.getBoundingClientRect().top + window.pageYOffset - this.convertRemToPixels(3);
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      });
    });

    this.menuLinks = document.querySelectorAll('.side-panel-list a[href^="#"]');
    this.menuScroll = [];
    this.menuLinks.forEach((el) => {
      var section = el.getAttribute("href");
      if (section.length)
        this.menuScroll.push(section);
    });

    window.addEventListener('scroll', () => {
      var offset = window.scrollY + this.convertRemToPixels(6);
      var cur = [];
      this.menuScroll.map(el => {
        var test = document.querySelector(el).offsetTop;
        if(test < offset)
          cur.push(el);
      });
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur : "";
      this.menuLinks.forEach((el) => {
        el.classList.remove('active');
        if(id === el.getAttribute("href"))
          el.classList.add('active');
      });
    });

    Promise.all([
      fetch(Question),
      fetch(Answer1),
      fetch(Answer2)
    ])
    .then(([res1, res2, res3]) => Promise.all([res1.text(), res2.text(), res3.text()]))
    .then(([text1, text2, text3]) => this.setState({question: text1, answers: [text3, text2]}));
  }

  render() {
    return (
      <div className="root">
        <div id="top"></div>
        <header className="navbar">
            <div>Resume</div>
            <div>Contacts</div>
            <div>Potato Me</div>
        </header>
        <div className="side-panel-wrapper">
            <div className="side-panel">
                <a href="#top">Top</a>
                <div className="side-panel-list">
                  <span>About Me</span>
                  <a href="#introduction">Introduction</a>
                  {/* <a href="#interests">Interests</a> */}
                  <a href="#skills">Skills</a>
                </div>
                <div className="side-panel-list">
                  <span>Projects</span>
                  {/* <a href="#">C4ME</a>
                  <a href="#">Boba Beware</a>
                  <a href="#">LolEsports CRUD</a> */}
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
                    <Post options={questionOptions}>
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
                  <Post options={introOptions}>
                    <ReactMarkdown source={this.state.answers[0]} renderers={{code: codeBlock}} />
                  </Post>
                  <Post options={skillsOptions}>
                    <ReactMarkdown source={this.state.answers[1]} renderers={{code: codeBlock}} />
                  </Post>
                  <div style={{height: "1000px"}}></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
