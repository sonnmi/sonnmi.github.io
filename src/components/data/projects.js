import MyoutubeThumnail from '../../assets/image/projects/Myoutube.png'
import StockImage1 from '../../assets/image/projects/Myoutube.png'
import StockImage2 from '../../assets/image/projects/Myoutube.png'
// import BeatCodeVideo from '../../assets/image/projects/vi.mp4'
const videos = {
    BeatCode: ""//BeatCodeVideo
}
export const projects = [
    {
        title: "BeatCode",
        skills: 'Angular | Node.js | PostgreSQL',
        desc: "A coding web game",
        video: videos.BeatCode,
        thumbnail: 'No Thumbnail Available',
        explore: true,
        github: "https://github.com/sonnmi/BeatCode"
    },
    {
        title: "Stock Portfolio Manager",
        skills: 'Javascript, Node.js, PostgreSQL',
        desc: "• Implemented youtube that users can customize using youtube api, similarly like subscriptions, for those who don't want to see random topics • Users can search up videos that are not in their list and add (customize) while there is no ads or unrelated videos showing up",
        video: false,
        thumbnail: 'No Thumbnail Available',
        images: [],
        numImg: 5,
        explore: false,
        github: ""
    },
    {
        title: "MYouTube",
        skills: 'React, Node.js',
        desc: "• Implemented youtube that users can customize using youtube api, similarly like subscriptions, for those who don't want to see random topics • Users can search up videos that are not in their list and add (customize) while there is no ads or unrelated videos showing up",
        video: false,
        thumbnail: MyoutubeThumnail,
        explore: false,
        github: ""
    },
    {
        title: "MyPlanner",
        skills: 'React, Express, Node, MySQL',
        desc: "• Developed a scheduler dashboard system which enables users to schedule agenda through a calendar and track time with a timer to measure productivity and satisfaction on a daily, monthly, and yearly basis",
        video: false,
        thumbnail: false,
        explore: false,
        github: ""
    },
    {
        title: "Web Gallery",
        skills: 'Javascript | Node.js | SQLite',
        desc: "• ",
        video: false,
        thumbnail: 'No Thumbnail Available',
        explore: true,
        github: ""
    },
    {
        title: "Doctor Appointment",
        skills: 'Java, Firebase Realtime Database',
        desc: "• Implemented Android application, which helped doctors to view and manage their schedules and patients to book an appointment with doctors.",
        video: false,
        thumbnail: false,
        explore: true,
        github: "https://github.com/vishal-sahoo/Appointment-Scheduling-App"
    },
    {
        title: "Matplotlib",
        skills: 'Python',
        desc: "• In four delivery periods, simulated contribute to Matplotlib's open-source development by addressing real issues and introducing new features. • All details can be found in markdown files for each delivery.",
        video: false,
        thumbnail: false,
        explore: true,
        github: "https://github.com/sonnmi/d01w23-team-Visual-Learners"
    },
    {
        title: "BOOK SMART",
        skills: 'React, Express, Node, MongoDB',
        desc: "• Implemented MERN Stack web application, which provided tutoring systems and enabled users to buy or sell old textbooks conveniently in a single platform",
        video: false,
        thumbnail: false,
        explore: false,
        github: ""
    },
    {
        title: "Zoomer",
        skills: 'Java',
        desc: "• Implemented API Gateway and Microservices for users, trip information, and locations, individually \n •  Used Docker and connected three relational/non-relational databases to highlight each characteristic: PostgreSQL, Neo4j, and MongoDB •  Applied Data Access Object (DAO) design pattern to abstract the details of data stores •  Used Gitflow as a practice of continuous delivery and changes to code •  Worked intensely on endpoints and testing REST API with Postman",
        video: false,
        thumbnail: false,
        github: ""
    },
    {
        title: "Pintos",
        skills: 'C',
        desc: "• Implemented and strengthened Pintos operating system, a simple OS framework for the 80x86 architecture\n • Added thread systems, user programs, virtual memory, and file systems from scratch",
        video: false,
        thumbnail: false,
        github: ""
    },
]