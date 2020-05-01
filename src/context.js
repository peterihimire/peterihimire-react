import React, { Component } from "react";
// import items from "./data";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaSass,
  FaLinux,
  FaGit,
  FaGulp
} from "react-icons/fa";
import { FaRocket, FaHeartbeat, FaGem, FaDesktop } from "react-icons/fa";
import Client from "./Contentful";

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = {
    services: [
      {
        icon: <FaGem />,
        iconColor: "gem-color",
        title: "intuitive UX/UI",
        info:
          "I have strong preference for easy to use user interfaces & great user experience."
      },
      {
        icon: <FaRocket />,
        iconColor: "rocket-color",
        title: "fast load time",
        info:
          "Fast load times and lag free interactions are my highest priority."
      },
      {
        icon: <FaDesktop />,
        iconColor: "desktop-color",
        title: "responsive layout",
        info:
          "My layout will work on any device, desktops, laptops, tablets and smartphones."
      },
      {
        icon: <FaHeartbeat />,
        iconColor: "heart-color",
        title: "dynamic website",
        info:
          "Website don't have to be static, I like to make web pages come to life."
      }
    ],
    stacks: [
      {
        title: "web designer",
        details:
          "As a designer, passionate about making a difference, I value simple content structure, clean design patterns and thoughtful interactions. I have strong preference for easy to use Intuitive User Interface and User Experience. Things I enjoy designing are UI and UX for web , desktop and mobile layouts."
      },
      {
        title: "web developer",
        details:
          "I've always been drawn to the overlap between design and development. In addition to web design, I like to code things from scratch and enjoy bringing ideas to life in the browser. Technologies I use in the front-end are HTML, CSS, JavaScript, Bootstrap, React, Node.JS etc. Check out some of my projects in the portfolio section."
      },
      {
        title: "mentor",
        details:
          " Starting the journey of a web development and software engineering has never been easy, I know what it feels like, thats why I genuinely care about new programmers and fellow web developers, mentoring and helping them improve on their soft and hard skills as software engineers."
      }
    ],
    skills: [
      {
        icon: <FaHtml5 />,
        title: "html",
        iconColor: "html-color",
        lineColor: "html-line"
      },
      {
        icon: <FaCss3Alt />,
        title: "css",
        iconColor: "css-color",
        lineColor: "css-line"
      },
      {
        icon: <FaJs />,
        title: "javascript",
        iconColor: "js-color",
        lineColor: "js-line"
      },
      {
        icon: <FaReact />,
        title: "react",
        iconColor: "react-color",
        lineColor: "react-line"
      },
      {
        icon: <FaBootstrap />,
        title: "bootstrap",
        iconColor: "bootstrap-color",
        lineColor: "bootstrap-line"
      },
      {
        icon: <FaNodeJs />,
        title: "node js",
        iconColor: "node-color",
        lineColor: "node-line"
      },
      {
        icon: <FaLinux />,
        title: "linux",
        iconColor: "linux-color",
        lineColor: "linux-line"
      },
      {
        icon: <FaGit />,
        title: "git",
        iconColor: "git-color",
        lineColor: "git-line"
      },
      {
        icon: <FaGulp />,
        title: "gulp",
        iconColor: "gulp-color",
        lineColor: "gulp-line"
      },
      {
        icon: <FaSass />,
        title: "saas",
        iconColor: "sass-color",
        lineColor: "sass-line"
      }
    ],
    isOpen: false,
    isVisible: false,
    projects: [],
    sortedProjects: [],
    loading: true,
    type: "all"
  };
  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "portfolioProjects",
        order: "sys.createdAt"
      });
      let projects = this.formatData(response.items);
      this.setState({
        projects,
        sortedProjects: projects,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", e => {
      this.toggleVisibility();
    });
    this.getData();
  }

  toggleHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  removeOverlay = () => {
    console.log("navbar overlay has been clicked.");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleVisibility = () => {
    // let position = window.scrollY;
    let position = window.pageYOffset;
    console.log(position);
    if (position > 2050) {
      console.log("I am at position 1050 and above");
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  };

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;
      let project = { ...item.fields, id, image };
      // let project = { ...item };
      return project;
    });
    return tempItems;
  }

  changeHandler = e => {
    const target = e.target;
    console.log(target);

    const value = target.value;
    const type = e.target.name;
    console.log(`this is ${type}, this is ${value}`);
    this.setState({ [type]: value }, this.filterProjects);
  };

  filterProjects = () => {
    let { projects, type } = this.state;

    let tempProjects = [...projects];
    console.log(tempProjects);

    if (type !== "all") {
      tempProjects = tempProjects.filter(project => project.type === type);
    }

    this.setState({ sortedProjects: tempProjects });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          changeHandler: this.changeHandler,
          removeOverlay: this.removeOverlay,
          toggleHandler: this.toggleHandler,
          toggleVisibility: this.toggleVisibility,
          scrollUp: this.scrollUp
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export const withProjectConsumer = Component => {
  return function ConsumerWrapper(props) {
    return (
      <ProjectConsumer>
        {value => <Component {...props} context={value} />}
      </ProjectConsumer>
    );
  };
};
export { ProjectProvider, ProjectConsumer, ProjectContext };
