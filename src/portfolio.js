/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sairam Bandi's Portfolio",
  description:
    "sairam bandi, portfolio of sairam bandi, sairam bandi profile, sairam bandi portfolio, sairam bandi resume",
  og: {
    title: "Sairam Bandi Portfolio",
    type: "website",
    url: "https://sairambandi.info/",
  },
};

//Home Page
const   greeting = {
  title: "Sairam Bandi",
  logo_name: "Sairam Bandi",
  nickname: "Open for Software Developer Full Time and Internship  ",
  subTitle:
    "A passionate Software Developer skilled in building and deploying Web and Mobile apps using React / Angular / Node / Django / Spring Boot / React Native, with a flair for experimenting with deep learning models. ",
  resumeLink:
    "https://drive.google.com/file/d/1kjL4MVz3lBmsK6MAomZsO2qT3x5raSRL/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sairambandi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sairamba@usc.edu",
    fontAwesomeIcon: "fa fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/stagwithadream",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=8P7a4xkAAAAJ&hl=en",
    fontAwesomeIcon: "fa fa-graduation-cap", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#4082e4", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rambandii/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  }
];

const skills = {
  data: [

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build dynamic frontend using React, Angular and backend with .Net, PHP, Java Spring Boot, Django and Node.",
        "⚡ Implement logging and monitoring services for efficient tracking and analysis.",
        "⚡ Develop and deploy RESTful APIs for seamless data exchange.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        }
      ],
    },
    {
      title: "Cloud & Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
"⚡ Host and maintain websites with DBs on VM instances on multiple cloud platforms.",
        "⚡ Deploy deep learning models in the cloud for integration into mobile applications.",
        "⚡ Configure streaming processes between databases and servers on both GCP and AWS.",
    "⚡ Develop CI/CD pipelines to optimize deployment workflows.",

      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Mobile Application Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive mobile applications for both iOS and Android platforms.",
        "⚡ Develop solo android apps using Kotlin and cross-platform mobile apps using Flutter & React Native.",
        "⚡ Implement intuitive user interfaces and integrating seamless user experience.",
      ],
      softwareSkills: [
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactNative",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "ML and DL Integration",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Create scalable, production-ready models for several deep learning and statistical use cases.",
        "⚡ Proficient in handling projects in Computer Vision and NLP domains.",
        "⚡ Seamlessly integrating Machine Learning and Deep Learning models into mobile and web applications.",
        "⚡ Implementing effective solutions by staying current with advancements in ML and DL technologies.",

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Masters in Computer Science",
      logo_path: "usc-logo.png",
      alt_name: "USC",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ At USC, I mastered concepts on data structures, algorithms, web & mobile app development and databases, while also exploring my interests on game development, search engines, information retrieval and natural language processing.",
        "⚡ During my Summer break I interned at Walmart in Bentonville, AR, I played a pivotal role in enhancing team collaboration and efficiency. I designed and developed a web application utilizing React, aimed at simplifying access to our team's metadata for other departments. By enabling consumer teams to retrieve data via customized cURL commands, I facilitated seamless information exchange and querying of team metadata. As a result of this initiative, total meeting time was reduced by one-third, significantly boosting cross-team collaboration and productivity.",
        ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "National Institute of Technology Raipur",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "nitrr-logo.png",
      alt_name: "Nit Raipur",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I undertook courses on programming languages such as C, C++, Java, and Python, which helped me gain proficiency in coding.",
        "⚡ I learned about coding standards and principles through academia and hands-on experience of building projects.",
        "⚡ Additionally, I published technical papers, including \"Automated Vehicle Parking Slot Detection System Using Deep Learning,\" IEEE 2020 (B. Sairam et al.), and \"VLDNet: Vision-based Lane Region Detection Network for Intelligent Vehicle System using Semantic Segmentation,\" Springer Computing-SCIE 2021 (B. Sairam et al.).",
        "⚡ To support fellow programmers, I volunteered as a STEM educator for kids, teaching them MIT Scratch and MIT App Inventor. I also conducted weekly classes on computer fundamentals and algorithms for sophomores and freshmen at my university.",
      ],
      website_link: "http://www.nitrr.ac.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in both the startup world and well-established companies as a software developer, which has helped me hone my skills as a problem solver. I also love to dabble with machine learning models and try to incorporate them into any app I work with.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Software Development Engineer",
          company: "Satco Inc",
          company_url: "https://satco-inc.com/",
          logo_path: "satco-logo.png",
          duration: "Oct 2022 - Aug 2023",
          location: "Los Angeles, CA",
          description:
"I migrated Saturn and Rentals into microservices using PHP Laravel, Java Spring Boot, Angular, and Node. I split functions into separate services, set up monitoring, and revamped Rentals' UI/UX, added SSO login across apps for seamless authentication. This reduced costs by 36%, lowered latency by 20%, and enhanced scalability.",
          color: "#0879bf",
        },
        {
          title: "Software Development Engineer",
          company: "OYO Rooms",
          company_url: "https://oyorooms.com",
          logo_path: "oyorooms-logo.png",
          duration: "Aug 2020 - Aug 2021",
          location: "Hyderabad, India",
          description:
"I analyzed User Research team data, worked with diverse teams to improve hotel image quality and boost customer conversions. I collaborated with Data Science to integrate the NIMA model into an image scoring service built using Django and Vue.js. This resulted in improved image quality and increased customer satisfaction. I also crafted an automation solution that enhanced efficiency by 25%, streamlining operations effectively.\n",      color: "#0071C5",  },

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Engineer III",
          company: "Walmart Inc",
          company_url: "https://www.walmart.com/",
          logo_path: "walmart-logo.png",
          duration: "Jun 2022 - Aug 2022",
          location: "Gurgaon, Haryana",
          description:
"I designed and built a React-based web app to simplify team metadata access and facilitated consumer teams to retrieve data using RESTful APIs. This fostered efficient cross-team collaboration, reducing total meeting time by a third.",          color: "#ee3c26",
        },
        {
          title: "Web & Mobile Application Developer",
          company: "USC Viterbi School of Engineering, Maja's Interaction Lab",
          company_url:
            "https://uscinteractionlab.web.app/",
          logo_path: "interactionlab-logo.png",
          duration: "Nov 2018 - Dec 2018",
          location: "Los Angeles, CA",
          description:
"I developed a cross-platform mobile app using React Native for video data collection of Infant-Caregiver interactions and contributed to the research by facilitating the collection of video data and analyzing intermodal interactions, expanding knowledge in the field.",          color: "#ee3c26"
        },
        {
          title: "Software Development Engineer",
          company: "Reliance IT Corp Ltd",
          company_url:
              "https://www.ril.com/",
          logo_path: "ril-logo.png",
          duration: "May 2019 - Jul 2019",
          location: "Mumbai, India",
          description:
"I designed and developed the Flight Information Display System (FIDS) application using .Net, to improve the aircraft fueling process, making it more manageable and efficient. To ensure the data was correct and up to date, I obtained and cleaned flight data through web scraping from various sources and internal databases. Leveraging machine learning techniques to predict flight delays and showcase precise flight timings provided valuable insights for aircraft fuelers to effectively manage and schedule work.\n",
          color: "#0071C5",
        },
        {
          title: "Research Intern",
          company: "National Institute of Technology Goa",
          company_url:
              "https://www.nitgoa.ac.in/",
          logo_path: "nitgoa-logo.png",
          duration: "Jun 2020 - Aug 2020",
          location: "Goa, India",
          description:
             "Under Dr. Venugopal Reddy, I conducted research forecasting air pollution rates in Hyderabad using Time Series Analysis. I developed a precise machine learning model for predicting city air pollution levels. Additionally, I explored the Covid-19 impact on air quality via relative analysis. By linking Covid-19 restrictions to air pollution changes, I offered vital insights into environmental consequences. My contributions advanced scientific comprehension of air pollution dynamics and external influences, aiding sustainable intervention development.",color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Executive Member",
          company: "Entrepreneur-cell",
          company_url: "https://ecell.nitrr.ac.in/",
          logo_path: "ecell-logo.png",
          duration: "Sept 2017 - Jul 2018",
          location: "Raipur, India",
          description:
            "I coordinated and executed several conferences in Chhattisgarh and organized Central India’s largest Tech Festival—the Wall Street event in Aavartan.", color: "#ee3c26",
        },
        {
          title: "Executive Member",
          company: "Literati Committee",
          company_url: "https://www.linkedin.com/company/literati-nit-raipur/?originalSubdomain=in",
          logo_path: "nitrr-logo.png",
          duration: "Jul 2018 - Jun 2019",
          location: "Raipur, India",
          description:
"I organized several events, including 'Eklectika'—Central India’s largest cultural festival—and a debate on \"Does digital India imply diminished corruption?\" during Vigilance Awareness Week. Additionally, I undertook an editorial role in the university's annual magazine, 'Shilpi'.\n",          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // profile_image_path: "animated_ashutosh.png",
    description:
      "Feel free to reach out to me through any of the links provided below. Whether you have inquiries, collaboration opportunities, career prospects, or simply wish to discuss shared passions, I'm excited to connect.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
