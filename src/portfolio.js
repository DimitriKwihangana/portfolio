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
    'DImitri Kwihangana is a passionate developer with a passion for creating clean web and mobile applications. They enjoy turning ideas into reality and are always curious about learning new skills. They have experience working with creative teams, including daily stand-ups, communications, source control, and project management.',
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
