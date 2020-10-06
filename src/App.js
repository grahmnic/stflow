import React from 'react';
import './App.scss';
import Post from './components/post.js';

import Question from './assets/data/question.js';
import Skills from './assets/data/skills.js';
import Intro from './assets/data/intro.js';
import Progress from './assets/data/progress.js';

import {Github} from '@styled-icons/entypo-social';
import {LinkedinSquare} from '@styled-icons/boxicons-logos';
import {Email} from '@styled-icons/material';

// PACKAGES
import moment from 'moment';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      question: null,
      answers: [],
      sort_answers: 'votes',
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

    this.menuLinks = document.querySelectorAll('.side-panel a[href^="#"]');
    this.menuScroll = [];
    this.menuLinks.forEach((el) => {
      var section = el.getAttribute("href");
      if (section.length)
        this.menuScroll.push(section);
    });
    this.menuLinks[0].classList.add('active');

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
      var highlighted = false;
      this.menuLinks.forEach((el) => {
        el.classList.remove('active');
        if(id === el.getAttribute("href"))
          el.classList.add('active');
          highlighted = true;
      });
    });

    Promise.all([Question(), Intro(), Skills(), Progress()]).then((responses) => {
      const question = responses.shift();

      this.setState({
        question: question,
        answers: responses
      })
    })
  }

  render() {
    return (
      <div className="root">
        <div id="top"></div>
        <header className="navbar">
            <div>Resume</div>
        </header>
        <div className="side-panel-wrapper">
            <div className="side-panel">
                <a href="#top">Top</a>
                <div className="side-panel-list">
                  <span>About Me</span>
                  <a href="#introduction">Introduction</a>
                  {/* <a href="#interests">Interests</a> */}
                  <a href="#skills">Skills</a>
                  <a href="#hobbies">Hobbies</a>
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
                  {this.state.question ? <Post options={this.state.question} />  : null}   
                </div>
                <div className="main-answers">
                  <div className="main-answers-header">
                    <span>{this.state.answers.length} Answers</span>
                    <div className="tabs">
                      <div onClick={() => this.sort_answer('active')} className={`tab ${this.state.sort_answers === 'active' ? 'active' : null}`}>Active</div>
                      <div onClick={() => this.sort_answer('oldest')} className={`tab ${this.state.sort_answers === 'oldest' ? 'active' : null}`}>Oldest</div>
                      <div onClick={() => this.sort_answer('votes')} className={`tab ${this.state.sort_answers === 'votes' ? 'active' : null}`}>Votes</div>
                    </div>
                  </div>
                  {
                    this.state.answers.map((answer, index) => 
                        <Post options={answer} key={index} />
                    )
                  }
                </div>
                <div className="footer">
                  nick chen&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;twenty-twenty
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
