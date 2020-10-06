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
If you want a more indepth look at the NickChenDev module here's a snippet of the consoled output:
```
Object { 
    candidate: {
        name: "Nick Chen",
        role: "Software Engineer",
        qualified: true
    },  
    advanced_skills: Array[1337],
        0: "Vue"
        1: "SASS",
        2: "HTML/CSS"
        3: "JavaScript",
        4: "MSSQL",
        ...,
    intermediate_skills: Array[123],
        0: "NodeJS",
        1: "React",
        2: "Angular2+",
        3: "Git",
        ...,
    misc_skills: Array[42],
        1: "Wordpress",
        2: "WooCommerce",
        3: "SSRS",
        4: "MongoDB",
        ...,
    readability: "Not xml.",
    ...
    }
```