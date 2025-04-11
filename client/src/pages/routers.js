import * as React from "react"
import { renderRoutes } from "react-router-config"
import { routes } from "./index"

export const Routes = () => <>{renderRoutes(routes())}</>
