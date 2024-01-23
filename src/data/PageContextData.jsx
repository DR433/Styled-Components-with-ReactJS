export const pageContextData = () => {
	const homePageHero = {
		heroTitle: `REACT WEBSITE & STYLE COMPONENT`,
		heroParaContent: "This website is a testament to the power of modern web development, showcasing how React's component-based architecture and Styled Components' CSS-in-JS approach can come together to create dynamic, visually stunning, and highly interactive web experiences. Each page you navigate, each interaction you make, is a product of Debojyoti's expertise in these cutting-edge technologies.",
		heroTopData: "Created By Debojyoti",
		heroButton: "Contact Me",
		navLink: "/contacts",
		imageLink: "https://media.licdn.com/dms/image/D4D12AQFiqpvvIfyctQ/article-cover_image-shrink_600_2000/0/1675236548143?e=2147483647&v=beta&t=_dD_5kF9fQiSSByWhCXMeLGKhL3Nh-NnDBW-utqjNwM",
		altText: "image of react and styled component",
	};

	const reactJsSummary = {
		sectionTitle: "ReactJS",
		sectionContent: "ReactJS is a JavaScript library for building user interfaces, particularly single-page applications, where you need a fast, interactive user experience. It introduces a component-based architecture, which promotes reusability and maintainability. Each component in ReactJS can manage its own state, making it possible to build complex UIs from simple components.",
		linkedID: "#reactJS",
	};

	const styledComponentSummary = {
		sectionTitle: "Styled Component",
		sectionContent: "Styled Components is a library for styling in React applications that leverages the power of JavaScript and CSS. It allows you to write actual CSS code in your JavaScript, enabling you to have all the benefits of CSS with the full power of JavaScript. Styled Components promotes a component-based system with its own encapsulated styles",
		linkedID: "#styled-components",
	};

	const aboutPageReactHero = {
		heroTitle: "Learn About ReactJS",
		heroParaContent: "ReactJS is a powerful JavaScript library developed by Facebook for building interactive user interfaces, particularly for single-page applications. It allows developers to create reusable components, each with its own state and rendering control, leading to code that is more maintainable and scalable. A key feature of ReactJS is the virtual DOM, which optimizes rendering and improves app performance. Learn everything about ReactJS from the documentation itself.",
		heroTopData: "ReactJS Detailed Description",
		heroButton: "React Documentation",
		navLink: "https://react.dev/blog/2023/03/16/introducing-react-dev",
		imageLink: "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
		altText: "image of reactJS",
	};

	const aboutPageStyleHero = {
		heroTitle: "Learn About Styled Component",
		heroParaContent: "Styled Components, on the other hand, is a library that utilizes tagged template literals in JavaScript to style your components. It removes the mapping between components and styles, meaning that when you’re defining your styles, you’re actually creating a normal React component. This leads to a more consistent use of components, better readability, and ease of styling dynamic components based on props. Learn the Styled components from the Documentation itself.",
		heroTopData: "Styled Component Detailed Description",
		heroButton: "Styled Component Documentation",
		navLink: "https://styled-components.com/docs",
		imageLink: "https://images.velog.io/images/park96h/post/71546015-8ffe-44b6-96cb-ceb08cee73ec/Course%20Thumbnail.jpg",
		altText: "image of styled component",
	};

	return { homePageHero, reactJsSummary, styledComponentSummary, aboutPageReactHero, aboutPageStyleHero };
};
