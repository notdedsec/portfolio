import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'dedsec', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I am",
  name: 'dedsec',
  subtitles: ["I’m a Software Engineer", "I’m a Computer Science student", "I’m the guy who codes for fun"],
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I’m a Software Developer currently pursuing my bachelor's degree in Computer Science and Engineering. I’m passionate about developing products that make people's lives easier.",
  paragraphTwo: "I have worked on a number of bots on Telegram, created a lot of automation scripts and have some experience with video encoding and web development.",
  paragraphThree: "These days, I’m working on polishing my Java skills and learning API development in Spring Boot.",
  resume: '',
};

// SKILLS DATA
export const skillsData = {
  skillOne: 'Java Programming',
  skillTwo: 'Python Programming',
  skillThree: 'Backend Development',
  skillFour: 'Web Development',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'p_spotify.jpg',
    title: 'SpotifyNow',
    info: 'A Telegram bot which can help you flex what you\'re listening to on Spotify, in modern way.',
    info2: 'Made in Python, uses an SQLite database and a PHP web server for authentication from Spotify\'s API.',
    url: 'See Live',
    repo: 'https://t.me/SpotifyNowBot',
    url2: 'GitHub',
    repo2: 'https://github.com/notdedsec/SpotifyNow',
  },
  {
    id: uuidv1(),
    img: 'p_jibril.jpg',
    title: 'Jibril',
    info: 'A Google Drive search index used via Telegram\'s inline search which returns results with lightning fast speeds.',
    info2: 'It stores details of all files from every Drive account or Team Drive associated with it in an SQLite database for quick searches.',
    url: 'See Live',
    repo: 'https://t.me/JibrilRobot',
    url2: 'GitHub',
    repo2: 'https://github.com/notdedsec/Jibril',
  },
  {
    id: uuidv1(),
    img: 'p_kazuma.jpg',
    title: 'Kazuma',
    info: 'A bot which aims to ease sticker pack management in Telegram.',
    info2: 'It allows you to "steal" stickers from other packs, or entire packs if you wish, and store them in your own custom packs. Supports multiple packs with various customization options.',
    url: 'See Live',
    repo: 'https://t.me/StickerStealRobot',
    url2: 'GitHub',
    repo2: 'https://github.com/notdedsec/Kazuma',
  },
];

// WORK DATA
export const workData = [
  {
    id: uuidv1(),
    title: '',
    year: '',
    info: '',
    info2: '',
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me? Awesome!',
  btn: '',
  email: 'notdedsec@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'telegram',
      url: 'http://t.me/notdedsec',    
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/not_dedsec',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/notdedsec',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
