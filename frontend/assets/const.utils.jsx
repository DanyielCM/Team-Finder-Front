import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const house = <FontAwesomeIcon icon="fa-solid fa-house" />;
const user = <FontAwesomeIcon icon="fa-solid fa-user" />;
const folder = <FontAwesomeIcon icon="fa-solid fa-folder-open" />;
const users = <FontAwesomeIcon icon="fa-solid fa-users" />;
const envelope = <FontAwesomeIcon icon="fa-solid fa-envelope" />;

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
    title: "People",
  },
  {
    icon:  folder ,
    title: "Projects",
  },
  {
    icon:  users ,
    title: "Departments",
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
  },
  {
    icon:  file_add ,
    title: "Team roles",
    description: "Manage team roles",
  }
];

export const SECONDARY_NAV_ITEMS_PROJ = [
  {
    icon:  folder ,
    title: "Create new project",
    description: "Create a project and assign the best team",
  }
]

export const SECONDARY_NAV_ITEMS_DEP = [
  {
    icon:  dep_settings ,
    title: "Manage department",
    description: "Assign new members and manage department",
  },
  {
    icon:  skills ,
    title: "Skills Set",
    description: "Manage available skills set",
  }
]