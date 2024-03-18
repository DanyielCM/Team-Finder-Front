import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFolderOpen, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const house = <FontAwesomeIcon icon={faHouse} />;
const user = <FontAwesomeIcon icon={faUser} />;
const folder = <FontAwesomeIcon icon={faFolderOpen} />;
const users = <FontAwesomeIcon icon={faUsers} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

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
    icon:  house ,
    title: "Administrative roles",
    description: "Assign administrative roles to other employees",
  },
  {
    icon:  house ,
    title: "Departments.",
    description: "Manage departments and department managers",
  },
];

export const SECONDARY_NAV_ITEMS_PROJ = [
  {
    icon:  house ,
    title: "Create new project",
    description: "Create a project and assign the best team",
  }
];

export const SECONDARY_NAV_ITEMS_DEP = [
  {
    icon:  house ,
    title: "Manage department",
    description: "Assign new members and manage department members",
  },
  {
    icon:  house ,
    title: "Skills Set",
    description: "Manage available skills set",
  }
];
