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
  role: 'Front-end Engineer',
  description:
    "Hey there! I'm Dimitri Kwihangana a front end engineer skilled in Python and JavaScript for web and mobile apps. I'm skilled in frontend , working with frameworks like React and  Next.js, and React Native. I'm comfortable with databases like MongoDB and MySQL, ensuring scalable and efficient solutions. I thrive in collaborative teams and I'm eager to work together to create amazing projects.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/dimitri-kwihangana-529b8a247/',
    github: 'http://github.com/DimitriKwihangana',
    image:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },
}
const projects = [
  {
    name: 'VE Databank',
    description: 'A databank built for a company that contains demographic and other data.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: '',
    image: project1
  },
  {
    name: 'Mudugudu platform',
    description: 'A mobile app that interacts with citizens and facilitates community activities.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: '',
    livePreview: '',
    image: project4
  },
  {
    name: 'Aflakiosk',
    description: 'A website for a company called Aflakiosk.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'http://aflakiosk.com', // Corrected the live preview URL to include the protocol
    image: project3
  },
  // {
  //   name: 'BD',
  //   description: 'A dashboard for business development.',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  //   image: project2
  // },
  {
    name: 'Concierge',
    description: 'A website built for vacation purposes, available on the market for purchase.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://dimitrikwihangana.github.io/Concierge/',
    livePreview: 'https://dimitrikwihangana.github.io/Concierge/',
    image: project5
  },
];


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
