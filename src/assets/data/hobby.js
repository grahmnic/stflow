import Me from '../images/me.jpg';
import HobbyContent from './hobby.md';

const Hobby = async () => {
    const payload = await fetch(HobbyContent).then(response => {
        return response.text()
    }).then(content => {
        return {
            counter: 336,
            id: "introduction",
            content: content,
            isQuestion: false,
            asked: {
                date: "Aug 6'20",
                time: "17:22",
                user: {
                    img: Me,
                    name: "Nick_Chen",
                    reputation: 11244,
                    gold: 346,
                    silver: 650,
                    bronze: 7523
                }
            },
            comments: [{
                content: "Cool thing brah",
                options: {
                    author: "aflzx14",
                    score: 6,
                    date: "Aug 13'20",
                    time: "18:35"
                }
            }]
        }
    })

    return payload;
}

export default Hobby