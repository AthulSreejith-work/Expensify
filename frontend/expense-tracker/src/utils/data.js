import {
  FiLayout,
  FiTrendingUp,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: FiLayout,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Income",
    icon: FiTrendingUp,
    path: "/income",
  },
  {
    id: "03",
    label: "Expense",
    icon: FiCreditCard,
    path: "/expense",
  },
  {
    id: "06",
    label: "Logout",
    icon: FiLogOut,
    path: "/logout",
  },
];
