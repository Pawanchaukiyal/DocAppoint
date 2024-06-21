
import { lazy } from "react";

const AppointmentForm = lazy(()=>import("./AppointmentForm"));

const Biography = lazy(()=>import("./Biography"));

const Departments = lazy(()=>import("./Departments"));

const Footer = lazy(()=>import("./Footer"));

const Hero = lazy(()=>import("./Hero"));

const MessageForm = lazy(()=>import("./MessageForm"));

const Navbar = lazy(()=>import("./Navbar"));

export {AppointmentForm,Biography,Departments, Footer, Hero, MessageForm, Navbar};


