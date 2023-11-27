import { Fragment, ReactNode } from "react";
import { Helmet } from "react-helmet-async";


const Page = ({ children, title = "Dashboard" }: { children: ReactNode, title: string }) => {
    return (
        <Fragment >
            <Helmet>
                <title>{`${title} | Ecomili Inspiration`}</title>
            </Helmet>
            {children}
        </Fragment>
    )
}

export default Page;