You can use the nickchen-dev library for pretty much anything. 
```
// First import nickchen-dev
import NickChenDev from 'nickchen-dev';
```
Then simply put it anywhere you want where you use GenericCandidate.
```
<FullStackRole dev={NickChenDev}></FullStackRole>
...
<FrontEndRole dev={NickChenDev}></FrontEndRole>
...
<SoftwareEngineerRole dev={NickChenDev}></SoftwareEngineerRole>
```
If you want a more indepth look at the NickChenDev class here's a sneakpeek of the consoled output:
```
Object { 
    candidate: {
        name: "Nick Chen",
        role: "Software Engineer",
        qualified: true
    },  
    advanced_skills: Array[1337]
        0: "Angular2+",
        1: "Git",
        2: "HTML/CSS"
        3: "JavaScript",
        4: "MSSQL",
        5: ".NET Core",
        ...,
    intermediate_skills: Array[123]
        0: "NodeJS",
        1: "React",
        2: "SASS",
        3: "Wordpress",
        4: "WooCommerce",
        ...,
    profile_readability: "At least it isn't xml.",
    ...
    }
```