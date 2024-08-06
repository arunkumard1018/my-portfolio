import lnkdin from '../assets/lnkdin.svg'
import twitter from '../assets/twitter.svg'
import git from '../assets/git.svg'
import email from '../assets/email.svg'
import react_icon from '../assets/react_logo.png';
import coding from '../assets/coding.png';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// Stack Import
import javascript from '../assets/stack/img_js.png'
import html from '../assets/stack/HTML.png'
import css from '../assets/stack/CSS.png'
import java from '../assets/stack/java.png'
import spring from '../assets/stack/spring.png'
import sql from '../assets/stack/sql.png'
import git_png from '../assets/stack/github_png.png'

import blogster from '../assets/blogster.jpg'
import portfolio from '../assets/portfolio.jpg'

// Home Data
export const SOCIAL_LINKS = [
    {
        name: "linkdin",
        logo: lnkdin,
        url: "https://www.linkedin.com/in/arunkumar-d-2298-a2r5/"
    },
    {
        name: "github",
        logo: git,
        url: "https://github.com/arunkumard1018"
    },
    {
        name: "twitter",
        logo: twitter,
        url: "https://x.com/Arund0314"
    },
    {
        name: "email",
        logo: email,
        url: "mailto:arunkumard2298@gmail.com"
    },
];

export const HERO_DESC = "A software engineer, who specializes in the development of high quality web applications using my knowledge in React, Javascript, Java, SpringBoot, Html and css. I am always ready to collaborate with ambitious teams to work on projects that would create an impact.";

export const ABOUT = "I'm Arun Kumar, a passionate Full Stack Web Developer and problem solver with a keen interest in exploring the tech world and continuously learning new technologies. I specialize in Web Development, leveraging my expertise in HTML, CSS, JavaScript, React, Java, and Spring Boot also more to build dynamic and scalable applications.";
export const EDUCATION = "Education: - BE in Electronics and Communication Engineering from GM Institute of Technology, (2021 - 2025) - CGPA: 8.28/10. I'm always open to new opportunities and collaborations. Feel free to reach out!"

export const SKILLS = [
    {
        id: 1,
        name: "React Js",
        srcImage: react_icon
    },
    {
        id: 2,
        name: "Java Script",
        srcImage: javascript
    },
    {
        id: 3,
        name: "HTML",
        srcImage: html
    },
    {
        id: 4,
        name: "CSS",
        srcImage: css
    },
    {
        id: 5,
        name: "Java",
        srcImage: java
    },
    {
        id: 6,
        name: "Spring Boot",
        srcImage: spring
    },
    {
        id: 7,
        name: "My Sql",
        srcImage: sql
    },
    {
        id: 8,
        name: "Git",
        srcImage:  git_png
    },
]

export const EXPERIENCES = [
    {
        year: "2022 - 2023",
        role: "Software Engineer",
        company: "Tata Elxsi",
        description: `Engineered and maintained vehicle cluster Configuration platform using React.js, Javascript, Tailwind CSS, Java, Spring Boot, Rest Services; optimized database queries and enhanced overall system performance. Engineered a robust API in Java and Spring Boot, enabling seamless data retrieval from a MySQL database, improving user experience.`,
        technologies: ["React.js", "Javascript", "Tailwind CSS", "Java", "spring Boot", "Mysql", "Rest Services"],
    },
];

export const PROJECTS = [
    {
        title: "Channel",
        image: blogster,
        github: "https://github.com/arunkumard1018/BloggingFullstackWebApp/tree/main",
        link: "https://codeup-three.vercel.app/",
        description:
            "Chennel is a fully functional Blogging platform enabling users to create, consume, and Create  content, built using the Java stack (ReactJS, JavaScript, Tailwind CSS, java and SpringBoot). " +
            "Advanced User Management: Implemented secure and scalable user authentication and authorization mechanisms using JWT. " +
            "Dynamic Content Management: Developed comprehensive tools for seamless Content creation, updating, deletion, and rating, enhancing user engagement and content quality. " +
            "Robust Media Management: Leveraged Cloudinary for optimized cloud-based media handling, supporting high-quality  images, and documents to enrich the Reading experience.",
        technologies: ["ReactJS", "Java Script", "Java", "Spring Boot", "My Sql", "amazon s3"],
    },
    {
        title: "Portfolio Website",
        image: portfolio,
        github: "https://github.com/arunkumard1018/my-portfolio",
        link: " ",
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Javascript", "Tailwind"],
    },
];


export const CONTACT = {
    phoneNo: "+91-9359861352",
    email: "arunkumard1018@gmail.com",
    address: "Bangalore Karnata - India"
};

export const SIDELIST = [{
    title: "home",
    url: "#home",
    icon:HomeIcon
},
{
    title: "About",
    url: "#home",
    icon:AccountCircleIcon
},
{
    title: "Skills",
    url: "#home",
    icon:FormatListBulletedIcon
},
{
    title: "Projects",
    url: "#home"
    
},
{
    title: "Contact",
    url: "#home"
},
{
    title: "Blog",
    url: "#home"
}
]