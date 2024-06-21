
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Appointment = lazy(() => import("./Appointment"));
const AboutUs = lazy(() => import("./AboutUs"));



export {AboutUs,Appointment,Home,Login,Register};