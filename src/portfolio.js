import project1 from '../src/project.png'
import project2 from '../src/project2.png'
import project3 from '../src/project3.png'
import project4 from '../src/project4.jpg'
import project5 from '../src/project5.png'
  const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'DIM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dimitri Kwihangana',
  role: 'Full stack Engineer',
  description:
    "Hey there! I'm Dimitri Kwihangana a full stack engineer skilled in Python and JavaScript for web and mobile apps. I'm skilled in frontend and backend development, working with frameworks like React, Django, Node.js, and React Native. I'm comfortable with databases like MongoDB and MySQL, ensuring scalable and efficient solutions. I thrive in collaborative teams and I'm eager to work together to create amazing projects.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/dimitri-kwihangana-529b8a247/',
    github: 'http://github.com/DimitriKwihangana',
    image:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'VE Databank',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://vanguarddatabank.netlify.app/',
    image:project1
  },
  {
    name: 'Mudugudu platform',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: '',
    livePreview: '',
    image:project4
  },
  {
    name: 'Aflakiosk',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'aflakiosk.com',
    image:project3
  },
  {
    name: 'BD',
    description:
      'Bussiness development dasboard',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image:project2
  },
  {
    name: 'Concierge',
    description:'Bussiness development dasboard',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://dimitrikwihangana.github.io/Concierge/',
    livePreview: '',
    image:project5
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Tailwind Css',
  'Python',
  'Django',
  'NodeJs',
  'Git',
  'MySQL',
  'MongoDB',
  'NGINX',
  'React Native'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dimitrikwihangana@mail.com',
}

export { header, about, projects, skills, contact }
