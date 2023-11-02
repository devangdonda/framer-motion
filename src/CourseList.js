import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";

const ListButton = (props) => {
  const theme = useTheme();
  const light = theme.palette.mode === 'light';
  return (
    <>
      <ListItemButton
        onClick={() => {
          props.handleClick(props.id);
        }}
      >
        <ListItemIcon>
          <SendOutlinedIcon sx={{color: light ? 'black' : '#90caf9'}}/>
        </ListItemIcon>
        <ListItemText
          primary={props.title}
          primaryTypographyProps = {{fontSize: theme.typography.body1.fontSize}}
        />
        {props.keyNum === props.id ? <ExpandMore sx={{color: light ? 'black' : '#90caf9'}}/> : <ExpandLess sx={{color: light ? 'black' : '#90caf9'}}/>}
      </ListItemButton>
      <Collapse in={props.keyNum === props.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarRoundedIcon  sx={{color: light ? 'black' : '#90caf9'}}/>
            </ListItemIcon>
            <ListItemText
              primary={props.description}
              primaryTypographyProps = {{fontSize: theme.typography.body2.fontSize}}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

const COURSE_LIST = [
  {
    key: 1,
    title: "COMP 1001: Introduction to Programming ",
    description:
      "This course is an introduction to fundamental programming techniques, primitive data types, and simple algorithms and their design concepts. Language: Python",
  },
  {
    key: 2,
    title: "COMP 1002: Introduction to Logic for Computer Scientists ",
    description:
      "To provide basic understanding of logic and discrete structures used throughout computer science, with the focus on computer science-specific applications such as Boolean circuits and basic algorithm analysis.",
  },
  {
    key: 3,
    title: "COMP 1003: Foundations of Computing Systems",
    description:
      "The objective of this course is to provide a solid introduction to foundational topics in computer science: algorithms and data structures, theory of computing, machine architecture and their historical context.",
  },
  {
    key: 4,
    title:
      "COMP 2001: Object-Oriented Programming and Human-Computer Interaction",
    description:
      "Advancing from Introduction to Programming, this course studies object-oriented programming. Additional topics include event-driven programming, program correctness and simple refactoring, as well as interfaces and human-computer interaction. A brief overview of programming languages is also provided.",
  },
  {
    key: 5,
    title: "COMP 2002: Data Structures and Algorithms",
    description:
      "The objective of this course is to teach problem solving techniques via fundamental algorithms and data structures, basic design techniques and analysis. The course will be taught primarily in a language-neutral manner, with material presented mainly in pseudocode; however, it will incorporate a significant programming (implementation) component through its assignments and labs.",
  },
  {
    key: 6,
    title: "COMP 2003: Computer Architecture",
    description:
      "The objective of this course is to explore the architecture of computers and how computers are constructed. The course will examine the classical components of a computer system, such as control, data path, memory, input and output. The course will also examine the common levels of abstraction used to reason about computer organization and architecture. These include: instruction set architectures, hardware components, register transfer level and logic design.",
  },
  {
    key: 7,
    title: "COMP 2004: Introduction to Operating Systems",
    description:
      "The main objectives of the course are to learn how an operating system interfaces the hardware and software resources with the user’s environment, to learn the compositions and connections of multilevel operating systems and to design substantial parts of an operating system.",
  },
  {
    key: 8,
    title: "COMP 2005: Software Engineering",
    description:
      "The objective of this course is to create a software system from requirements capture, perform requirements capture with use case analysis, create an object-oriented domain analysis model from the use cases, transform the domain model into software classes and apply design patterns in selecting and creating the software. Language: JAVA.",
  },
  {
    key: 9,
    title: "COMP 2006: Computer Networking",
    description:
      "To study design of Internet protocols and their performance. It will focus on the most commonly used of those protocols that are in the vast majority of modern computer systems.",
  },
  {
    key: 10,
    title: "COMP 3202: Introduction to Machine Learning",
    description:
      "This course introduces concepts and algorithms in machine learning for regression and classification tasks. The course gives the student the basic ideas and intuition behind model selection and evaluation, and selected machine learning methods such as random forests, support vector machines, and hidden Markov models.",
  },
  {
    key: 11,
    title: "COMP 3200: Algorithmic Techniques for Artificial Intelligence",
    description:
      "This course covers basic algorithmic techniques and data structures that are used to embed basic intelligent behaviors, such as problem solving, reasoning and learning in software systems and agents.",
  },
  {
    key: 12,
    title: "COMP 3301: Visual Computing and Applications",
    description:
      "This course provides students with the fundamental knowledge and skills in the fields of computer vision, computer graphics, and visualization. Visual perception is responsible for most of our impressions about the world around us. This course introduces how computers are used to both mimic the human visual system (such as recognizing shapes) and to create visual content (such as synthesizing images). Related techniques on image synthesis, processing and analysis are discussed under a unified framework. How visual computing principles were used to create visual effects in movies and commercials is also examined.",
  },
  {
    key: 13,
    title: "COMP 3600: Algorithmic Design and Analysis",
    description:
      "This course is intended to refine the student's ability to solve computational problems algorithmically; it goes beyond specific algorithms to cover general methods of algorithm design and analysis and algorithmic problem solving.",
  },
  {
    key: 14,
    title:
      "COMP 2001: Object-Oriented Programming and Human-Computer Interaction",
    description:
      "Advancing from Introduction to Programming, this course studies object-oriented programming. Additional topics include event-driven programming, program correctness and simple refactoring, as well as interfaces and human-computer interaction. A brief overview of programming languages is also provided.",
  },
];

const CourseList = () => {
  const [keyNum, setKeyNum] = React.useState(-1);

  const handleClick = (value) => {
    if (keyNum === value) {
      setKeyNum(-1);
    } else {
      setKeyNum(value);
    }
  };
  return (
    <List
      sx={{
        padding: "10px",
        margin: "10px",
      }}
      component={Paper}
      elevation={6}
      aria-labelledby="nested-list-subheader"
    >
      {COURSE_LIST.map((item) => (
        <ListButton
          handleClick={handleClick}
          keyNum={keyNum}
          key={item.key}
          id={item.key}
          title={item.title}
          description={item.description}
        />
      ))}
    </List>
  );
};

export default CourseList;
