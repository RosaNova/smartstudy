import PersonalInfoForm from "@/components/Personal-Information";
import HomePage from "@/pages";
import TimeCountdown from "@/pages/TimeCountdown";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";


interface RouteType {
  path: string;
  element: React.ComponentType;
  protected: boolean;
}

export const routes: RouteType[] = [
  {
    path: "/",
    element: HomePage,
    protected: false,
  },
  {
    path: "/login",
    element: LoginPage,
    protected: false,
  },
  {
    path: "/register",
    element: RegisterPage,
    protected: false,
  },
  {
    path: "/profileinformation",
    element : PersonalInfoForm,
    protected : true
  },
  {
    path: "/timercountdown",
    element : TimeCountdown,
    protected : true
  }
];

export default routes;