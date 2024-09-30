import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/AppContext";
import ThemeChanger from './ThemeChanger'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SMITLogo from "../assets/SMIT.png";

const quickLinks = [
  { title: "Quick Link 1", link: "#" },
  { title: "Quick Link 2", link: "#" },
  { title: "Quick Link 3", link: "#" },
  { title: "Quick Link 4", link: "#" },
];

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { theme } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const NavList = () => {
    
    return(
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" >
      <Typography as="a" href="#imageSlider" variant="small" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 w-full h-full text-black" as="span" >Home</ListItem>
      </Typography>
      <Typography as="a" href="#aboutUs" variant="small" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 w-full h-full text-black transition" as="span" >
          About Us
        </ListItem>
      </Typography>
      <Typography as="a" href="#ourCourses" variant="small" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 w-full h-full text-black" as="span">
          Our Courses
        </ListItem>
      </Typography>
      <Typography as="a" href="#contactUs" variant="small" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 w-full h-full text-black" as="span">
          Contact Us
        </ListItem>
      </Typography>

      {/* Quick Links Menu */}
      <Menu>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem className="flex items-center gap-2 py-2 pr-4 cursor-pointer text-black">
              Quick Links <ChevronDownIcon className="h-4 w-4 text-black" />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className={`${theme === "light" ? "": "bg-base-100"} border-none z-[10000]`} >
          {quickLinks.map(({ title, link }, key) => (
            <MenuItem key={key} className={`flex items-center gap-2 py-2 pr-4`} >
              <Typography
                as="a"
                href={link}
                variant="small"
                className="font-medium"
              >
                {title}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </List>
  )}

  return (
    <div className="flex justify-center items-center w-full" >
      <Navbar
        className="fixed top-0 lg:top-4 w-full  z-[1000] shadow-md border-none rounded-none lg:rounded-md"
        // style={{ backdropFilter: "blur(10px)"}}
        data-theme={theme}
      >
        <div className="flex items-center justify-between w-full text-blue-gray-900">
          {/* Navigation fields in the center for larger screens */}
          <div className="hidden lg:block">
            <div className="btn btn-ghost btn-circle avatar">
              <Link to="/" className="w-16 rounded-full">
                <img alt="SMIT Logo" src={SMITLogo} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <NavList />
          </div>

          {/* Apply Now button on the right */}
          <div className="hidden lg:flex">
            <Button variant="filled" size="sm" className="btn btn-ghost bg-[#8dc63f] hover:bg-[#8dc63f] border-none hover:scale-105">
              Apply Now
            </Button>
          </div>

          {/* Menu button for mobile with logo in the center */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>

            {/* Centered logo for mobile */}
            <div className="btn btn-ghost btn-circle avatar">
              <Link to="/" className="w-16 rounded-full">
                <img alt="SMIT Logo" src={SMITLogo} />
              </Link>
            </div>

            {/* Apply Now button for mobile */}
            <Button variant="filled" size="sm" className="btn btn-ghost bg-[#8dc63f] hover:bg-[#95d837] border-none hidden xs:inline">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Collapsible menu for mobile */}
        <Collapse open={openNav} className="text-center">
          <NavList/>
          <Button variant="filled" size="sm" className="btn btn-ghost bg-[#8dc63f] hover:bg-[#95d837] border-none xs:hidden">
              Apply Now
          </Button>
        </Collapse>
      </Navbar>
      <ThemeChanger position={'fixed bottom-1 right-1 lg:bottom-4 lg:right-4'}/>
    </div>
  );
};

export default NavigationBar;
