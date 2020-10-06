import Punpun from '../images/punpun.jpg';
import SkillsContent from './skills.md';

const Skills = async () => {
    const payload = await fetch(SkillsContent).then(response => {
        return response.text()
    }).then(content => {
        return {
            counter: 48,
            id: "skills",
            content: content,
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
    })

    return payload;
}

export default Skills;