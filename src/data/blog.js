import logo from "../assets/logo.svg";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
    {
      id: 4,
      title: "useState and useEffect",
      date:"February 25, 2021",
      preview: "using state in reactJS.",
      minutes: 68,
    },
    {
      id: 4,
      title: "fetch in reactJS",
      date:"February 30, 2021",
      preview: "using the fetch method in reactJS.",
      minutes: 80,
    },
  ],
};

export default blogData;
