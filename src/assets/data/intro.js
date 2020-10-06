import Me from '../images/me.jpg';
import IntroContent from './intro.md';

const Intro = async () => {
    const payload = await fetch(IntroContent).then(response => {
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
                content: "THANK YOU THANK YOU. Will use this from now on +1",
                options: {
                    author: "recruiter_pete",
                    score: 6,
                    date: "Aug 6'20",
                    time: "18:35"
                }
            }]
        }
    })

    return payload;
}

export default Intro