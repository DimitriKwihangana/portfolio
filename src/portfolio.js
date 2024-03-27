const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
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
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
