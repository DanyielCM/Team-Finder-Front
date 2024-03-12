import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const house = <FontAwesomeIcon icon="fa-solid fa-house" />;
const user = <FontAwesomeIcon icon="fa-solid fa-user" />;
const folder = <FontAwesomeIcon icon="fa-solid fa-folder-open" />;
const users = <FontAwesomeIcon icon="fa-solid fa-users" />;
const envelope = <FontAwesomeIcon icon="fa-solid fa-envelope" />;

export const NAV_ITEMS = [
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

