import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and firebase. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of freelancing experience, I have worked with a variety of technologies, including React, Next.js, python MySQL, PostgreSQL, and firebase. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`

export const EXPERIENCES = [
  {
    year: "Present",
    role: "Aspiring Web Developer",
    company: "Dekodix",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Next.js. Currently building projects to enhance skills and understanding of RESTful APIs and database integration with Firebase and MongoDB.`,
    technologies: ["Typescipt", "React.js", "Next.js", "Firebase"],
  },
  {
    year: "Present",
    role: "Frontend Developer (Projects)",
    company: "Self-Directed Projects",
    description: `Designed and developed user interfaces for personal projects using Next.js and React. Focused on integrating frontend components with backend services and implementing responsive designs.`,
    technologies: ["HTML", "CSS", "React.js", "CMS"],
  },
  {
    year: "2024",
    role: "Freelance Web Developer",
    company: "FirstPageRankerz",
    description: `Worked on various web development projects as a freelancer, delivering customized solutions using JavaScript, React.js, and fierbase. Collaborated with clients to understand their requirements and implement effective web applications.`,
    technologies: ["JavaScript", "React.js", "Firebase", "Tailwind"],
  },
  {
    year: "Present",
    role: "software Developer",
    company: "Self-Directed Projects",
    description: `Engaging in self-study and projects to explore generative AI concepts and applications. Learning to develop AI-driven solutions and understanding data management with various technologies.`,
    technologies: ["nextjs", "Wordpress", "Elementor", "SEO"],
  },
]

export const PROJECTS = [
  {
    title: "MOrent - Rent a Car", 
    image: morentImage,  // Path to your rent-a-car website image
    description: "MOrent is a rent-a-car website where users can browse available cars, book rentals, and manage reservations with ease.",
    technologies: ["Nextjs", "Tailwind", "Firebase", "Stripe"],  // Example tech stack (adjust as per your project)
    vercelLink: "https://morent-rentacar.vercel.app/",  // Replace with your actual deployed link
}
,
  {
    title: "Markdown Blog",
    image: project3,
    description:
      "This is a coding blog project designed to create and display markdown-based blog posts. It features a clean and responsive UI with support for markdown rendering using Remark and Rehype, allowing users to write and share technical content. Built with TypeScript and Next.js, this blog is optimized for performance and user experience.",
    technologies: ["Typescript", "Shadcn", "Next.js", "Remark", "Rehype"],
    vercelLink: "https://markdown-hashirblog-z6ve.vercel.app/",
  }
  
  {
    title: "POS Restaurant Panel",
    image: project4,
    description:
      "This is a Point of Sale (POS) Restaurant Panel designed to streamline restaurant operations. It features an intuitive and responsive interface for managing orders, menus, and inventory. The project includes an Admin Panel for complete control, enabling restaurant managers to oversee staff, update menus, track sales, and generate detailed reports.",
    technologies: ["React", "Shadcn", "Tailwind"],
    vercelLink: "https://pos-kq79-hashirnadeemkhans-projects.vercel.app/",
  },
  {
    title: "Cultivate Coin",
    image: project1,
    description:
      "This is an agriculture-related client project completed during my time at the company..",
    technologies: ["Typescript", "CSS", "Next.js", "Tailwind CSS"],
    vercelLink: "https://vercel.com/hashirnadeemkhans-projects/cultivate-coin/",
  }
  
  {
    title: "Advance Todo app",
    image: project1,
    description:
      "A fully functional todo app website with features like notification remember, dark light mode, added, deleted and edited confirmation, filteration,due date etc",
    technologies: ["HTML", "CSS", "Next js", "tailwind css"],
    vercelLink: "https://advance-todo-app.vercel.app/",
  },
]

export const CONTACT = {
  address: "Sector 5c-2,North Karachi,Karachi",
  phoneNo: "0317-2079671 ",
  email: "khashir657@gmail.com",
}

