import MyoutubeThumbnail from '../../assets/image/projects/Myoutube.png'
import StockImage1 from '../../assets/image/projects/project_stock2.png'
import StockImage2 from '../../assets/image/projects/Myoutube.png'
import BeatcodeThumbnail from '../../assets/image/projects/beatcode_game_screen.png'
import WebgalleryThumbnail from '../../assets/image/projects/webgallery.png'
// import BeatCodeVideo from '../../assets/image/projects/vi.mp4'
const videos = {
    BeatCode: ""//BeatCodeVideo
}
export const projects = [
    {
        title: "BeatCode",
        skills: 'Angular | Node.js | PostgreSQL',
        desc: `A web-based game platform where users compete in algorithm challenges against AI or other players
                \n tracking their performance and rankings.`,
        video: false,//videos.BeatCode,
        images: [BeatcodeThumbnail],
        fulldesc: `<li>A web-based game platform where users compete in algorithm challenges against AI or other players, tracking their performance and rankings.</li>
                    <li>Integrated with Monaco code editor and third-party API, Judge0, for code compilation.</li>
                    <li>Implemented real-time features with Socket.IO, including user matching for games with real opponents, real-time code progress without conflicts using Yjs, and friends' online indicators.</li>
                    <li>Implemented RESTful APIs to interact with LeetCode’s unofficial GraphQL API, enabling the reading of user profiles, problem lists, and the execution and submission of code.</li>
                    <li>Managed long-running tasks, such as AI-generated answers, code compilation and execution via Judge0, addressing edge cases and handling errors to ensure smooth processing for tasks taking over 10 seconds to complete.</li>
                    <li>Implemented OAuth 2.0 for user authentication and authorization, and Socket.IO authentication.</li>
                    <li>Deployed the application on a Virtual Machine using Docker and Docker Compose.</li>`,
        thumbnail: BeatcodeThumbnail,
        explore: true,
        github: "https://github.com/LeadBeatCode/BeatCode"
    },
    {
        title: "Stock Portfolio Manager",
        skills: 'JavaScript | Node, Express | PostgreSQL',
        desc: "A full-stack web application that mimics social network for stock markets along with managing stock list and portfolio manager where users can share their performance and reviews.",
        video: false,
        images: [StockImage1, StockImage2],
        fulldesc: `<li>Implemented a full-stack web application that mimics social network for stock markets along with managing stock list and portfolio manager where users can share their performance and reviews</li>
                    <li>Developed basic data mining and analysis using database engines to analyze and predict the performance of stocks, portfolios, and stock lists based on historical data more than 5 years for the companies tracked by S&P 500 including the latest stock values</li>
                    <li>Performed database optimization such as caching stock statistics like COV, beta, correlation and covariance to save on repeated computes and indexing the stock history table</li>`,
        thumbnail: StockImage1,
        numImg: 5,
        explore: true,
        github: "https://github.com/sonnmi/Stocks-Social-Networks"
    },
    {
        title: "MYouTube",
        skills: 'React | Node',
        desc: "A personalized YouTube platform powered by the YouTube API, designed for users who prefer a focused experience without random topics. It allows users to customize their feed similarly to subscriptions, search for videos outside their list, and add them to their personalized library, without ads or unrelated content.",
        video: false,
        images: [MyoutubeThumbnail],
        fulldesc: "",
        thumbnail: MyoutubeThumbnail,
        explore: false,
        github: ""
    },
    {
        title: "MyPlanner",
        skills: 'React | Node, Express | MySQL',
        desc: "A scheduler dashboard system which enables users to schedule agenda through a calendar and track time with a timer to measure productivity and satisfaction on a daily, monthly, and yearly basis.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: false,
        explore: false,
        github: ""
    },
    {
        title: "Web Gallery",
        skills: 'Javascript | Node | SQLite',
        desc: "A web gallery application enabling users to share photos and interact with each other and share ideas.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: WebgalleryThumbnail,
        explore: false,
        github: "https://github.com/sonnmi/webgallery"
    },
    {
        title: "Doctor Appointment",
        skills: 'Java | Firebase Realtime Database',
        desc: "An Android application in which doctors of a clinic and patients view and manage their schedules and appointments.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: false,
        explore: false,
        github: "https://github.com/vishal-sahoo/Appointment-Scheduling-App"
    },
    {
        title: "Matplotlib",
        skills: 'Python',
        desc: "In four delivery periods, simulated contribute to Matplotlib's open-source development by addressing real issues and introducing new features.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: false,
        explore: false,
        github: "https://github.com/sonnmi/d01w23-team-Visual-Learners"
    },
    {
        title: "BOOK SMART",
        skills: 'React | Node, Express | MongoDB',
        desc: "A web application which provides tutoring systems and allows users to buy or sell old textbooks conveniently in a single platform.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: false,
        explore: false,
        github: ""
    },
    {
        title: "Zoomer",
        skills: 'Java',
        desc: "Implemented API Gateway and Microservices for users, trip information, and locations, individually. Used Docker and connected three databases: PostgreSQL, Neo4j, and MongoDB.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: false,
        github: ""
    },
    {
        title: "Pintos",
        skills: 'C',
        desc: "Implemented and strengthened Pintos operating system, a simple OS framework for the 80x86 architecture. Added thread systems, user programs, virtual memory, and file systems from scratch.",
        video: false,
        images: [],
        fulldesc: "",
        thumbnail: false,
        github: ""
    },
]