// import React, { useState } from 'react'
// import about from '../data/about'

// export default function ChatWindow() {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hi! 👋 I’m Shakeel’s portfolio assistant. How can I help you?' },
//   ])
//   const [input, setInput] = useState('')

//   const pushBotMessage = (text) => {
//     setMessages((prev) => [...prev, { sender: 'bot', text }])
//   }

//   const handleUserMessage = (msg) => {
//     const normalized = msg.toLowerCase()

//     // if (normalized.includes('name') ||
//     //      normalized.includes('intro') ||
//     //      normalized.includes('introduction') ||
//     //      normalized.includes('about') ||
//     //      normalized.includes('yourself')) {
//     //   pushBotMessage(`I'm Mohammad Shakeel — an AI & Full Stack Developer.`)
//     //   return
//     // }
//     const keywords = ['name', 'intro', 'introduction', 'yourself', 'who are you','about']
//     if (keywords.some(word => normalized.includes(word))) {
//         pushBotMessage(`I'm Mohammad Shakeel — an AI & Full Stack Developer.`)
//       return
//       }


//     if (normalized.includes('skills')) {
//       pushBotMessage(`I work with React.js, Node.js, MongoDB, and AI technologies.`)
//       return
//     }

//     if (normalized.includes('experience')) {
//       pushBotMessage(`I was an Associate Software Developer at InstaVC, Hyderabad.`)
//       return
//     }

//     if (normalized.includes('contact')) {
//   pushBotMessage(`
//     You can reach me at: <br/>
//     📧 <a href="mailto:${about.contact.email}" class="text-blue-500 underline">${about.contact.email}</a><br/>
//     🔗 <a href="${about.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">LinkedIn Profile</a>
//   `)
//   return
// }


//     pushBotMessage("Sorry, I didn’t understand that. Try asking about my skills, experience, or contact info!")
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!input.trim()) return
//     setMessages((prev) => [...prev, { sender: 'user', text: input }])
//     handleUserMessage(input)
//     setInput('')
//   }

//   return (
//     <div className="flex flex-col h-[70vh] md:h-[78vh] p-4 bg-white shadow-lg rounded-2xl">
//       <header className="flex items-center justify-between pb-4 border-b border-gray-200">
//         <h2 className="text-xl font-semibold text-gray-800">Chat with ShakeelBot 🤖</h2>
//       </header>

//       <div className="flex-1 overflow-y-auto py-4 space-y-3">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`px-4 py-2 rounded-xl max-w-[75%] ${
//                 msg.sender === 'user'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               <p dangerouslySetInnerHTML={{ __html: msg.text }} />
//             </div>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   )
// }

//v1
import React, { useState, useRef, useEffect } from 'react';
import about from '../data/about.json';
import { responses } from '../data/responses'; 
// Remove duplicate keyword entries from responses
const uniqueResponses = (() => {
  const seenKeywords = new Set();
  return responses.filter(res => {
    const resKeywords = res.keywords.map(k => k.toLowerCase());
    const isDuplicate = resKeywords.some(k => seenKeywords.has(k));
    if (!isDuplicate) {
      resKeywords.forEach(k => seenKeywords.add(k));
      return true;
    }
    return false;
  });
})();


const ChatWindow = ({ responses }) => {
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "👋 Hi, I'm Shakeel! Ask me anything about my work, skills, or projects." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth', 
    });
  }
}, [messages, isTyping]);


  // Push bot message with typing effect
  const pushBotMessage = (text, callback) => {
    setIsTyping(true);
    let index = 0;
    setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

    const interval = setInterval(() => {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: 'bot', text: text.slice(0, index) };
        return updated;
      });

      index++;
      if (index > text.length) {
        clearInterval(interval);
        setIsTyping(false);
        if (callback) callback(); // call next message if exists
      }
    }, 8);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    const normalized = input.toLowerCase().trim();
    const words = normalized.split(/\s+/);

  //  const matchedReplies = responses
  // .filter(res => res.keywords.some(keyword => words.includes(keyword.toLowerCase())))
  // .map(res => res.reply);
  const matchedReplies = uniqueResponses
  .filter(res => res.keywords.some(keyword => normalized.includes(keyword.toLowerCase())))
  .map(res => res.reply);
      // .filter(res => res.keywords.some(keyword => normalized.includes(keyword.toLowerCase())))
      // .map(res => res.reply);


    if (matchedReplies.length > 0) {
      // Send replies sequentially
      const sendSequential = (index = 0) => {
        if (index < matchedReplies.length) {
          pushBotMessage(matchedReplies[index], () => sendSequential(index + 1));
        }
      };
      sendSequential();
    } else {
      pushBotMessage("I'm not sure I understand — could you please rephrase?");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white text-center py-3 font-semibold text-lg">
        💬 Chat with Shakeel
      </div>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto py-4 px-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-[75%] ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl inline-flex items-center space-x-2">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center border-t border-gray-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 border rounded-lg px-3 py-2 outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
      {/* <div ref={chatEndRef}></div> */}
    </div>
  );
};

export default ChatWindow;


//v2
// import React, { useState } from 'react';
// import about from '../data/about';
// import {stemmer}from "stemmer";


// const ChatWindow = () => {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: "👋 Hi, I'm Shakeel! Ask me anything about my work, skills, or projects." }
//   ]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   // const chatContainerRef = useRef(null); // ref for the scrollable container

//   // // Scroll to bottom whenever messages change
//   // useEffect(() => {
//   //   if (chatContainerRef.current) {
//   //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//   //   }
//   // }, [messages, isTyping]);


//   // const pushBotMessage = (text) => {
//   //   setTimeout(() => {
//   //     setIsTyping(false);
//   //     setMessages(prev => [...prev, { sender: 'bot', text }]);
//   //   }, 1000); // bot reply delay
//   // };

// const pushBotMessage = (text) => {
//   setIsTyping(true); // show typing indicator
//   let index = 0;

//   // Add empty bot message first
//   setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

//   const interval = setInterval(() => {
//     setMessages(prev => {
//       const updated = [...prev];
//       // Update the last bot message gradually
//       updated[updated.length - 1] = { sender: 'bot', text: text.slice(0, index) };
//       return updated;
//     });

//     index++;

//     if (index > text.length) {
//       clearInterval(interval);
//       setIsTyping(false); // hide typing indicator when done
//     }
//   }, 8); // adjust speed here (lower = faster)
// };

// // Normalize user input for better matching
// const normalizeText = (text) => {
//   return text
//     .toLowerCase()
//     .replace(/[^\w\s]/g, "") // remove punctuation
//     .split(" ")
//     .map(word => stemmer(word)) // convert to root form
//     .join(" ");
// };



//  const handleSend = () => {
//   if (!input.trim()) return;

//   const userMessage = { sender: "user", text: input };
//   setMessages(prev => [...prev, userMessage]);

//   // const normalized = input.toLowerCase().trim();
//   const normalized = normalizeText(input);
//   const inputWords = normalized.split(/\s+/).map(w => stemmer(w));

//   setInput("");
//   setIsTyping(true);

//     const responses = [
//       {
//         keywords: ['intro', 'introduction', , 'who are you','about the shakeel','Who are you','Can you tell me about yourself','tell me about yourself',
//           'Can you introduce yourself','who'
//         ],
//         reply: "My name is Mohammad Shakeel, and I have completed my B.Tech in Artificial Intelligence and Data Science from SRM Valliammai Engineering College with an overall CGPA of 8.5, earning First Class with Distinction in 2024.<br><br>During my academic journey, I worked on several AI and computer vision projects. One of my key projects was Air Calligraphy using OpenCV, where I developed a system to write in the air using hand movements. I also worked on an Ovarian Cancer Prediction model, achieving an impressive accuracy of 96.4%. In another project, I used OpenCV and Haar Cascade to perform frame extraction and individual face detection from group meeting videos. These projects strengthened my practical understanding of AI, image processing, and machine learning.<br><br>Professionally, I worked as an Associate Software Developer at InstaVC, Hyderabad, where I contributed to a background change feature using MediaPipe Selfie Segmentation. This experience gave me hands-on exposure to real-time video processing and optimization techniques.<br><br>After that, I joined IGO Solutions, Chennai, as a Trainee AI/ML Engineer. There, I developed a model for improving vessel decking efficiency in the port domain using the XGBoost algorithm on AWS SageMaker. This project helped me gain deep insights into both AI model deployment on cloud platforms and the port operations domain.<br><br>I am proficient in Python, SQL, AWS S3, and SageMaker, and I’m passionate about solving real-world problems using AI and data-driven approaches. I’m always eager to learn new technologies and apply them to create impactful solutions."
//       },
//       {
//         keywords:['What is your name','name'],
//         reply:"My name is Mohammad shakeel."

//       },
//       {
//         keywords: ['contact', 'email', 'linkedin', 'reach you','resume','how can i contact you',
//     'contact details',
//     'contact info',
//     'your contact',
//     'how to reach you',
//     'do you have linkedin',
//     'linkedin profile',
//     'github profile',
//     'do you have github',
//     'can i contact you',
//     'can i send you a message',
//     'can i email you',
//     'your email',
//     'are you open to collaboration',
//     'collab',
//     'work together',
//     'connect with you',
//     'reach out',
//     'contact shakeel'],
//         reply: `
//           You can reach me at: <br/>
//           Mobile No:"+971 504026637"<br/>
//           Whatsapp No:"+91 9486985820"<br/>
//           Mail: <a href="mailto:${about.contact.email}" class="text-blue-600 underline">${about.contact.email}</a><br/>
//           LinkedIn: <a href="${about.contact.linkedin}  " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
//           Visit my LinkedIn</a><br/>
//           Resume: <a href="${about.contact.resume}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">View My Resume</a>
//           </a>
//         `
//       },
//       {
//         keywords: [
//           'where are you from',
//           'your place',
//           'hometown',
//           'which city',
//           'where do you live',
//           'place',
//           'motherland',
//           'native'
//            ],
//         reply: "I'm from Tamil Nadu, India."
//       },
//       {
//         keywords: ['skills', 'technologies', 'stack', 'tools', 'experience'],
//         reply: "I work with React.js, Node.js, MongoDB, WebRTC, and AI-based applications."
//       },
//       {
//         keywords: [
//             'what do you do',
//             'your work',
//             'current job',
//             'what are you doing',
//             'profession',
//             'occupation',
//             'job','currently working'
//                     ],
//             reply: "I’ve recently completed my training at IGO Solutions, where I worked on AI and ML projects focused on improving port operations using the XGBoost algorithm and AWS SageMaker. During my training, I also gained a strong understanding of the port domain, including gate operations, vessel operations, yard operations, and rail operations. Currently, I’m exploring exciting opportunities in the fields of Artificial Intelligence and Machine Learning. I'm passionate about applying data-driven approaches to solve real-world problems and continuously improving my skills in model development, cloud deployment, and computer vision."
//             },
//       {
//         keywords: [
//               'educational background',
//               'education',
//               'qualification',
//               'background',
//               'study',
//               'what did you study',
//               'your degree'
//              ],
//               reply: "I have completed my B.Tech in Artificial Intelligence and Data Science from SRM Valliammai Engineering College with an overall CGPA of 8.5, earning First Class with Distinction in 2024. During my studies, I worked on several AI and computer vision projects, including Air Calligraphy using OpenCV and an Ovarian Cancer Prediction model that achieved 96.4% accuracy. These experiences helped me build a strong foundation in AI, machine learning, and data-driven problem solving."
//               },
//               {
//           keywords: [
//             'interests',
//             'hobbies',
//             'what are you interested in',
//             'passion',
//             'what do you like doing'
//           ],
//           reply: "I'm deeply interested in Artificial Intelligence, Machine Learning, and Computer Vision. I enjoy working on projects that combine data, creativity, and real-world problem-solving. Beyond coding, I like exploring new AI frameworks, experimenting with model optimization, and learning about cloud technologies. I'm also passionate about building intelligent systems that make everyday tasks smarter and more efficient."
//         },
//                   {
//             keywords: [
//               'skills',
//               'what skills do you have',
//               'your skills',
//               'technical skills',
//               'core skills',
//               'technical skills',
//               'what are your technical skills',
//               'your skills',
//               'what skills do you have',
//               'skills you know',
//               'technical expertise',
//               'list your skills',
//               'tell me your skills',
//               'skills and technologies',
//               'what are your strengths',
//               'skills you are good at',
//               'what technical tools do you use',
//               'core skills',
//               'key skills',
//               'main skills',
//               'software skills',
//               'technical stack',
//               'tech stack',
//               'what technologies you know',
//               'technologies you work with',
//               'tools you are familiar with'
//             ],
//             reply: "I have strong skills in Python, Machine Learning, Deep Learning, and Computer Vision. I'm experienced in using OpenCV, MediaPipe, and Scikit-learn for model development and optimization. I also have hands-on experience with AWS services like S3 and SageMaker for cloud-based model deployment. Additionally, I’m skilled in SQL, data analysis, and full-stack development with React.js."
//           },
//           {
//   keywords: [
//     'certifications',
//     'do you have any certifications',
//     'your certifications',
//     'courses completed',
//     'did you do any courses',
//     'achievements',
//     'what are your achievements',
//     'your achievements',
//     'accomplishments',
//     'your accomplishments',
//     'have you participated in hackathons',
//     'hackathon experience',
//     'did you join any hackathon',
//     'any awards',
//     'any certificate',
//     'what are your certificates',
//     'show me your certifications'
//   ],
//   reply: "Yes, I have completed several certifications that strengthened my skills in AI and Data Science. I completed the *Fundamentals of Data Science – Phase 2* certification, along with multiple courses on Python, such as Python for Data Science, Python and Data Analytics, and Python courses offered in different languages. These certifications improved my foundation in analytics, programming, and data-driven development. I have also participated in hackathons and academic project events, where I applied my AI and machine learning knowledge to solve real-world problems and enhance my practical skills."
// },
// {
//   keywords: [
//     'age',
//     'your age',
//     'how old are you',
//     'what is your age',
//     'tell me your age'
//   ],
//   reply: "I'm 23 years old."
// },
// {
//   keywords: [
//     'when did you pass out',
//     'what year did you pass out',
//     'when did you graduate',
//     'graduation year',
//     'year of passing',
//     'when you completed college',
//     'when did you finish your degree',
//     'pass out year'
//   ],
//   reply: "I passed out in 2024 after completing my B.Tech in Artificial Intelligence and Data Science."
// }, 
// {
//   keywords: [
//     'short term goals',
//     'long term goals',
//     'your goals',
//     'what are your goals',
//     'career goals',
//     'future goals',
//     'professional goals'],
//     reply: "In the short term, my goal is to join a strong AI/ML or full-stack development team where I can apply my skills in Python, Machine Learning, and React.js to solve real-world problems. My long-term goal is to become a specialized AI Engineer and build end-to-end intelligent systems that create meaningful impact."
//   },
  
//   {
// keywords:['are you looking for a job',
//     'job search',
//     'are you searching for a job',
//     'currently looking for job',
//     'job status',
//     'what job you want',
//   'what type of roles you are interested in',
//     'roles you are interested in',
//     'what positions you prefer',
//     'which position you want'],
//     reply:"Yes, I am currently looking for a job. I’m mainly interested in roles such as AI/ML Engineer, Data Scientist, Python Developer, or Full-Stack Developer."  
//   },
//   {
//  keywords:['do you prefer remote or onsite',
//     'remote or onsite',
//     'work preference'],
//     reply:"I’m open to both remote and onsite opportunities, depending on the role and growth potential."
//   },
//   {
//     keywords:['your dream job',
//     'dream project',
//     'dream position'],
//     reply:"My dream is to work on impactful AI projects — especially in computer vision, predictive modeling, or real-time intelligent systems — and eventually lead AI-driven initiatives that help industries work smarter and more efficiently."
//   },
//           {
//             keywords: [
//               'technologies',
//               'tech stack',
//               'tools you use',
//               'frameworks',
//               'languages',
//               'what technologies do you work with'
//             ],
//             reply: "I work with technologies like Python, OpenCV, MediaPipe, Scikit-learn, and XGBoost for AI and ML projects. For deployment and scalability, I use AWS S3 and SageMaker. On the development side, I'm comfortable with React.js, Node.js, and MongoDB, which I use to build full-stack applications integrated with AI features."
//           },
//           {
//               keywords: [
//                 'previous job',
//                 'past job',
//                 'job roles',
//                 'previous experience',
//                 'work experience',
//                 'professional background',
//                 'last job','work before','worked previously?'
//               ],
//               reply: "I’ve worked as an Associate Software Developer at InstaVC in Hyderabad, where I contributed to developing a background change feature using MediaPipe Selfie Segmentation. This experience gave me practical exposure to real-time video processing and optimization techniques. After that, I joined IGO Solutions, Chennai, as a Trainee AI/ML Engineer, where I developed an AI model to improve yard decking efficiency in the port domain using the XGBoost algorithm and AWS SageMaker. During my time there, I also learned about various port operations, including gate, vessel, yard, and rail operations. These experiences strengthened my technical skills and helped me understand how AI can be applied to solve complex, real-world problems."
//             },
//                       {
//               keywords: [
//                 'experience',
//                 'work experience',
//                 'how many years of experience',
//                 'years of experience',
//                 'professional experience'
//               ],
//               reply: "I have around 2 year of professional experience. I started my career as an Associate Software Developer at InstaVC in Hyderabad, where I worked on a real-time video background change feature using MediaPipe Selfie Segmentation. After that, I completed my training at IGO Solutions, Chennai, as a Trainee AI/ML Engineer, where I developed a model to improve vessel decking efficiency in the port domain using XGBoost and AWS SageMaker. These roles helped me gain both technical and domain expertise in Artificial Intelligence, Machine Learning, and port operations."
//             },
//             {
//                   keywords: [
//                     'instavc',
//                     'associate software developer',
//                     'what did you do at instavc',
//                     'work at instavc',
//                     'instavc job role',
//                     'associate developer role',
//                     'previous company instavc',
//                     'experience at instavc',
//                     'more about instavc',
//                     'instavc experience',
//                     'instavc work',
//                     'tell me about instavc',
//                     'instavc role details'
//                   ],
//                   reply: "At InstaVC in Hyderabad, I worked as an Associate Software Developer, where I focused on real-time video processing features for virtual communication platforms. One of my key contributions was developing a background change feature using MediaPipe Selfie Segmentation, which allowed users to replace or blur their backgrounds during live video calls. I was responsible for optimizing the feature to ensure smooth performance and minimal latency. This experience helped me gain hands-on knowledge in computer vision, image segmentation, and performance optimization, as well as teamwork and problem-solving in a professional software environment."
//                   },
//                   {
//                     keywords: [
//                       'experience at igo solutions',
//                       'igo solutions experience',
//                       'work at igo solutions',
//                       'igo role',
//                       'tell me about igo solutions',
//                       'igo solutions job',
//                       'igo solution experience'
//                     ],
//                     reply: "At IGO Solutions in Chennai, I worked as a Trainee AI/ML Engineer, where I focused on developing machine learning models to improve operational efficiency in the port domain. My main project involved building a vessel decking efficiency model using the XGBoost algorithm, deployed on AWS SageMaker. I also gained a strong understanding of port operations, including gate, vessel, yard, and rail operations, which helped me combine technical and domain expertise effectively. This experience strengthened my skills in data preprocessing, model development, cloud deployment, and real-world problem-solving with AI-driven solutions."
//                   },
//                   {
//                             keywords: [
//                               'ai experience',
//                               'react experience',
//                               'threejs experience',
//                               'do you know react',
//                               'do you know threejs',
//                               'do you work with ai',
//                               'technologies you worked on',
//                               'skills in ai react threejs'
//                             ],
//                             reply: "Yes, I have hands-on experience in Artificial Intelligence, React.js, and Three.js. I’ve worked on several AI projects involving Machine Learning and Computer Vision, such as Air Calligraphy using OpenCV and Ovarian Cancer Prediction with a 96.4% accuracy. On the development side, I’ve built full-stack applications using React.js, and I’m currently working with Three.js to create interactive 3D scenes like port environments featuring trucks, cranes, and ships. These projects have helped me bridge AI with modern web technologies to build intelligent and visually engaging applications."
//                           },
//                           {
//                           keywords: [
//                             'projects',
//                             'your projects',
//                             'what projects have you done',
//                             'past projects',
//                             'ai projects',
//                             'ml projects',
//                             'portfolio projects'
//                           ],
//                           reply: "I’ve worked on several projects in Artificial Intelligence, Machine Learning, and Computer Vision. Some of my key projects include:<br><br>1️1, **Air Calligraphy using OpenCV** – Developed a system that allows users to write in the air using hand gestures, tracked in real-time through a webcam.<br><br>2️, **Ovarian Cancer Prediction** – Built a predictive model that achieved 96.4% accuracy using machine learning algorithms to classify cancer stages.<br><br>3, **Frame Extraction and Face Detection** – Used OpenCV and Haar Cascade to extract frames from meeting videos and detect individual faces.<br><br>4, **Vessel Decking Efficiency Model (IGO Solutions)** – Created an ML model using XGBoost and AWS SageMaker to optimize vessel operations in the port domain.\n\nThese projects helped me strengthen my skills in Python, OpenCV, ML algorithms, and AWS cloud deployment while solving real-world problems."
//                         },
//                         {
//   keywords: [
//     'programming languages',
//     'languages you know',
//     'coding languages',
//     'do you know python',
//     'do you know javascript',
//     'do you know js',
//     'do you know typescript',
//     'do you know ts',
//     'what programming languages do you know',
//     'what languages do you know',
//     'which languages are you good at',
//     'which coding languages you work with',
//     'what languages are you skilled in',
//     'what is your primary language',
//     'what coding languages you use',
//     'skills in python',
//     'skills in javascript',
//     'skills in typescript',
//     'familiar with python',
//     'familiar with javascript',
//     'familiar with typescript',
//     'do you code in python',
//     'do you code in javascript',
//     'do you code in typescript',
//     'are you good at python',
//     'are you good at javascript',
//     'are you good at typescript',
//     'do you write code in python',
//     'do you write code in javascript',
//     'do you write code in typescript'
//   ],
//   reply: "Yes, I’m proficient in Python, JavaScript, and TypeScript. Python is my primary language for AI and Machine Learning projects — I’ve used it extensively with libraries like OpenCV, Scikit-learn, and XGBoost. I also work with JavaScript and TypeScript for full-stack web development using React.js, Node.js, and Three.js. These languages allow me to combine intelligent AI solutions with dynamic and interactive web applications."
// },
// {
//   keywords: [
//     'hobbies',
//     'your hobbies',
//     'what are your hobbies',
//     'interests',
//     'your interests',
//     'what are your interests',
//     'what do you like to do',
//     'free time activities',
//     'things you enjoy',
//     'personal interests',
//     'what do you do in free time'
//   ],
//   reply: "My hobbies and interests include learning new technologies, exploring AI and machine learning concepts, building small experimental projects, and improving my problem-solving skills. I also enjoy watching tech videos, exploring port-domain operations, and occasionally reading about real-time systems and automation."
// },
// {
//   keywords: [
//     'strength',
//     'strengths',
//     'your strengths',
//     'what are your strengths',
//     'strong points',
//     'your strong areas',
//     'weakness',
//     'your weakness',
//     'what are your weaknesses',
//     'weak points',
//     'areas to improve'
//   ],
//   reply: "My strengths include strong problem-solving skills, quick learning ability, and the passion to dive deep into AI, ML, and software development. I stay consistent, disciplined, and focused on improving myself continuously. </br> For weaknesses, I sometimes take on too many tasks because I want to learn everything quickly — but I am working on improving my prioritization and time management."
// },

//       {
//         keywords: ['project', 'portfolio', 'work'],
//         reply: `
//           You can check out my projects here: 
//           <a href="https://github.com/ShakeelAI" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
//           GitHub Profile
//           </a>
//         `
//       },
//       {
//         keywords: ['bye', 'goodbye', 'see you'],
//         reply: "Goodbye! 👋 Hope to chat again soon!"
//       }
//     ];

//   let matched = false;

//   for (const res of responses) {
//     const stemmedKeywords = res.keywords.map(k => {
//       const wk = k.toLowerCase().split(" ");
//       return wk.map(w => stemmer(w));
//     }).flat();

//     if (inputWords.some(w => stemmedKeywords.includes(w))) {
//       pushBotMessage(res.reply);
//       matched = true;
//       break;
//     }
//   }

//   if (!matched) {
//     pushBotMessage("I'm not sure I understand — could you please rephrase?");
//   }
// };

//   return (
//     <div className="flex flex-col h-screen max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="bg-blue-500 text-white text-center py-3 font-semibold text-lg">
//         💬 Chat with Shakeel
//       </div>

//       <div  className="flex-1 overflow-y-auto py-4 px-4 space-y-3">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`px-4 py-2 rounded-xl max-w-[75%] ${
//                 msg.sender === 'user'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
//             </div>
//           </div>
//         ))}

//         {isTyping && (
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl inline-flex items-center space-x-2">
//               <span className="dot dot1"></span>
//               <span className="dot dot2"></span>
//               <span className="dot dot3"></span>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="flex items-center border-t border-gray-200 p-3">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           className="flex-1 border rounded-lg px-3 py-2 outline-none"
//           placeholder="Type a message..."
//         />
//         <button
//           onClick={handleSend}
//           className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
//         >
//           Send
//         </button>
//       </div>
//       {/* <div ref={chatEndRef}></div> */}
//     </div>
//   );
// };

// export default ChatWindow;

