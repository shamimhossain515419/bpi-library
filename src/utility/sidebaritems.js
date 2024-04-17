import {
  SquaresFour,
  Chat,
  Users,
  SignIn,
  UserPlus,
  TreePalm,
  ShoppingBagOpen,
  ShoppingCart,
} from "phosphor-react";
import { FaLayerGroup } from "react-icons/fa6";
import {
  MdBrandingWatermark,
  MdOutlineWifiProtectedSetup,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { PiSubtractSquareFill } from "react-icons/pi";
import { IoIosColorPalette } from "react-icons/io";
import { RiFontSize } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { CiHome } from "react-icons/ci";

export const sidebar = [
  {
    id: 1,
    name: "dashboard",
    path: "/account",
    Icon: <CiHome size={24}></CiHome>,
  },
  {
    id: 2,
    name: "Books",
    path: "/account/books",
    Icon: <MdOutlineWifiProtectedSetup size={24} />,
    sub: [
      {
        id: 3,
        name: "Apply books",
        path: "/account/apply-books",
        Icon: <FaLayerGroup />,
      },
      {
        id: 4,
        name: "Approved Books  ",
        path: "/account/approved",
        Icon: <MdBrandingWatermark size={24} />,
      },
      {
        id: 5,
        name: "Store books",
        path: "/account/store-books",
        Icon: <BiCategoryAlt size={24} />,
      },
    ],
  },
  {
    id: 5,
    name: "user",
    path: "/account/all-users",
    Icon: <Users size={24}></Users>,
  },
  {
    id: 6,
    name: "Sign  Out",
    path: "/sign",
    Icon: <SignIn size={24}></SignIn>,
  },
];

export const department = [
  {
    id: 1,
    name: "Computer",
  },
  {
    id: 2,
    name: "Civil",
  },
  {
    id: 3,
    name: "Power",
  },
  {
    id: 4,
    name: "Electrical",
  },
  {
    id: 5,
    name: "Electronics",
  },
];
