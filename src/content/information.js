//personal information start
const yearsOfExp = new Date().getFullYear() - 2017;

const userData = {
  firstName: '<Toyosi',
  lastName: 'Olayiwola />',
  yearsOfExp,
  title: 'About Me',
  img: 'https://pics.craiyon.com/2023-10-30/66ff0c95358e458c859ecea5d3764b32.webp',
  description: `Hey there! 👋 I'm Toyosi, a highly skilled Software Engineer with over ${yearsOfExp}+ years of experience in web development, specializing in creating dynamic and scalable web applications. For the past ${
    yearsOfExp - 3
  }+ years, my expertise has been focused on Frontend development, building complex projects using Vue.js (both Vue 2 and 3), React.js, and Vanilla JavaScript. My deep understanding of the Vue and React ecosystems enables me to leverage a wide range of their tools and frameworks to deliver high-performance, maintainable solutions. Additionally, I have hands-on experience with backend technologies, allowing me to approach frontend development with a full-stack perspective`,
};

//personal information end

const information = { userData };

export default information;
