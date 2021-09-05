/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Serhii Koziuba",
  title: "Hi all, I'm Serhii",
  subTitle: emoji(
    "A passionate Junior Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ydajd-F-MJOz7kLPOdd1Pl8XpbRTxhlr/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/preborist",
  linkedin: "https://www.linkedin.com/in/serhii-koziuba-6062b177/",
  gmail: "preborist@gmail.com",
  facebook: "https://www.facebook.com/sergey.kozyuba/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop back-end with NoSQL database")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "NoSQL-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute",
      logo: require("./assets/images/kpi.png"),
      subHeader: "Specialist degree – Electronic Engineer",
      duration: "September 2008 - February 2012",
      desc: "Faculty of Instrumentation Engineering. Department of Scientific, Analytical and Ecological Devices and Systems"
    },
    {
      schoolName: "IT COURSES GOIT",
      logo: require("./assets/images/goit.png"),
      subHeader: "FULL STACK DEVELOPER",
      duration: "June 2020 - July 2021",
      descBullets: [
        "HTML + CSS + 3 projects (2 personal and 1 team project)",
        "Javascript + 1 team project",
        "React JS + 1 personal project",
        "Back-End + 1 team project"
      ]
    },
    {
      schoolName: "QATestLab training center",
      logo: require("./assets/images/tc_logo.png"),
      subHeader: "Software Testing",
      duration: "September 2012 - June 2013",
      descBullets: [
        "WEB-projects testing",
        "Functional Testing Approaches",
        "Software testing life cycle",
        "Test design. Test cases",
        "Mobile applications testing",
        "Game testing"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Head of Lighting Engineering division",
      company: "VD MAIS",
      companylogo: require("./assets/images/vdmais_logo_ru.svg"),
      companyLink: "https://vdmais.ua/",
      date: "Jan 2020 – Present",
      descBullets: [
        "Increased sales of our division by 50%.",
        "Responsible for negotiations with customers and foreign suppliers.",
        "Trained new employees.",
        "Used SQL queries to create price lists and analyze sales.",
        "Tested online payment system of the company's website."
      ]
    },
    {
      role: "Product Manager of Switching Power Supplies",
      company: "VD MAIS",
      companylogo: require("./assets/images/vdmais_logo_ru.svg"),
      companyLink: "https://vdmais.ua/",
      date: "Dec 2018 – Dec 2019",
      descBullets: [
        "Promoted Switching Power Supplies brand in Ukraine.",
        "Responsible for negotiations with customers, suppliers."
      ]
    },
    {
      role: "Sales Engineer",
      company: "VD MAIS",
      companylogo: require("./assets/images/vdmais_logo_ru.svg"),
      companyLink: "https://vdmais.ua/",
      date: "Nov 2011 – Nov 2018",
      descBullets: [
        "Added new brand in company line card, which allowed to increase sales of our department by 20-35% every year.",
        "Prepared and conducted technical seminars and trainings. Represented the company at local and international exhibitions."
      ]
    },
    {
      role: "Manager of Foreign-Economic Activity",
      company: "VD MAIS",
      companylogo: require("./assets/images/vdmais_logo_ru.svg"),
      companyLink: "https://vdmais.ua/",
      date: "Feb 2011 – Nov 2011",
      descBullets: [
        "Responsible for logistics, foreign economic activities with suppliers."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECT HWERE I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/chart.png"),
      projectName: "Planner",
      projectDesc:
        "mobile-first adaptive web planner with authorization to compare your spent working hours with the planned working hours on real time chart.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dreamteam-planner.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+38(093)775-22-16",
  email_address: "preborist@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
