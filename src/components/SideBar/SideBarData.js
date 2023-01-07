import {
  faFeather,
  faPenSquare,
  faArrowRight,
  faUser,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideBarData = [
  {
    title: "Blogs",
    path: "/blogs",
    icons: <FontAwesomeIcon icon={faPenSquare} />,
  },
  {
    title: "Write A Blog",
    path: "/createblogs",
    icons: <FontAwesomeIcon icon={faFeather} />,
  },
  {
    title: "My Blogs",
    path: "/myblogs",
    icons: <FontAwesomeIcon icon={faUser} />,
  },
  {
    title: "Logout",
    path: "/logoutscreen",
    icons: <FontAwesomeIcon icon={faArrowRight} />,
  },
];
