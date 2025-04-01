import React, {FC} from "react";
import {Navbar} from "../components/navbar/navbar.tsx";

type Props = {
    children: React.ReactNode;
}

export const Layout: FC<Props> = ({children}) => {
    return (
      <>
        <Navbar />
        {children}
      </>
    )
}