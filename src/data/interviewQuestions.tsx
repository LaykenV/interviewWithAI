

const reactQuestions = [
    "What is React and what problem does it solve?",
    "What are the advantages and limitations of React?",
    "What is JSX?",
    "What do you understand about the Virtual DOM? Explain how it works.",
    "Why can't browsers read JSX?",
    "How different is React's ES6 syntax when compared to ES5?",
    "How is React different from Angular?",
    "What are props in React?",
    "What is state in React?",
    "What are the different types of React components?",
    "What is a functional component?",
    "What are the benefits of using functional components?",
    "How do you create a functional component?",
    "What is the useContext hook in React?",
    "What is the difference between props and state?",
    "How do you pass props to a functional component?",
    "How do you handle state management in React?",
    "What is the useEffect hook in React and what are its use cases?",
    "What is the useState hook in React?",
    "What are the different state management libraries available for React?",
    "What is Redux and how do you use it?",
    "What is conditional rendering in React and how is it achieved?",
    "What is the purpose of the spread operator in React?",
    "What is prop drilling in React and how can it be mitigated?",
    "What is React Router and how do you use it?",
    "What is the children prop in React and how is it used?",
    "What is the role of the Fragment component in React?",
    "What are React Hooks and how do you use them?",
    "What are the different React Hooks available?",
    "What is a custom hook and how do you create one?",
    "What is a higher-order component and how do you use it?",
    "What are the different ways to style React components?",
    "What is CSS in JS? How do you use CSS in JS?",
    "What is the difference between a static site and a dynamic site?",
    "What is the difference between a server-side rendered application and a client-side rendered application?",
    "What are the benefits and drawbacks of using a server-side rendered application?",
    "What are the benefits and drawbacks of using a client-side rendered application?",
    "What are CSS Modules and how do you use them?",
    "What is testing in React?",
    "What are the different testing frameworks available for React?",
    "How do you test React components?",
    "What is HTML?",
    "What is CSS?",
    "What are the different units in CSS?",
    "What is JavaScript?",
    "What are the different types of data in JavaScript?",
    "What are the different operators in JavaScript?",
    "Explain Selectors, Classes and ID's in CSS.",
    "What is a media query in CSS?",
  ];

  const seniorReactQuestions = [
    "What is React Fiber and how does it enhance performance?",
    "Can you explain how you have used React Profiler in the past?",
    "Explain the React component lifecycle in depth.",
    "Can you explain the concept of keys in React and why they are important?",
    "What are React Portals and where might you use them?",
    "How do you optimize performance in a React application?",
    "Can you explain how server-side rendering with React works?",
    "What is Next.js and what advantages does it provide for a React application?",
    "Explain in detail how you have used Redux middleware in your projects.",
    "How do you handle errors in a React application?",
    "How have you handled asynchronous operations in your previous React projects?",
    "What is your preferred method for managing state in a large-scale React application, and why?",
    "What is your approach to testing React applications? Discuss some tools and libraries you use.",
    "How have you used context API in your React projects?",
    "How do you ensure type safety in your React applications? Have you used TypeScript with React?",
    "What is your approach to structuring a large React project and why?",
    "How have you worked with APIs in React? Discuss some challenges you have faced.",
    "Can you explain how React's reconciliation process works?",
    "What is React suspense and how have you used it in your projects?",
    "How do you handle component communication in a large React application?",
    "How do you handle forms and validations in React?",
    "What is GraphQL and have you used it with React?",
    "Discuss how you use third-party libraries in React. How do you decide which ones to use?",
    "What is your approach to responsive design in React applications?",
    "Discuss the importance of accessibility in React applications and how you ensure it.",
    "What are some of the latest features in the recent versions of React?",
    "What are the challenges you've faced while migrating from class-based components to functional components with hooks?",
    "How do you handle security issues in your React applications?",
    "What is your experience with mobile development using React Native?",
    "What are the differences between controlled and uncontrolled components?",
    "How have you handled animations in your React applications?",
    "What is your experience with other libraries like React Router, Redux Saga, Redux Thunk, etc.?",
    "What is your experience with build tools like Webpack and task runners like Gulp, Grunt?",
    "How have you handled real-time data or Websockets in React?",
    "What is your strategy for code splitting in a React application?",
    "What are some differences between using cookies, localStorage, and sessionStorage?",
    "How have you implemented or handled caching in your past React applications?",
    "Can you discuss a challenging bug you encountered in a React application and how you went about solving it?",
    "How would you handle components that only render once and have to hold their state?",
    "What are your strategies for dealing with race conditions in JavaScript?",
    "How would you design a large scale React application with multiple teams working on it?",
    "What is your experience with internationalization (i18n) in React applications?"
];


  const angularQuestions = [
    "What is Angular and what problem does it solve?",
    "What are the key features of Angular?",
    "What is TypeScript and why is it used with Angular?",
    "What is the difference between AngularJS and Angular?",
    "What is the purpose of NgModule in Angular?",
    "What are directives in Angular?",
    "What is data binding in Angular?",
    "What is the difference between one-way binding and two-way binding in Angular?",
    "What is Angular CLI and how is it used?",
    "What is the purpose of the async pipe in Angular?",
    "What are Angular services and why are they used?",
    "What is dependency injection in Angular and how does it work?",
    "What is the purpose of decorators in Angular?",
    "What is the difference between ViewChild and ContentChild in Angular?",
    "What is the purpose of ng-content in Angular?",
    "What are Angular modules and how are they used?",
    "What is lazy loading in Angular?",
    "What is the Angular router and how is it used?",
    "What is Angular Material and how does it relate to Angular?",
    "What is the difference between ngOnInit and ngOnChanges in Angular?",
    "What is the purpose of ng-template in Angular?",
    "What is the purpose of ng-container in Angular?",
    "What is the role of the trackBy function in Angular's ngFor directive?",
    "What is Angular Universal and why is it used?",
    "What is the purpose of ngZone in Angular?",
    "What are Angular guards and how are they used?",
    "What is the purpose of the HttpClientModule in Angular?",
    "What are Angular pipes and how are they used?",
    "What is AOT (Ahead-of-Time) compilation in Angular and why is it beneficial?",
    "What is the purpose of ngIf in Angular?",
    "What is the difference between ngClass and ngStyle in Angular?",
    "What is the purpose of ngModel in Angular forms?",
    "What is the difference between template-driven forms and reactive forms in Angular?",
    "What is Angular testing and what tools are commonly used?",
    "What is the purpose of the ng-content selector in Angular components?",
    "What is the purpose of the ngSwitch directive in Angular?",
    "What is the purpose of ngZone in Angular?",
    "What are Angular guards and how are they used?",
    "What is the purpose of the HttpClientModule in Angular?",
    "What are Angular pipes and how are they used?",
    "What is the purpose of ngIf in Angular?",
    "What is HTML?",
    "What is CSS?",
    "What are the different units in CSS?",
    "What is JavaScript?",
    "What are the different types of data in JavaScript?",
    "What are the different operators in JavaScript?",
    "Explain Selectors, Classes and ID's in CSS.",
    "What is a media query in CSS?",
  ];

  const seniorAngularQeustions = [
    "How do you optimize performance in an Angular application?",
    "Can you explain the Change Detection strategy in Angular?",
    "What are decorators in Angular? Give examples of some commonly used decorators.",
    "Explain how Dependency Injection works in Angular in detail.",
    "What is Angular Universal and how does it help in SEO?",
    "Explain Observables and Promises. How are they used in Angular?",
    "What is NgRx and how is it used in Angular applications?",
    "What is the difference between 'declarations', 'providers', and 'imports' in NgModule?",
    "Explain how lazy loading works in Angular.",
    "How do you handle errors in an Angular application?",
    "What are your strategies for testing Angular applications?",
    "What are the best practices for structuring a large Angular application?",
    "Explain the differences between 'constructor' and 'ngOnInit'.",
    "How do you handle state management in Angular applications?",
    "What is your experience with Angular forms? Discuss Template-driven and Reactive forms.",
    "Explain how to internationalize an Angular application.",
    "How do you handle user authentication and authorization in Angular?",
    "What is the purpose of Angular Pipes? Can you create a custom pipe?",
    "What is the role of zones in Angular and how do they influence change detection?",
    "Can you explain how AOT (Ahead-of-Time) compilation works in Angular?",
    "How do you debug an Angular application?",
    "What is Ivy Renderer and what are its benefits?",
    "What is the difference between a service and a factory in Angular?",
    "Discuss the various ways to communicate between components in Angular.",
    "How would you go about migrating an application from AngularJS to Angular?",
    "What is your approach to handling mobile responsiveness in Angular?",
    "How do you ensure accessibility in your Angular applications?",
    "What is your approach to handling security vulnerabilities in Angular?",
    "What are interceptors in Angular and what are they used for?",
    "How have you used RxJS in your Angular projects?",
    "Can you give an example of a time when you improved performance in an Angular application?",
    "How do you handle asynchronous operations in Angular?",
    "Discuss your experience with Angular CLI.",
    "Explain how the 'async' pipe is used in Angular.",
    "How do you handle form validations in Angular?",
    "Explain the differences between 'ViewChild' and 'ContentChild'.",
    "What strategies have you used for error handling in Angular?",
    "What is the difference between 'Observables' and 'Subjects' in RxJS?",
    "Explain how you have used 'route guards' in Angular.",
    "What is the strategy to manage state in large-scale Angular applications?",
    "How have you dealt with SEO in Angular applications?",
    "What is your experience with Angular Mobile development?"
];


  const behavioralQuestions = [
    "Tell me about a time when you faced a challenging technical problem at work or during your studies. How did you approach and solve it?",
    "Describe a situation where you had to work collaboratively with a team to deliver a complex project or meet a tight deadline.",
    "Can you share an example of a time when you had to quickly learn a new technology or programming language to complete a project?",
    "Tell me about a time when you took the initiative to suggest and implement an improvement in a software development process or workflow.",
    "Describe a situation where you had to handle a difficult stakeholder or client. How did you manage the relationship and meet their expectations?",
    "Can you share an example of a project you've worked on that required balancing technical excellence with project constraints and business goals?",
    "Tell me about a time when you had to resolve a disagreement or conflict within your team or with a colleague. How did you approach the situation?",
    "Describe a situation where you encountered a significant setback or failure in a software development project. How did you recover from it?",
    "Can you share an example of a time when you had to present a technical concept or solution to a non-technical audience? How did you ensure understanding?",
    "Tell me about a project you completed where you had to manage competing priorities and make trade-offs to deliver the best results.",
    "Describe a situation where you had to mentor or provide technical guidance to a less experienced colleague or team member.",
    "Can you share an example of a time when you had to work with a remote or distributed team? How did you ensure effective communication and collaboration?",
    "Tell me about a time when you had to deal with a high-pressure situation or tight deadline. How did you handle the stress and deliver quality work?",
    "Describe a situation where you had to handle a significant change or pivot in project requirements or scope. How did you adapt and ensure project success?",
    "Can you share an example of a time when you had to work with a diverse group of individuals to accomplish a common tech-related goal?",
    "Tell me about a time when you identified and successfully resolved a major technical issue or bug in a software system.",
    "Describe a situation where you had to balance the needs of multiple stakeholders or departments in a software development project.",
    "Can you share an example of a time when you had to navigate and overcome a challenging technical or architectural constraint?",
    "Tell me about a project you worked on that required you to incorporate user feedback and iterate on the software to enhance the user experience.",
    "Describe a situation where you had to manage or work on multiple projects simultaneously. How did you prioritize and manage your time effectively?"
  ];

  const javaQuestions = [
    "What is Java?",
    "What are the main differences between Java and C++?",
    "What do you understand by the term 'platform independence'?",
    "What is the Java Development Kit (JDK) and what does it include?",
    "Explain the concept of Object-Oriented Programming (OOP).",
    "What are the main principles of OOP?",
    "What are Java classes and objects?",
    "What are constructors in Java?",
    "What is method overloading in Java?",
    "What is method overriding in Java?",
    "What is inheritance in Java?",
    "What is polymorphism in Java?",
    "What is abstraction in Java?",
    "What is encapsulation in Java?",
    "What is an interface in Java?",
    "What is the difference between an abstract class and an interface in Java?",
    "What are exceptions in Java?",
    "What is the difference between checked and unchecked exceptions?",
    "What are Java packages and what are they used for?",
    "What is multithreading in Java?",
    "Explain the lifecycle of a thread in Java.",
    "What are the different ways to create a thread in Java?",
    "What is synchronization in Java?",
    "What is the Java Collections Framework?",
    "What is the difference between a list, set, and map in Java?",
    "What is the difference between an array and an ArrayList in Java?",
    "What is the difference between '==' and '.equals' in Java?",
    "What is the Java Stream API and why would you use it?",
    "What is the purpose of the 'static' keyword in Java?",
    "What is garbage collection in Java?"
];

  const seniorJavaQuestions = [
    "What new features were introduced in Java 8, 9, 10, and 11?",
    "What are the differences between ArrayList and LinkedList?",
    "Explain how HashMap works in Java.",
    "What are the benefits and drawbacks of using recursion in Java?",
    "What is a memory leak and how can it happen in Java?",
    "What is the Java Memory Model and why is it important?",
    "How does Java's garbage collector work and what types of garbage collectors are there?",
    "What are the advantages and disadvantages of microservices?",
    "How can you achieve thread safety in Java?",
    "What is the Java Reflection API and where is it used?",
    "What are Java annotations and how would you create your own?",
    "What is the Spring Framework and what advantages does it offer for Java development?",
    "What is Dependency Injection and how is it implemented in Spring?",
    "What are the differences between Spring MVC and Spring Boot?",
    "What is Hibernate and how does it interact with a database?",
    "How do you handle transactions in Java?",
    "What is JPA and how does it relate to Hibernate?",
    "What is the difference between SOAP and REST?",
    "What is your experience with testing in Java? What frameworks have you used?",
    "What is the role of a Java architect and how does it differ from a senior developer role?"
];

  const cQuestions = [
    "What is C# and what type of applications can you develop with it?",
    "What are the main differences between C# and Java?",
    "What is the .NET Framework?",
    "What is the CLR (Common Language Runtime)?",
    "What is CTS (Common Type System) in .NET?",
    "What are the main principles of Object-Oriented Programming (OOP)?",
    "What are classes and objects in C#?",
    "What is a constructor in C#?",
    "What are properties in C#?",
    "What is inheritance in C#?",
    "What is polymorphism in C#?",
    "What is abstraction in C#?",
    "What is encapsulation in C#?",
    "What is an interface in C#?",
    "What is the difference between an abstract class and an interface in C#?",
    "What are structs in C#?",
    "What are delegates in C#?",
    "What is exception handling in C#?",
    "What are the differences between 'throw' and 'throw ex' in C#?",
    "What is LINQ and why would you use it?",
    "What is the difference between 'out' and 'ref' parameters in C#?",
    "What is boxing and unboxing in C#?",
    "What is the difference between a value type and a reference type?",
    "What is multithreading in C#?",
    "What is async/await in C#?",
    "What is the difference between '==' and '.Equals' in C#?",
    "What is the purpose of the 'static' keyword in C#?",
    "What is garbage collection in C#?",
    "What is Entity Framework?",
    "What is a lambda expression in C#?"
];

  const seniorCQuestions = [
    "What new features were introduced in recent versions of C#?",
    "What is the .NET Core and how does it differ from the .NET Framework?",
    "How do you handle cross-platform development in C#?",
    "What is a memory leak and how can it happen in C#?",
    "What is the garbage collector in .NET and how does it work?",
    "What are the advantages and disadvantages of microservices?",
    "How can you achieve thread safety in C#?",
    "What is dependency injection in .NET?",
    "What are the differences between WPF and WinForms?",
    "What is the ASP.NET MVC and how does it work?",
    "What is Entity Framework and how does it interact with a database?",
    "How do you handle transactions in C#?",
    "What is the difference between SOAP and REST?",
    "What is your experience with testing in C#? What frameworks have you used?",
    "What is the role of a C# architect and how does it differ from a senior developer role?",
    "What are C# attributes and how would you create your own?",
    "What is the TPL (Task Parallel Library) in .NET?",
    "What is the DLR (Dynamic Language Runtime) in .NET?",
    "What is the purpose of 'yield' keyword in C#?",
    "What is the IDisposable interface and when should it be implemented?"
];

  const pythonQuestions = [
    "What is Python and what type of applications can you develop with it?",
    "What are the key features of Python?",
    "What is the difference between Python 2 and Python 3?",
    "What is PEP8?",
    "What are Python's built-in data types?",
    "What are Python's built-in data structures?",
    "What are Python's built-in functions?",
    "What is the difference between a list and a tuple in Python?",
    "What is a dictionary in Python?",
    "What are sets in Python?",
    "What is a Python function and how do you define one?",
    "What are Python modules and packages?",
    "What is pip and how do you use it?",
    "What is a Python decorator?",
    "What is the difference between 'is' and '==' in Python?",
    "What are list comprehensions in Python?",
    "What is the difference between a shallow copy and a deep copy in Python?",
    "What are Python generators?",
    "What are exceptions in Python and how are they handled?",
    "What is the purpose of 'self' in Python?",
    "What is inheritance in Python?",
    "What is polymorphism in Python?",
    "What is Python's Global Interpreter Lock (GIL)?",
    "What is the difference between a Python iterator and a Python generator?",
    "What are lambda functions in Python?",
    "What is the map function in Python?",
    "What are Python's built-in sorting functions?",
    "What is the difference between mutable and immutable types in Python?",
    "What is the 'with' statement in Python?",
    "What are Python context managers?"
];

  const seniorPythonQuestions = [
    "What new features were introduced in recent versions of Python?",
    "How can you achieve concurrency in Python?",
    "What is the difference between multi-threading and multi-processing in Python?",
    "What is a memory leak and how can it happen in Python?",
    "What are the advantages and disadvantages of Python's dynamic typing?",
    "How do you handle data analysis in Python? What libraries do you use?",
    "What is your experience with web development in Python? What frameworks have you used?",
    "What is Django and how does it work?",
    "What is Flask and how does it differ from Django?",
    "What is your experience with testing in Python? What frameworks have you used?",
    "What are Python metaclasses?",
    "What is the purpose of Python's __name__ attribute?",
    "What is the purpose of the __init__.py file in Python packages?",
    "What is your experience with Python's database APIs?",
    "What is SQLAlchemy and how does it interact with a database?",
    "What is the difference between a Python list comprehension and a generator expression?",
    "What is asyncio in Python and how does it work?",
    "What is your experience with data scraping in Python?",
    "What is your experience with machine learning in Python?",
    "What is the role of a Python architect and how does it differ from a senior developer role?"
];

  const devOpsQuestions = [
    "What is DevOps?",
    "What are the key benefits of DevOps?",
    "Explain the DevOps lifecycle.",
    "What is Continuous Integration (CI)?",
    "What is Continuous Deployment (CD)?",
    "What is Continuous Delivery?",
    "What is the difference between Agile and DevOps?",
    "What is Infrastructure as Code (IaC)?",
    "What tools have you used for configuration management?",
    "What is the role of AWS in DevOps?",
    "Explain how you've used Docker in your projects.",
    "What is container orchestration? Have you used Kubernetes?",
    "How would you handle version control?",
    "Have you used Git? Describe your experience with it.",
    "What is Jenkins and how does it fit into the DevOps ecosystem?",
    "What are microservices?",
    "What is a build pipeline?",
    "What is automated testing?",
    "What is the role of a DevOps engineer in the SDLC?",
    "How do you monitor the performance of your applications?",
    "What are some DevOps best practices you follow?",
    "How would you handle a service outage?",
    "How would you ensure data security in a DevOps environment?",
    "How have you implemented scalability in your previous projects?",
    "What is cloud computing? How have you used it in your projects?",
    "What is serverless architecture?",
    "What is Blue/Green deployment?",
    "What is Canary deployment?",
    "What is a VPC?",
    "What is a load balancer and why is it important?",
    "What is the difference between vertical and horizontal scaling?",
    "What is a reverse proxy and why is it used?",
    "What are system logs and how do you use them?",
    "What is the role of API in DevOps?",
    "What is virtualization and how does it work?",
    "What is your experience with network configurations?",
    "How do you manage database changes in a CI/CD pipeline?",
    "What is the role of AI and machine learning in DevOps?",
    "What is the ELK stack?",
    "What is server hardening?",
    "What is Terraform and how have you used it?",
    "What is Puppet and what is it used for?",
    "What is Ansible and what is it used for?",
    "What is Nagios and what is it used for?",
    "What is the difference between a Docker image and a container?",
    "What is Helm in Kubernetes?",
    "What is GitOps?",
    "What are the principles of a good monitoring solution?",
    "How do you ensure high availability and disaster recovery?",
    "What is the biggest challenge you have faced as a DevOps engineer and how did you overcome it?"
];

  const dataScientistQuestions = [
    "What is Data Science?",
    "What is the difference between supervised and unsupervised learning?",
    "Explain what a random forest is.",
    "What is cross-validation?",
    "What is bias-variance tradeoff?",
    "What is Principal Component Analysis (PCA)?",
    "What is a confusion matrix?",
    "What is the purpose of data cleaning in the data science process?",
    "What is your experience with programming languages such as Python or R?",
    "Describe how you would visualize a large dataset.",
    "What is logistic regression?",
    "What is the difference between Type I and Type II error?",
    "What are the key steps in the data science process?",
    "Explain what k-means clustering is.",
    "What is overfitting and how can it be prevented?",
    "What are some differences between a list and a dictionary in Python?",
    "Explain the concept of ensemble learning.",
    "What is your experience with SQL?",
    "How do you handle missing or corrupted data in a dataset?",
    "What is a normal distribution?",
    "What are some data visualization tools or libraries you have used?",
    "What is a linear regression?",
    "What is the difference between long and wide format data?",
    "Explain the concept of gradient descent.",
    "What is the Central Limit Theorem and why is it important in data science?",
    "What is the purpose of a box plot?",
    "What is the role of a data scientist in a business context?",
    "What are some limitations of machine learning?",
    "What is the difference between correlation and causation?",
    "What is a time series analysis?"
];

  const seniorDataScientistQuestions = [
    "Describe a time when you used data to solve a complex problem.",
    "How would you handle data that is imbalanced?",
    "How do you ensure your models avoid bias?",
    "Explain how a ROC curve works.",
    "How do you handle large datasets that don’t fit into memory?",
    "What are your experiences with different data storage solutions?",
    "How would you approach the problem if the distribution of the test data was significantly different than the distribution of the training data?",
    "What is your experience with deep learning frameworks?",
    "How have you dealt with deploying models in production environments?",
    "What are some ways to make a model more interpretable?",
    "What is your experience with data extraction tools and processes?",
    "How do you validate the results of an A/B test?",
    "What methods have you used for feature selection in machine learning?",
    "What is your experience with distributed computing systems like Hadoop or Spark?",
    "How do you measure the success of a data science project?",
    "What is your experience in working with APIs for data collection?",
    "How do you communicate your findings to non-technical stakeholders?",
    "What is your experience in implementing real-time machine learning models?",
    "How have you used natural language processing (NLP) in your projects?",
    "What is your experience with big data platforms and tools?"
];

  const cyberQuestions = [
    "What is cybersecurity?",
    "What interests you about cybersecurity?",
    "What is the CIA triad in cybersecurity?",
    "What is a firewall?",
    "What is encryption? Can you explain how it works?",
    "What is a VPN and why is it used?",
    "What is the difference between IDS and IPS?",
    "What is a DDoS attack?",
    "What are some common cybersecurity threats?",
    "Can you explain what a security policy is?",
    "What is two-factor authentication?",
    "What is a man-in-the-middle attack?",
    "What are the different types of malware?",
    "What is phishing?",
    "Can you explain what an SSL certificate is?",
    "What is a honeypot in cybersecurity?",
    "What is the role of an incident response team?",
    "What steps would you take after detecting a security breach?",
    "What is the difference between black, white, and grey box testing?",
    "What is social engineering? Can you provide an example?",
    "What is a zero-day vulnerability?",
    "What are the most important aspects of a secure password?",
    "What is patch management?",
    "What is the difference between symmetric and asymmetric encryption?",
    "What is public key infrastructure (PKI)?",
    "What are your thoughts on ethical hacking?",
    "What is a proxy server?",
    "What is risk management in the context of cybersecurity?",
    "What is a brute force attack?",
    "What is a security audit?"
];

  const seniorCyberQuestions = [
    "How have you influenced the culture of security within past organizations?",
    "What steps would you take to secure a server?",
    "How do you keep current with the latest cybersecurity threats and solutions?",
    "Can you describe a time when you responded to a cybersecurity threat or breach?",
    "What role does data privacy play in cybersecurity?",
    "What experience do you have with setting up and maintaining SIEM systems?",
    "What is your approach to educating non-technical staff about cybersecurity risks?",
    "How would you handle a situation where a company executive was the victim of a phishing attempt?",
    "What is your experience with incident response and disaster recovery planning?",
    "Can you discuss your experience with cloud security? What unique threats does the cloud present?",
    "How would you go about establishing a cybersecurity framework for a company that has none?",
    "What are some cybersecurity considerations when designing a mobile application?",
    "What is your approach to risk assessment?",
    "What experience do you have with securing multi-factor authentication systems?",
    "How have you used threat intelligence platforms in your previous roles?",
    "What is your experience with encryption and key management?",
    "What are some of the most challenging aspects of working in cybersecurity, and how have you overcome them?",
    "Can you explain your understanding of ISO 27001 and its importance?",
    "What role does AI play in cybersecurity?",
    "What are some challenges or considerations when implementing cybersecurity measures in an IoT environment?"
];
  
  

  export {reactQuestions, angularQuestions, behavioralQuestions, seniorReactQuestions, seniorAngularQeustions, javaQuestions, seniorJavaQuestions, cQuestions, seniorCQuestions, pythonQuestions, seniorPythonQuestions, dataScientistQuestions, seniorDataScientistQuestions, devOpsQuestions, cyberQuestions, seniorCyberQuestions};