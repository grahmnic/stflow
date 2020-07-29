import React from 'react';
import './App.scss';

import Question from './assets/question.md';
import Keywords from './assets/keywords.txt';

import ReactHtmlParser from 'react-html-parser';
import showdown from 'showdown';

const converter = new showdown.Converter();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: ''
    }
  }

  parseMarkdown = (text, keywords) => {
    console.log();
    text = text.replace(/&lt;([A-Z][\w\d]*)/, "<<span class='green'>$1</span>");
    text = text.replace(/(".*")/, "<span class='red'>$1</span>");
    text = text.replace(/(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/, "<span class='red'>$1$2$3</span>");
    text = text.replace(new RegExp("\\b(" + keywords.map(x => x.trim()).join("|") + ")\\b", "g"), "<span class='blue'>$1</span>");
    return text;
  }

  componentDidMount() {
    Promise.all([
      fetch(Question),
      fetch(Keywords)
    ])
    .then(([res1, res2]) => Promise.all([res1.text(), res2.text()]))
    .then(([text1, text2]) => this.setState({markdown: text1, keywords: text2.split("\n")}))
  }

  render() {
    const question = this.parseMarkdown(converter.makeHtml(this.state.markdown), this.state.keywords ?? []);

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
        <div className="content-wrapper">
          <div className="content">
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
                  {ReactHtmlParser(question)}
                </div>
                <div className="main-answers">
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
