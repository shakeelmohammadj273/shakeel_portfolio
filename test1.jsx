const responses = [
  {
    keywords: [
      'hi shakeel','hello shakeel','hey shakeel','hi','hello','hey',
      'greetings','good morning','good afternoon','good evening'
    ],
    reply: "Hey, I hope you are doing well! May I know what you would like to know about me?"
  },
  {
    keywords: [
      'nlp knowledge','do you know nlp','natural language processing','nlp experience',
      'nlp skills','are you familiar with nlp','nlp projects','nlp expertise',
      'knowledge in nlp','nlp understanding','nlp ability'
    ],
    reply: "Yes, I have experience with <strong>Natural Language Processing (NLP)</strong>. I applied NLP techniques in my <strong>Interactive Personal Portfolio Chatbot</strong> using <strong>keyword-based query matching</strong> and <strong>text normalization</strong> to understand user queries in different tenses and provide accurate, human-like responses. I am continuously learning advanced NLP techniques to improve conversational AI capabilities."
  },
  {
    keywords: [
      'soft skills','your soft skills','skills other than technical','communication skills',
      'teamwork skills','interpersonal skills','collaboration skills','problem-solving skills',
      'leadership skills','time management skills','adaptability','soft skill set','professional skills'
    ],
    reply: "I possess strong <strong>communication</strong> and <strong>interpersonal skills</strong>, which help me work effectively in teams. I am highly <strong>adaptable</strong> to new environments and technologies, and I excel in <strong>problem-solving</strong>, <strong>time management</strong>, and <strong>collaboration</strong>. I believe these soft skills complement my technical expertise and allow me to contribute meaningfully to any project or team."
  },
  {
    keywords: [
      'ai automation','automation using ai','do you know ai automation','ai projects automation',
      'artificial intelligence automation','ai process automation','ai based automation',
      'automation skills','knowledge in ai automation','ai automation experience','ai automation expertise',
      'ai experience','react experience','threejs experience','do you know react','do you know threejs',
      'do you work with ai','technologies you worked on','skills in ai react threejs'
    ],
    reply: "Yes, I have hands-on experience in <strong>AI-driven automation</strong> and Artificial Intelligence, React.js, and Three.js. I have applied AI and Machine Learning techniques to automate processes such as <strong>port operations optimization</strong>, <strong>predictive modeling</strong>, and <strong>real-time video processing</strong>. I’ve also built full-stack applications with React.js and interactive 3D scenes with Three.js, combining AI with modern web technologies."
  },
  {
    keywords: [
      'aws s3 experience','aws sagemaker experience','aws skills','do you know aws s3','do you know aws sagemaker',
      'aws cloud experience','aws expertise','cloud deployment skills','amazon s3 experience','amazon sagemaker experience',
      'aws projects','cloud computing experience'
    ],
    reply: "Yes, I have hands-on experience with <strong>AWS S3</strong> and <strong>AWS SageMaker</strong>. I used S3 for <strong>data storage and management</strong> and SageMaker for <strong>training, deploying, and optimizing machine learning models</strong>, including my project on <strong>vessel decking efficiency optimization</strong> at IGO Solutions. These tools helped me gain practical experience in <strong>cloud-based ML model deployment</strong> and scalable AI solutions."
  },
  {
    keywords: [
      'intro','introduction','who are you','about the shakeel','can you tell me about yourself',
      'tell me about yourself','can you introduce yourself','who'
    ],
    reply: "<strong>My name is Mohammad Shakeel,</strong> and I completed my B.Tech in Artificial Intelligence and Data Science from SRM Valliammai Engineering College with an overall CGPA of 8.5, graduating with <strong>First Class with Distinction in 2024.</strong><br><br>During my academic journey, I worked on several AI and computer vision projects. One of my key projects was <strong>Air Calligraphy using OpenCV</strong>, where I developed a system that allows users to write in the air using hand movements. I also built an <strong>Ovarian Cancer Prediction model,</strong> achieving an accuracy of 96.4%. Another project involved using <strong>OpenCV and Haar Cascade</strong> for frame extraction and individual face detection in group meeting videos, which strengthened my understanding of image processing and machine learning.<br><br>Professionally, I worked as an <strong>Associate Software Developer at InstaVC, Hyderabad,</strong> where I contributed to a real-time <strong>background change feature</strong> using MediaPipe Selfie Segmentation. This role gave me practical experience in video processing and optimization.<br><br>After that, I worked with <strong>IGO Solutions, Chennai</strong>, as a <strong>Junior AI/ML Engineer on a contract basis</strong>. There, I developed an XGBoost-based model to improve yard decking efficiency in the port domain using <strong>AWS SageMaker</strong>. This project enhanced my cloud deployment skills and deepened my understanding of port operations and predictive analytics.<br><br>I also built an <strong>Interactive Personal Portfolio Chatbot using React.js and NLP</strong>, designed to create a more engaging experience for recruiters. The chatbot features real-time message rendering, typing animations, keyword-based NLP for accurate query matching, text normalization for understanding user inputs in different tenses, and a custom message queue system to handle multiple sequential bot responses smoothly. It dynamically provides details such as skills, experience, and projects, making portfolio interaction more human-like and intuitive.<br><br>I am proficient in <strong>Python, SQL, AWS S3, SageMaker</strong>, and I am passionate about building AI-driven solutions that solve real-world problems. I'm always eager to explore new technologies and apply them to meaningful, impactful projects."
  },
  {
    keywords: ['what is your name','name'],
    reply: "My name is Mohammad Shakeel."
  },
  {
    keywords: [
      'contact','email','linkedin','reach you','resume','how can i contact you','contact details',
      'contact info','your contact','how to reach you','do you have linkedin','linkedin profile','github profile',
      'do you have github','can i contact you','can i send you a message','can i email you','your email',
      'are you open to collaboration','collab','work together','connect with you','reach out','contact shakeel'
    ],
    reply: `
      You can reach me at: <br/>
      Mobile No: +971 504026637<br/>
      Whatsapp No: +91 9486985820<br/>
      Mail: <a href="mailto:${about.contact.email}" class="text-blue-600 underline">${about.contact.email}</a><br/>
      LinkedIn: <a href="${about.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Visit my LinkedIn</a><br/>
      Resume: <a href="${about.contact.resume}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">View My Resume</a>
    `
  },
  {
    keywords: [
      'where are you from','your place','hometown','which city','where do you live','place',
      'motherland','native','current location','living city','where are you staying','residence',
      'based in','current city','which country do you live in','where are you now','location'
    ],
    reply: "I'm from Tamil Nadu, India, and I am currently in Dubai searching for job opportunities."
  },
  {
    keywords: [
      'visa','do you have a visa','your visa status','visa type','residency permit','visa details',
      'can you work here','are you allowed to work','visa status in dubai','do you have work visa','visiting visa'
    ],
    reply: "I currently have a visiting visa in Dubai. I’m looking for job opportunities and will ensure to obtain the appropriate work visa if required."
  },
  {
    keywords: [
      'your role in last organisation','last organisation role','role in your company','what was your role',
      'job role previously','previous company role','your last job position','what position you worked in','previous job','past job','job roles',
      'previous experience','working experience','professional background','last job','work before','worked previously','worked before'
    ],
    reply: "I’ve worked as an Associate Software Developer at InstaVC in Hyderabad and as a Junior AI/ML Engineer at IGO Solutions, Chennai. I contributed to real-time video processing, AI modeling using XGBoost, and AWS SageMaker deployment. I also gained strong knowledge of port operations, including gate, vessel, yard, and rail operations."
  },
  {
    keywords: [
      'what do you do','your work','current job','what are you doing','profession','occupation','job','currently working'
    ],
    reply: "I’ve recently worked at IGO Solutions, Chennai, as a <strong>Junior AI/ML Engineer</strong> on a <strong>contract basis</strong>, working on AI and ML projects focused on port operations. I am now exploring exciting opportunities in AI and ML, applying data-driven approaches to solve real-world problems."
  },
  {
    keywords: [
      'educational background','education','qualification','background','study','what did you study','your degree'
    ],
    reply: "I have completed my B.Tech in Artificial Intelligence and Data Science from SRM Valliammai Engineering College with an overall CGPA of 8.5, earning First Class with Distinction in 2024. During my studies, I worked on projects like Air Calligraphy using OpenCV and Ovarian Cancer Prediction model achieving 96.4% accuracy."
  },
  {
    keywords: [
      'interests','hobbies','what are you interested in','passion','what do you like doing',
      'what are your hobbies','your interests','what do you like to do','free time activities','things you enjoy','personal interests','what do you do in free time'
    ],
    reply: "I'm deeply interested in Artificial Intelligence, Machine Learning, and Computer Vision. I enjoy building projects that combine data, creativity, and real-world problem-solving. Beyond coding, I explore new AI frameworks, model optimization, and cloud technologies."
  },
  {
    keywords: [
      'skills','what skills do you have','your skills','technical skills','core skills','what are your technical skills',
      'skills you know','technical expertise','list your skills','tell me your skills','skills and technologies','what are your strengths',
      'what technical tools do you use','core skills','key skills','main skills','software skills','technical stack','tech stack','what technologies you know','technologies you work with','tools you are familiar with'
    ],
    reply: "I have strong skills in Python, Machine Learning, Deep Learning, and Computer Vision. I'm experienced in using OpenCV, MediaPipe, and Scikit-learn. I also have hands-on experience with AWS S3 and SageMaker for cloud-based model deployment. Additionally, I’m skilled in SQL, data analysis, and full-stack development with React.js."
  },
  {
    keywords: [
      'certifications','do you have any certifications','your certifications','courses completed','did you do any courses','achievements',
      'what are your achievements','your achievements','accomplishments','your accomplishments','have you participated in hackathons',
      'hackathon experience','did you join any hackathon','any awards','any certificate','what are your certificates','show me your certifications'
    ],
    reply: "Yes, I have completed several certifications in Data Science and Python, and participated in hackathons and academic project events to strengthen my practical AI and ML skills."
  },
  {
    keywords: [
      'age','your age','how old are you','what is your age','tell me your age'
    ],
    reply: "I'm 23 years old."
  },
  {
    keywords: [
      'when did you pass out','what year did you pass out','when did you graduate','graduation year','year of passing',
      'when you completed college','when did you finish your degree','pass out year'
    ],
    reply: "I passed out in 2024 after completing my B.Tech in Artificial Intelligence and Data Science."
  },
  {
    keywords: [
      'short term goals','long term goals','your goals','what are your goals','career goals','future goals','professional goals'
    ],
    reply: "In the short term, my goal is to join a strong AI/ML or full-stack development team. My long-term goal is to become a specialized AI Engineer and build end-to-end intelligent systems that create meaningful impact."
  },
  {
    keywords: ['are you looking for a job','job search','are you searching for a job','currently looking for job','job status','what job you want','what type of roles you are interested in','roles you are interested in','what positions you prefer','which position you want'],
    reply: "Yes, I am currently looking for a job. I’m mainly interested in roles such as AI/ML Engineer, Data Scientist, Python Developer, or Full-Stack Developer."
  },
  {
    keywords:['do you prefer remote or onsite','remote or onsite','work preference'],
    reply:"I’m open to both remote and onsite opportunities, depending on the role and growth potential."
  },
  {
    keywords:['your dream job','dream project','dream position'],
    reply:"My dream is to work on impactful AI projects — especially in computer vision, predictive modeling, or real-time intelligent systems — and eventually lead AI-driven initiatives that help industries work smarter and more efficiently."
  },
  {
    keywords: ['technologies','tech stack','tools you use','frameworks','what technologies do you work with'],
    reply:"I work with technologies like Python, OpenCV, MediaPipe, Scikit-learn, and XGBoost for AI and ML projects. For deployment, I use AWS S3 and SageMaker. On the development side, I'm comfortable with React.js, Node.js, and MongoDB for full-stack applications integrated with AI."
  },
  {
    keywords: ['projects','your projects','what projects have you done','past projects','ai projects','ml projects','portfolio projects','chatbot project','personal chatbot','portfolio chatbot','interactive chatbot','ai chatbot','react chatbot','nlp chatbot','chatbot development','my chatbot project','chatbot creation','build chatbot','chatbot using react','chatbot using nlp','ovarian cancer project','ovarian cancer prediction','cancer prediction project','ml cancer project','predict ovarian cancer','cancer prediction model','ovarian cancer ml','ovarian cancer ai project','ovarian cancer prediction model','machine learning cancer project','ovarian cancer dataset','cancer prediction using ml'],
    reply:"I’ve worked on several projects in Artificial Intelligence, Machine Learning, and Computer Vision, including Air Calligraphy using OpenCV, Ovarian Cancer Prediction (96.4% accuracy), Frame Extraction and Face Detection, Vessel Decking Efficiency Model using XGBoost and AWS SageMaker, and my Interactive Personal Portfolio Chatbot using React.js and NLP."
  },
  {
    keywords: ['spoken languages','languages you speak','what languages do you speak','languages you know','languages you can speak','which languages you know','your languages','languages you are fluent in','language proficiency','communication languages','native language','first language','second language','languages you understand'],
    reply:"I can speak English and Tamil fluently. I also have basic understanding of Hindi and can communicate effectively in professional and casual settings."
  },
  {
    keywords:['python rating','rate your python','how good are you in python','python skill level','python 1-10','python expertise','python proficiency','python experience','python knowledge','python skill','python competency','python programming','python coding skill','your python level','python abilities','python capabilities','python strength','python expertise level','python knowledge level'],
    reply:"I would rate myself 8 out of 10 in Python. I have strong hands-on experience in machine learning, data analysis, computer vision, and backend development using Python."
  },
  {
    keywords:['machine learning rating','rate your ml','ml skills','how good are you in machine learning','ml proficiency','machine learning expertise','ml knowledge','ml experience','machine learning level','ml ability','ml competency','ml 1-10','rate your machine learning skills','machine learning skills rating'],
    reply:"I would rate myself 8 out of 10 in Machine Learning. I have hands-on experience in supervised and unsupervised learning, predictive modeling, computer vision, and AI project deployment using Python, OpenCV, Scikit-learn, XGBoost, and AWS SageMaker."
  },
  {
    keywords:['expected salary','salary expectation','what is your expected salary','your salary expectation','how much salary do you expect','ctc expectation','salary you want','expected ctc'],
    reply:"My expected salary range is between 5000 AED to 8000 AED. I’m flexible and mainly looking for a role with learning opportunities and meaningful work."
  },
  {
    keywords:['current salary','what is your current salary','your present salary','present ctc','current ctc','how much are you earning now','salary you get now','current pay'],
    reply:"During my work at IGO Solutions, I received a salary of 2500 AED. I am now looking for a full-time role with a salary in the range of 5000–8000 AED."
  },
  {
    keywords:['bye','goodbye','see you'],
    reply:"Goodbye! 👋 Hope to chat again soon!"
  }
];
