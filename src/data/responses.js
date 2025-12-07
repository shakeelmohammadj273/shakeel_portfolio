import about from '../data/about.json';
export const responses = [
      {
  keywords: [
    'hi shakeel',
    'hello shakeel',
    'hey shakeel',
    'hi',
    'hello',
    'hey',
    'greetings',
    'good morning',
    'good afternoon',
    'good evening'
  ],
  reply: "Hey, I hope you are doing well! May I know what you would like to know about me?"
},
{
  keywords: [
    'nlp knowledge',
    'do you know nlp',
    'natural language processing',
    'nlp experience',
    'nlp skills',
    'are you familiar with nlp',
    'nlp projects',
    'nlp expertise',
    'knowledge in nlp',
    'nlp understanding',
    'nlp ability'
  ],
  reply: "Yes, I have experience with <strong>Natural Language Processing (NLP)</strong>. I applied NLP techniques in my <strong>Interactive Personal Portfolio Chatbot</strong> using <strong>keyword-based query matching</strong> and <strong>text normalization</strong> to understand user queries in different tenses and provide accurate, human-like responses. I am continuously learning advanced NLP techniques to improve conversational AI capabilities."
},
{
  keywords: [
    'soft skills',
    'your soft skills',
    'skills other than technical',
    'communication skills',
    'teamwork skills',
    'interpersonal skills',
    'collaboration skills',
    'problem-solving skills',
    'leadership skills',
    'time management skills',
    'adaptability',
    'soft skill set',
    'professional skills'
  ],
  reply: "I possess strong <strong>communication</strong> and <strong>interpersonal skills</strong>, which help me work effectively in teams. I am highly <strong>adaptable</strong> to new environments and technologies, and I excel in <strong>problem-solving</strong>, <strong>time management</strong>, and <strong>collaboration</strong>. I believe these soft skills complement my technical expertise and allow me to contribute meaningfully to any project or team."
},
{
  keywords: [
    'ai automation',
    'automation using ai',
    'do you know ai automation',
    'ai projects automation',
    'artificial intelligence automation',
    'ai process automation',
    'ai based automation',
    'automation skills',
    'knowledge in ai automation',
    'ai automation experience',
    'ai automation expertise'
  ],
  reply: "Yes, I have experience in <strong>AI-driven automation</strong>. I have applied AI and Machine Learning techniques to automate processes such as <strong>port operations optimization</strong>, <strong>predictive modeling</strong>, and <strong>real-time video processing</strong>. I am continuously exploring advanced AI automation approaches to create more efficient and intelligent systems."
},
{
  keywords: [
    'aws s3 experience',
    'aws sagemaker experience',
    'aws skills',
    'do you know aws s3',
    'do you know aws sagemaker',
    'aws cloud experience',
    'aws expertise',
    'cloud deployment skills',
    'amazon s3 experience',
    'amazon sagemaker experience',
    'aws projects',
    'cloud computing experience'
  ],
  reply: "Yes, I have hands-on experience with <strong>AWS S3</strong> and <strong>AWS SageMaker</strong>. I used S3 for <strong>data storage and management</strong> and SageMaker for <strong>training, deploying, and optimizing machine learning models</strong>, including my project on <strong>vessel decking efficiency optimization</strong> at IGO Solutions. These tools helped me gain practical experience in <strong>cloud-based ML model deployment</strong> and scalable AI solutions."
},
      {
        keywords: ['intro', 'introduction',  'who are you','about shakeel','about the shakeel','Who are you','Can you tell me about yourself','tell me about yourself',
          'Can you introduce yourself','who'
        ],
        reply: "<strong>My name is Mohammad Shakeel,</strong> and I completed my B.Tech in Artificial Intelligence and Data Science from SRM Valliammai Engineering College with an overall CGPA of 8.5, graduating with <strong>First Class with Distinction in 2024.</strong><br><br>During my academic journey, I worked on several AI and computer vision projects. One of my key projects was <strong>Air Calligraphy using OpenCV</strong>, where I developed a system that allows users to write in the air using hand movements. I also built an <strong>Ovarian Cancer Prediction model,</strong> achieving an accuracy of 96.4%. Another project involved using <strong>OpenCV and Haar Cascade</strong> for frame extraction and individual face detection in group meeting videos, which strengthened my understanding of image processing and machine learning.<br><br>Professionally, I worked as an <strong>Associate Software Developer at InstaVC, Hyderabad,</strong> where I contributed to a real-time <strong>background change feature</strong> using MediaPipe Selfie Segmentation. This role gave me practical experience in video processing and optimization.<br><br>After that, I worked with <strong>IGO Solutions, Chennai</strong>, as a <strong>Junior AI/ML Engineer on a contract basis</strong>. There, I developed an XGBoost-based model to improve yard decking efficiency in the port domain using <strong>AWS SageMaker</strong>. This project enhanced my cloud deployment skills and deepened my understanding of port operations and predictive analytics.<br><br>I also built an <strong>Interactive Personal Portfolio Chatbot using React.js and NLP</strong>, designed to create a more engaging experience for recruiters. The chatbot features real-time message rendering, typing animations, keyword-based NLP for accurate query matching, text normalization for understanding user inputs in different tenses, and a custom message queue system to handle multiple sequential bot responses smoothly. It dynamically provides details such as skills, experience, and projects, making portfolio interaction more human-like and intuitive.<br><br>I am proficient in <strong>Python, SQL, AWS S3, SageMaker</strong>, and I am passionate about building AI-driven solutions that solve real-world problems. I'm always eager to explore new technologies and apply them to meaningful, impactful projects."
      },
      {
        keywords:['What is your name','name'],
        reply:"My name is Mohammad shakeel."

      },
      {
        keywords: ['contact', 'email', 'linkedin', 'reach you','resume','how can i contact you',
    'contact details',
    'contact info',
    'your contact',
    'how to reach you',
    'do you have linkedin',
    'linkedin profile',
    'github profile',
    'do you have github',
    'can i contact you',
    'can i send you a message',
    'can i email you',
    'your email',
    'are you open to collaboration',
    'collab',
    'work together',
    'connect with you',
    'reach out',
    'contact shakeel'],
        reply: `
          You can reach me at: <br/>
          Mobile No:"+971 504026637"<br/>
          Whatsapp No:"+91 9486985820"<br/>
          Mail: <a href="mailto:${about.contact.email}" class="text-blue-600 underline">${about.contact.email}</a><br/>
          LinkedIn: <a href="${about.contact.linkedin}  " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
          Visit my LinkedIn</a><br/>
          Resume: <a href="${about.contact.resume}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">View My Resume</a>
          </a>
        `
      },
  {
  keywords: [
    'where are you from',
    'your place',
    'hometown',
    'which city',
    'where do you live',
    'place',
    'motherland',
    'native',
    'current location',
    'living city',
    'where are you staying',
    'residence',
    'based in',
    'current city',
    'which country do you live in',
    'where are you now','current location','location'
  ],
  reply: "I'm from Tamil Nadu, India, and I am currently in Dubai searching for job opportunities."
},
    {
  keywords: [
    'visa',
    'do you have a visa',
    'your visa status',
    'visa type',
    'residency permit',
    'visa details',
    'can you work here',
    'are you allowed to work',
    'visa status in dubai',
    'do you have work visa',
    'visiting visa'
  ],
  reply: "I currently have a visiting visa in Dubai. I’m looking for job opportunities and will ensure to obtain the appropriate work visa if required."
},
{
  keywords: [
    'your role in last organisation',
    'last organisation role',
    'role in your company',
    'what was your role',
    'job role previously',
    'previous company role',
    'your last job position',
    'what position you worked in'
  ],
  reply: "In my last organisation, I worked as a <strong>Junior AI/ML Engineer (Contract)</strong> at <strong>IGO Solutions</strong>. My role involved developing and optimizing machine learning models using <strong>XGBoost</strong> and <strong>AWS SageMaker</strong>, especially for improving <strong>vessel decking efficiency</strong> in the port domain. I also gained hands-on experience in <strong>gate operations, yard operations, vessel operations, and rail operations</strong> within the port environment."
},

      {
        keywords: [
            'what do you do',
            'your work',
            'current job',
            'what are you doing',
            'profession',
            'occupation',
            'job','currently working'
                    ],
            reply: "I’ve recently worked at IGO Solutions, Chennai, as a <strong>Junior AI/ML Engineer</strong> on a <strong>contract basis</strong>, where I contributed to AI and ML projects focused on improving port operations using the <strong>XGBoost algorithm</strong> and <strong>AWS SageMaker</strong>. During this role, I gained a strong understanding of the port domain, including <strong>gate operations</strong>, <strong>vessel operations</strong>, <strong>yard operations</strong>, and <strong>rail operations</strong>. Currently, I’m exploring exciting opportunities in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>. I’m passionate about applying <strong>data-driven approaches</strong> to solve real-world problems and continuously improving my skills in <strong>model development</strong>, <strong>cloud deployment</strong>, and <strong>computer vision</strong>."
            },
      {
        keywords: [
              'educational background',
              'education',
              'qualification',
              'background',
              'study',
              'what did you study',
              'your degree'
             ],
              reply: "I have completed my B.Tech in Artificial Intelligence and Data Science from SRM Valliammai Engineering College with an overall CGPA of 8.5, earning First Class with Distinction in 2024. During my studies, I worked on several AI and computer vision projects, including Air Calligraphy using OpenCV and an Ovarian Cancer Prediction model that achieved 96.4% accuracy. These experiences helped me build a strong foundation in AI, machine learning, and data-driven problem solving."
              },
              {
          keywords: [
            'interests',
            'hobbies',
            'what are you interested in',
            'passion',
            'what do you like doing'
          ],
          reply: "I'm deeply interested in Artificial Intelligence, Machine Learning, and Computer Vision. I enjoy working on projects that combine data, creativity, and real-world problem-solving. Beyond coding, I like exploring new AI frameworks, experimenting with model optimization, and learning about cloud technologies. I'm also passionate about building intelligent systems that make everyday tasks smarter and more efficient."
        },
                  {
            keywords: [
              'skills',
              'what skills do you have',
              'your skills',
              'technical skills',
              'core skills',
              'technical skills',
              'what are your technical skills',
              'your skills',
              'what skills do you have',
              'skills you know',
              'technical expertise',
              'list your skills',
              'tell me your skills',
              'skills and technologies',
              'what are your strengths',
              'skills you are good at',
              'what technical tools do you use',
              'core skills',
              'key skills',
              'main skills',
              'software skills',
              'technical stack',
              'tech stack',
              'what technologies you know',
              'technologies you work with',
              'tools you are familiar with'
            ],
            reply: "I have strong skills in Python, Machine Learning, Deep Learning, and Computer Vision. I'm experienced in using OpenCV, MediaPipe, and Scikit-learn for model development and optimization. I also have hands-on experience with AWS services like S3 and SageMaker for cloud-based model deployment. Additionally, I’m skilled in SQL, data analysis, and full-stack development with React.js."
          },
          {
  keywords: [
    'certifications',
    'do you have any certifications',
    'your certifications',
    'courses completed',
    'did you do any courses',
    'achievements',
    'what are your achievements',
    'your achievements',
    'accomplishments',
    'your accomplishments',
    'have you participated in hackathons',
    'hackathon experience',
    'did you join any hackathon',
    'any awards',
    'any certificate',
    'what are your certificates',
    'show me your certifications'
  ],
  reply: "Yes, I have completed several certifications that strengthened my skills in AI and Data Science. I completed the *Fundamentals of Data Science – Phase 2* certification, along with multiple courses on Python, such as Python for Data Science, Python and Data Analytics, and Python courses offered in different languages. These certifications improved my foundation in analytics, programming, and data-driven development. I have also participated in hackathons and academic project events, where I applied my AI and machine learning knowledge to solve real-world problems and enhance my practical skills."
},
{
  keywords: [
    'your age',
    'how old are you',
    'what is your age',
    'tell me your age'
  ],
  reply: "I'm 23 years old."
},
{
  keywords: [
    'when did you pass out',
    'what year did you pass out',
    'when did you graduate',
    'graduation year',
    'year of passing',
    'when you completed college',
    'when did you finish your degree',
    'pass out year'
  ],
  reply: "I passed out in 2024 after completing my <strong>B.Tech</strong> in <strong>Artificial Intelligence and Data Science</strong>."
}, 
{
  keywords: [
    'short term goals',
    'long term goals',
    'your goals',
    'what are your goals',
    'career goals',
    'future goals',
    'professional goals'],
    reply: "In the short term, my goal is to join a strong AI/ML or full-stack development team where I can apply my skills in Python, Machine Learning, and React.js to solve real-world problems. My long-term goal is to become a specialized AI Engineer and build end-to-end intelligent systems that create meaningful impact."
  },
  
  {
keywords:['are you looking for a job',
    'job search',
    'are you searching for a job',
    'currently looking for job',
    'job status',
    'what job you want',
  'what type of roles you are interested in',
    'roles you are interested in',
    'what positions you prefer',
    'which position you want'],
    reply:"Yes, I am currently looking for a job. I’m mainly interested in roles such as AI/ML Engineer, Data Scientist, Python Developer, or Full-Stack Developer."  
  },
  {
 keywords:['do you prefer remote or onsite',
    'remote or onsite',
    'work preference'],
    reply:"I’m open to both remote and onsite opportunities, depending on the role and growth potential."
  },
  {
    keywords:['your dream job',
    'dream project',
    'dream position'],
    reply:"My dream is to work on impactful AI projects — especially in computer vision, predictive modeling, or real-time intelligent systems — and eventually lead AI-driven initiatives that help industries work smarter and more efficiently."
  },
          {
            keywords: [
              'technologies',
              'tech stack',
              'tools you use',
              'frameworks',
              'what technologies do you work with'
            ],
            reply: "I work with technologies like Python, OpenCV, MediaPipe, Scikit-learn, and XGBoost for AI and ML projects. For deployment and scalability, I use AWS S3 and SageMaker. On the development side, I'm comfortable with React.js, Node.js, and MongoDB, which I use to build full-stack applications integrated with AI features."
          },
          {
              keywords: [
                'previous job',
                'past job',
                'job roles',
                'previous experience',
                'working experience',
                'professional background',
                'last job','work before','worked previously','worked before'
              ],
              reply: "I’ve worked as an Associate Software Developer at InstaVC in Hyderabad, where I contributed to developing a background change feature using MediaPipe Selfie Segmentation. This experience gave me practical exposure to real-time video processing and optimization techniques. After that, I joined IGO Solutions, Chennai, as a Junior AI/ML Engineer, where I developed an AI model to improve yard decking efficiency in the port domain using the XGBoost algorithm and AWS SageMaker. During my time there, I also learned about various port operations, including gate, vessel, yard, and rail operations. These experiences strengthened my technical skills and helped me understand how AI can be applied to solve complex, real-world problems."
            },
                      {
              keywords: [
                'experience',
                'work experience',
                'how many years of experience',
                'years of experience',
                'professional experience','number of years'
              ],
              reply: "I have around 2 year of professional experience. I started my career as an Associate Software Developer at InstaVC in Hyderabad, where I worked on a real-time video background change feature using MediaPipe Selfie Segmentation. After that, I worked as a contract at IGO Solutions, Chennai, as a Junior AI/ML Engineer, where I developed a model to improve vessel decking efficiency in the port domain using XGBoost and AWS SageMaker. These roles helped me gain both technical and domain expertise in Artificial Intelligence, Machine Learning, and port operations."
            },
            {
                  keywords: [
                    'instavc',
                    'associate software developer',
                    'what did you do at instavc',
                    'work at instavc',
                    'instavc job role',
                    'associate developer role',
                    'previous company instavc',
                    'experience at instavc',
                    'more about instavc',
                    'instavc experience',
                    'instavc work',
                    'tell me about instavc',
                    'instavc role details'
                  ],
                  reply: "At InstaVC in Hyderabad, I worked as an Associate Software Developer, where I focused on real-time video processing features for virtual communication platforms. One of my key contributions was developing a background change feature using MediaPipe Selfie Segmentation, which allowed users to replace or blur their backgrounds during live video calls. I was responsible for optimizing the feature to ensure smooth performance and minimal latency. This experience helped me gain hands-on knowledge in computer vision, image segmentation, and performance optimization, as well as teamwork and problem-solving in a professional software environment."
                  },
                  {
                    keywords: [
                      'experience at igo solutions',
                      'igo solutions experience',
                      'work at igo solutions',
                      'igo role',
                      'tell me about igo solutions',
                      'igo solutions job',
                      'igo solution experience',
                      'daily activity in igo',
                      'day to day work in igo',
                      'what did you do daily in igo',
                      'your tasks in igo',
                      'responsibilities in igo',
                      'daily work at igo solutions',
                      'roles in igo solutions',
                      'work routine in igo',
                      'daily duties in igo',
                      'what was your daily activity',
                      'what were your responsibilities',
                      'igo solutions daily tasks'
                    ],
                    reply: "At IGO Solutions in Chennai, I worked as a Junior AI/ML Engineer, where I focused on developing machine learning models to improve operational efficiency in the port domain. My main project involved building a yard decking efficiency model using the XGBoost algorithm, deployed on AWS SageMaker. I also gained a strong understanding of port operations, including gate, vessel, yard, and rail operations, which helped me combine technical and domain expertise effectively. This experience strengthened my skills in data preprocessing, model development, cloud deployment, and real-world problem-solving with AI-driven solutions."
                  },
                  {
                            keywords: [
                              'ai experience',
                              'react experience',
                              'threejs experience',
                              'do you know react',
                              'do you know threejs',
                              'do you work with ai',
                              'technologies you worked on',
                              'skills in ai react threejs'
                            ],
                            reply: "Yes, I have hands-on experience in Artificial Intelligence, React.js, and Three.js. I’ve worked on several AI projects involving Machine Learning and Computer Vision, such as Air Calligraphy using OpenCV and Ovarian Cancer Prediction with a 96.4% accuracy. On the development side, I’ve built full-stack applications using React.js, and I’m currently working with Three.js to create interactive 3D scenes like port environments featuring trucks, cranes, and ships. These projects have helped me bridge AI with modern web technologies to build intelligent and visually engaging applications."
                          },
                          {
                          keywords: [
                            'projects',
                            'your projects',
                            'what projects have you done',
                            'past projects',
                            'ai projects',
                            'ml projects',
                            'portfolio projects'
                          ],
                          reply: "I’ve worked on several projects in <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>Computer Vision</strong>. My key projects include <strong>Air Calligraphy using OpenCV</strong>, where I developed a system to write in the air using hand gestures tracked in real-time through a webcam; <strong>Ovarian Cancer Prediction</strong>, a predictive model achieving <strong>96.4% accuracy</strong> to classify cancer stages; <strong>Frame Extraction and Face Detection</strong>, using OpenCV and Haar Cascade to extract frames from videos and detect individual faces; <strong>Vessel Decking Efficiency Model (IGO Solutions)</strong>, built with <strong>XGBoost</strong> and <strong>AWS SageMaker</strong> to optimize port operations; and an <strong>Interactive Personal Portfolio Chatbot (React + NLP)</strong>, featuring real-time message rendering, typing animations, keyword-based query matching, a custom message queue system for handling sequential responses, and dynamic content integration to provide a human-like chat experience for recruiters and users. These projects strengthened my skills in <strong>Python</strong>, <strong>OpenCV</strong>, <strong>ML algorithms</strong>, <strong>AWS cloud deployment</strong>, <strong>React.js</strong>, and <strong>NLP</strong>, while allowing me to solve real-world problems effectively."
                        },
{
  keywords: [
    'machine learning rating',
    'rate your ml',
    'ml skills',
    'how good are you in machine learning',
    'ml proficiency',
    'machine learning expertise',
    'ml knowledge',
    'ml experience',
    'machine learning level',
    'ml ability',
    'ml competency',
    'ml 1-10',
    'rate your machine learning skills',
    'machine learning skills rating'
  ],
  reply: "I would rate myself <strong>8 out of 10</strong> in Machine Learning. I have hands-on experience in <strong>supervised and unsupervised learning</strong>, <strong>predictive modeling</strong>, <strong>computer vision</strong>, and <strong>AI project deployment</strong> using Python, OpenCV, Scikit-learn, XGBoost, and AWS SageMaker. I’m continuously learning advanced ML techniques to further improve my skills."
},
  {
    keywords: [
      'programming languages',
      'languages you know',
      'coding languages',
      'do you know python',
      'do you know javascript',
      'do you know js',
      'do you know typescript',
      'do you know ts',
      'what programming languages do you know',
      'what languages do you know',
      'which languages are you good at',
      'which coding languages you work with',
      'what languages are you skilled in',
      'what is your primary language',
      'what coding languages you use',
      'skills in python',
      'skills in javascript',
      'skills in typescript',
      'familiar with python',
      'familiar with javascript',
      'familiar with typescript',
      'do you code in python',
      'do you code in javascript',
      'do you code in typescript',
      'are you good at python',
      'are you good at javascript',
      'are you good at typescript',
      'do you write code in python',
      'do you write code in javascript',
      'do you write code in typescript'
    ],
    reply: "Yes, I’m proficient in Python, JavaScript, and TypeScript. Python is my primary language for AI and Machine Learning projects — I’ve used it extensively with libraries like OpenCV, Scikit-learn, and XGBoost. I also work with JavaScript and TypeScript for full-stack web development using React.js, Node.js, and Three.js. These languages allow me to combine intelligent AI solutions with dynamic and interactive web applications."
  },
  {
    keywords: [
      'spoken languages',
      'languages you speak',
      'what languages do you speak',
      'speaking languages do you know',
      'languages you can speak',
      'languages you are fluent in',
      'language proficiency',
      'communication languages',
      'first language',
      'second language',
      'languages you understand'
    ],
    reply: "I can speak <strong>English</strong> and <strong>Tamil</strong> fluently. I also have basic understanding of <strong>Hindi</strong> and can communicate effectively in professional and casual settings."
  },
{
  keywords: [
    'hobbies',
    'your hobbies',
    'what are your hobbies',
    'interests',
    'your interests',
    'what are your interests',
    'what do you like to do',
    'free time activities',
    'things you enjoy',
    'personal interests',
    'what do you do in free time'
  ],
  reply: "My hobbies and interests include learning new technologies, exploring AI and machine learning concepts, building small experimental projects, and improving my problem-solving skills. I also enjoy watching tech videos, exploring port-domain operations, and occasionally reading about real-time systems and automation."
},
{
  keywords: [
    'strength',
    'strengths',
    'your strengths',
    'what are your strengths',
    'strong points',
    'your strong areas',
    'weakness',
    'your weakness',
    'what are your weaknesses',
    'weak points',
    'areas to improve'
  ],
  reply: "My strengths include strong problem-solving skills, quick learning ability, and the passion to dive deep into AI, ML, and software development. I stay consistent, disciplined, and focused on improving myself continuously. </br> For weaknesses, I sometimes take on too many tasks because I want to learn everything quickly — but I am working on improving my prioritization and time management."
},
{
  keywords:["love","wife"],
  reply:"Faheema"

},
{
  keywords: [
    'can you join immediately',
    'immediate joiner',
    'are you available to join now',
    'joining availability',
    'when can you join',
    'notice period',
    'availability to join',
    'can you join now',
    'how soon can you join',
    'when can you join',
    'availability to join',
    'joining date',
    'available to join',
    'can you join immediately',
    'notice period',
    'how fast can you join',
    'joining availability',
    'ready to join',
    'when are you available to start',
    'start date',
    'immediate joining'
  ],
  reply: "Yes, I am available to join immediately. I have completed my training and I’m fully prepared to take up a new role without any notice period."
},
{
  keywords: [
    'port knowledge',
    'do you know port',
    'port domain knowledge',
    'experience in port operations',
    'port operations knowledge',
    'familiar with port domain',
    'port working knowledge',
    'port industry knowledge',
    'port operation experience',
    'knowledge in port field',
    'understanding of port',
    'port area knowledge'
  ],
  reply: "Yes, I have strong knowledge in the <strong>port domain</strong>. During my role at <strong>IGO Solutions</strong>, I gained hands-on understanding of <strong>gate operations, vessel operations, yard operations,</strong> and <strong>rail operations</strong>. I worked closely with port operational data to build and optimize ML models for improving efficiency, which helped me understand how different port processes function in real time."
},
{
  keywords: [
    'build application from scratch',
    'develop app from scratch',
    'did you create application yourself',
    'application development',
    'build project from scratch',
    'did you develop it',
    'full app development',
    'developed from beginning',
    'built software from scratch',
    'did you make application',
    'app creation',
    'software development from scratch'
  ],
  reply: "Yes, I have experience building applications from scratch. For example, I developed the <strong>Interactive Personal Portfolio Chatbot</strong> using <strong>React.js</strong> and <strong>NLP</strong>, implementing real-time message rendering, keyword-based query matching, and a custom message queue system to handle multiple sequential responses. I handled the entire development process, including designing the architecture, integrating dynamic content, and ensuring a smooth, human-like chat experience."
},
{
  keywords: [
    'build chatbot from scratch',
    'develop chatbot',
    'did you create chatbot',
    'chatbot development',
    'built chatbot myself',
    'chatbot project',
    'created chatbot from scratch',
    'developed ai chatbot',
    'make chatbot',
    'custom chatbot',
    'interactive chatbot',
    'ai chatbot development'
  ],
  reply: "Yes, I built the <strong>Interactive Personal Portfolio Chatbot</strong> from scratch using <strong>React.js</strong> and <strong>NLP</strong>. I implemented features like real-time message rendering, typing animations, keyword-based query matching, and a custom message queue system to handle multiple sequential responses. I also integrated dynamic content such as <strong>skills, projects, experience,</strong> and <strong>personal details</strong> to create a human-like chat experience for users and recruiters."
},
{
  keywords: [
    'ovarian cancer project',
    'ovarian cancer prediction',
    'cancer prediction project',
    'ml cancer project',
    'predict ovarian cancer',
    'cancer prediction model',
    'ovarian cancer ml',
    'ovarian cancer ai project',
    'ovarian cancer prediction model',
    'machine learning cancer project',
    'ovarian cancer dataset',
    'cancer prediction using ml'
  ],
  reply: "The <strong>Ovarian Cancer Prediction</strong> project involved building a machine learning model to classify ovarian cancer stages based on medical data. I applied <strong>supervised learning algorithms</strong> and achieved an impressive <strong>accuracy of 96.4%</strong>. The project involved <strong>data preprocessing, feature selection, model training, evaluation</strong>, and optimization to ensure reliable predictions. This project strengthened my skills in <strong>Python, Scikit-learn, data analysis</strong>, and <strong>predictive modeling</strong>, while providing hands-on experience with real-world healthcare datasets."
},
{
  keywords: [
    'chatbot project',
    'personal chatbot',
    'portfolio chatbot',
    'interactive chatbot',
    'ai chatbot',
    'react chatbot',
    'nlp chatbot',
    'chatbot development',
    'my chatbot project',
    'chatbot creation',
    'build chatbot',
    'chatbot using react',
    'chatbot using nlp'
  ],
  reply: "The <strong>Interactive Personal Portfolio Chatbot</strong> is an AI-powered chatbot I built using <strong>React.js</strong> and <strong>Natural Language Processing (NLP)</strong>. It features real-time message rendering, typing animations, and keyword-based query matching. I implemented a custom message queue system to handle multiple sequential bot responses and added text normalization to understand user queries in different tenses. The chatbot dynamically provides information about my <strong>skills, projects, experience</strong>, and personal details, creating a human-like interactive experience for recruiters and users. This project strengthened my skills in <strong>React.js, NLP, JavaScript,</strong> and <strong>AI integration</strong>."
},
{
  keywords: [
    'python rating',
    'rate your python',
    'how good are you in python',
    'python skill level',
    'python 1-10',
    'python expertise',
    'python proficiency',
    'python experience',
    'python knowledge',
    'python skill',
    'python competency',
    'python programming',
    'python coding skill',
    'your python level',
    'python abilities',
    'python capabilities',
    'python strength',
    'python expertise level',
    'python knowledge level'
    
  ],
  reply: "I would rate myself <strong>8 out of 10</strong> in Python. I have strong hands-on experience in <strong>machine learning</strong>, <strong>data analysis</strong>, <strong>computer vision</strong>, and <strong>backend development</strong> using Python. I’m confident with writing clean, optimized code and always working to improve further."
},
{
  keywords: [
    'expected salary',
    'salary expectation',
    'what is your expected salary',
    'your salary expectation',
    'how much salary do you expect',
    'ctc expectation',
    'salary you want',
    'expected ctc'
  ],
  reply: "My expected salary range is between **5000 AED to 8000 AED**. I’m flexible with my salary expectations. I’m mainly looking for a role where I can learn, contribute, and grow. My priority is joining a company that gives me good learning opportunities and meaningful work."
},
{
  keywords: [
    'current salary',
    'what is your current salary',
    'your present salary',
    'present ctc',
    'current ctc',
    'how much are you earning now',
    'salary you get now',
    'current pay',
    
  ],
  reply: "During the work at IGO Solutions, I received a salary of **2500 AED**. I am now looking for a full-time role with a salary in the range of 5000–8000 AED, depending on the responsibilities and growth opportunities."
},
      // {
      //   keywords: ['project', 'portfolio', 'work'],
      //   reply: `
      //     You can check out my projects here: 
      //     <a href="https://github.com/ShakeelAI" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">
      //     GitHub Profile
      //     </a>
      //   `
      // },
      {
        keywords: ['bye', 'goodbye', 'see you'],
        reply: "Goodbye! 👋 Hope to chat again soon!"
      }
    ];
export default responses;