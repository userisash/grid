import { Outlet } from "react-router-dom"
import { MainNavBar } from "../components/NavBar"

export function RootLayout(){
    return <>
    <MainNavBar/>
    <Outlet />
    </>
}