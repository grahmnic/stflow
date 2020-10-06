import Gratin from '../images/gratin.jpg';
import ProgressContent from './progress.md';

const Progress = async () => {
    const payload = await fetch(ProgressContent).then(response => {
        return response.text()
    }).then(content => {
        return {
            counter: 26,
            id: "hobbies",
            content: content,
            isQuestion: false,
            asked: {
                date: "Aug 6'20",
                time: "17:22",
                user: {
                    img: Gratin,
                    name: "a_gratin",
                    reputation: 2662,
                    gold: 16,
                    silver: 45,
                    bronze: 43
                }
            },
            comments: [{
                content: "😊",
                options: {
                    author: "Nick_Chen",
                    score: 45,
                    date: "Aug 6'20",
                    time: "18:35"
                }
                }, {
                content: "👋",
                options: {
                    author: "dzxrkcplm",
                    score: 3,
                    date: "Aug 6'20",
                    time: "18:35"
                }
                }, {
                content: "👋👋",
                options: {
                    author: "Nick_Chen",
                    score: 12,
                    date: "Aug 6'20",
                    time: "18:35"
                }
                }, {
                content: "👋👋👋",
                options: {
                    author: "Oleg Chernyshevsky",
                    score: 1,
                    date: "Aug 6'20",
                    time: "18:35"
                }
                }, {
                content: "Yes mods, this thread right here",
                options: {
                    author: "MrTuring",
                    score: 8,
                    date: "Aug 6'20",
                    time: "18:35"
                }
                }
            ]
        }
    })

    return payload;
}

export default Progress;