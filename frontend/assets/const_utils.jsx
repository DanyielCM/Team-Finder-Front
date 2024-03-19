import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFolderOpen, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const house = <FontAwesomeIcon icon={faHouse} />;
const user = <FontAwesomeIcon icon={faUser} />;
const folder = <FontAwesomeIcon icon={faFolderOpen} />;
const users = <FontAwesomeIcon icon={faUsers} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

const lock = <FontAwesomeIcon icon="fa-solid fa-lock" />;
const file_add = <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />;

const dep_settings = <FontAwesomeIcon icon="fa-solid fa-users-gear" />;
const skills = <FontAwesomeIcon icon="fa-solid fa-chart-column" />;

export const MAIN_NAV_ITEMS = [
  {
    icon:  house ,
    title: "Dashboard",
  },
  {
    icon:  user ,
    title: "My skills",
  },
  {
    icon:  folder ,
    title: "Projects",
  },
  {
    icon:  users ,
    title: "Department",
  },
  {
    icon:  envelope ,
    title: "Inbox",
  },
];

export const SECONDARY_NAV_ITEMS_ADMIN = [
  {
    icon:  lock ,
    title: "Administrative roles",
    description: "Assign administrative roles and manage departments",
    background_color: "#FFBD64",
    detail_colour: "#FFA021",
  },
  {
    icon:  file_add ,
    title: "Departments",
    description: "Manage departments",
    background_color: "#A3EBD8",
    detail_colour: "#4BE1BD",
  },
];

export const SECONDARY_NAV_ITEMS_PROJ = [
  {
    icon:  folder ,
    title: "Create new project",
    description: "Create a project and assign the best team",
    background_color: "#FFBD64",
    detail_colour: "#FFA021",
  }
];

export const SECONDARY_NAV_ITEMS_DEP = [
  {
    icon:  dep_settings ,
    title: "Manage department",
    description: "Assign new members and manage department",
    background_color: "#FFBD64",
    detail_colour: "#FFA021",
  },
  {
    icon:  skills ,
    title: "Skills Set",
    description: "Manage available skills set",
    background_color: "#A3EBD8",
    detail_colour: "#4BE1BD",
  }
];
