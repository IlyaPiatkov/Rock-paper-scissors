import { HomePage } from "./home"
import { NotFoundPage } from "./notfound"
import { GamePage } from "./game"
import { LoginPage, registrationPage } from "./join"
import { OptionsPage } from "./options"
import { RulesPage } from "./rules"
import { SearchPage } from "./search"
import { PrivacyPoliciesPage } from "./privacy-policies"
import { ProfilePage } from "./profile"

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/game",
    exact: true,
    component: GamePage
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage
  },
  {
    path: "/registration",
    exact: true,
    component: registrationPage
  },
  {
    path: "/options",
    exact: true,
    component: OptionsPage
  },
  {
    path: "/rules",
    exact: true,
    component: RulesPage
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage
  },
  {
    path: "/privacy-policies",
    exact: true,
    component: PrivacyPoliciesPage
  },
  {
    path: "/profile",
    exact: true,
    component: ProfilePage
  },

  { component: NotFoundPage }
]
