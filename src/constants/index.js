import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.png"

export const HERO_CONTENT = `I am a passionate Full-Stack Developer and emerging Agentic AI Engineer with over a year of hands-on experience building robust, scalable, and high-performance applications. Skilled in front-end technologies like React and Next.js, as well as back-end development with Node.js, MySQL, PostgreSQL, and Firebase, I specialize in delivering end-to-end solutions. Currently advancing my expertise in AI-powered systems through OpenAI Agents SDK, Streamlit, and Large Language Models (LLMs), I aim to create intelligent, user-centric applications that drive real business value and enhance user experiences.`

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a strong foundation in both software engineering and AI integration. With 2+ years of freelancing and project experience, I have successfully built solutions ranging from dynamic websites to AI-powered customer support agents, leveraging technologies like Next.js, TypeScript, Python, Firebase, MongoDB, and Sanity CMS. My journey began with a deep curiosity about how systems work, evolving into a career where I merge modern web development with cutting-edge AI capabilities such as prompt engineering and agentic workflows. I thrive in collaborative environments, excel at solving complex problems, and constantly explore new technologies to stay ahead in the rapidly evolving tech landscape. Outside of development, I enjoy contributing to open-source projects, staying active, and experimenting with innovative AI concepts.`

export const EXPERIENCES = [
  {
    year: "Jan 2024 - 2025",
    role: "Web Software Developer",
    company: "Intact One Solution",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Built a robust Point of Sale system for restaurants with order management, inventory control, and detailed reporting. Developed company websites and rent-a-car platforms with modern technologies.`,
    technologies:["React.js","Next.js","Nodejs","Python","FastAPI","MongoDB","Firebase","RestAPI","Tailwind CSS","SEO", "Firebase", "Cloudinary", "Shadcn/UI"],
  },
  {
    year: "2025",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: `Worked on various web development projects as a freelancer, delivering customized solutions using JavaScript, React.js, and Firebase. Collaborated with clients to understand their requirements and implement effective web applications.`,
    technologies:["JavaScript","Python","Streamlit","Chainlit","Next.js", "React.js", "Firebase", "Tailwind","OpenAI Agent SDK","FastAPI"],
  },
]

export const PROJECTS = [
  {
    title: "Morent - Rent a Car", 
    image: project3,  // Path to your rent-a-car website image
    description: "Morent is a rent-a-car website where users can browse available cars, book rentals, and manage reservations with ease.",
    technologies: ["Nextjs", "Tailwind", "CMS", "Shadcn","Sanity","REST API"],  // Example tech stack (adjust as per your project)
    vercelLink: "https://hackathon-ecommerce-n63n.vercel.app/",  // Replace with your actual deployed link
},
  {
    title: "Kodeaffinity", 
    image: "/kodeaffinity.jpg",  // Path to your rent-a-car website image
    description: "At Kode Affinity, we turn your vision into reality with innovative, scalable, and tailored IT solutions. From stunning websites to dynamic mobile apps and strategic branding, we’re here to help your business thrive in a digital-first world.",
    technologies: ["Nextjs", "Tailwind", "Firebase", "Shadcn","resend"],  // Example tech stack (adjust as per your project)
    vercelLink: "https://kodeaffinity.vercel.app/",  // Replace with your actual deployed link
}
,

{
  title: "POS Restaurant Panel",
  image: project2,
  description:
  "This is a Point of Sale (POS) Restaurant Panel designed to streamline restaurant operations. It features an intuitive and responsive interface for managing orders, menus, and inventory. The project includes an Admin Panel for complete control, enabling restaurant managers to oversee staff, update menus, track sales, and generate detailed reports.",
  technologies: ["Nextjs","Nodejs", "Shadcn", "Tailwind","Firebase","Cloudinary"],
  vercelLink: "https://pos.intactonesolution.com/pos/login",
},
{
  title: "Markdown Blog",
  image: project4,
  description:
    "This is a coding blog project designed to create and display markdown-based blog posts. It features a clean and responsive UI with support for markdown rendering using Remark and Rehype, allowing users to write and share technical content. Built with TypeScript and Next.js, this blog is optimized for performance and user experience.",
  technologies: ["Typescript", "Shadcn", "Next.js", "Remark", "Rehype"],
  vercelLink: "https://markdown-hashirblog-z6ve.vercel.app/",
},
  {
    title: "Cultivate Coin",
    image: project1,
    description:
      "This is an agriculture-related client project completed during my time at the company..",
    technologies: ["Typescript", "CSS", "Next.js", "Tailwind CSS"],
    vercelLink: "https://cultivate-coin-hazel.vercel.app/",
  },
  
 {
  title: "Airline Customer Support Agent",
  image: project5,
  description:
    "An AI-powered airline customer support platform built to streamline passenger interactions. Leveraging advanced natural language processing through OpenAI Agent SDK, it can intelligently handle customer queries such as flight status, booking management, cancellations, and general travel assistance in real time. Integrated with Streamlit for an interactive and responsive interface, and backed by MongoDB for efficient data storage.",
  technologies: ["OpenAI Agent SDK", "Streamlit", "MongoDB", "CSS", "REST API","FastAPI"],
  streamlitLink: "https://mainpy-n7prbz2gyvfeg32jsjaymz.streamlit.app/",
}

]

export const CONTACT = {
  address: "Sector 5c-2,North Karachi,Karachi",
  phoneNo: "0317-2079671 ",
  email: "khashir657@gmail.com",
  linkedin:""
}

