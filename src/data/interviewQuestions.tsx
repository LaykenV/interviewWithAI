

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
  ]
  
  

  export {reactQuestions, angularQuestions, behavioralQuestions};