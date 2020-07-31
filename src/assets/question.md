How would I use the GenericCandidate library for my FullstackPosition component? I keep getting this CandidateError: This candidate isn't the right fit even though I follow the tutorial. I have tried so many candidates through other searches and I cant find a good solution.

I want to fill my FullstackRole using GenericCandidate something like:
```
import { GenericCandidate } from './../../candidates';
import { FullstackPosition } from './mycompany/';

export default FullstackRole = ({requirements}) => {
    const code = GenericCandidate.generateCode(requirements);

    return (
        <FullstackPosition 
            fast_learner={true} 
            team_player={true} 
            is_funny={Math.random() > 0.99 ? true : false} >
            {code}
        </FullstackPosition>
    );
}
```