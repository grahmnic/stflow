import Recruiter from '../images/recruiter.webp';
import QuestionContent from './question.md';

const Question = async () => {
    const payload = await fetch(QuestionContent).then(response => {
        return response.text()
    }).then(content => {
        return {
            counter: 82,
            content: content,
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
    })

    return payload;
}

export default Question;