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

export const sidebar = [
  {
    id: 1,
    name: "dashboard",
    path: "/",
    Icon: <SquaresFour size={24}></SquaresFour>,
  },
  {
    id: 2,
    name: "Setup",
    path: "/product",
    Icon: <MdOutlineWifiProtectedSetup size={24} />,
    sub: [
      {
        id: 3,
        name: "group",
        path: "/group",
        Icon: <FaLayerGroup />,
      },
      {
        id: 4,
        name: "brand",
        path: "/brand",
        Icon: <MdBrandingWatermark size={24} />,
      },
      {
        id: 5,
        name: "category",
        path: "/category",
        Icon: <BiCategoryAlt size={24} />,
      },
      {
        id: 6,
        name: "sub category",
        path: "/sub-category",
        Icon: <PiSubtractSquareFill size={24} />,
      },
      {
        id: 7,
        name: " color",
        path: "/color",
        Icon: <IoIosColorPalette size={24} />,
      },
      {
        id: 7,
        name: " size",
        path: "/size",
        Icon: <RiFontSize size={24} />,
      },
      {
        id: 4,
        name: "product",
        path: "/product",
        Icon: <ShoppingBagOpen size={24}></ShoppingBagOpen>,
      },
    ],
  },
  {
    id: 3,
    name: "Stock",
    path: "/stock",
    Icon: <CgShutterstock size={24} />,
    sub: [
      {
        id: 3,
        name: " Stock opening",
        path: "/opening-stock",
        Icon: <AiOutlineStock />,
      },
      {
        id: 3,
        name: "Stock Manage",
        path: "/stock-manage",
        Icon: <MdManageHistory />,
      },
      {
        id: 3,
        name: "Stock report",
        path: "/stock-report",
        Icon: <MdManageHistory />,
      },
      {
        id: 3,
        name: "Stock purchase",
        path: "/purchase",
        Icon: <MdManageHistory />,
      },
    ],
  },
  {
    id: 4,
    name: "Inbox",
    path: "/inbox",
    Icon: <Chat size={24}></Chat>,
  },

  {
    id: 5,
    name: "user",
    path: "/user",
    Icon: <Users size={24}></Users>,
  },
  {
    id: 6,
    name: "Sign In",
    path: "/sign",
    Icon: <SignIn size={24}></SignIn>,
  },
  {
    id: 7,
    name: " Sign Up",
    path: "/login",
    Icon: <UserPlus size={24}></UserPlus>,
  },
];
