import Navbar from "../navbar/Nabar"

interface ILayout {
    children: React.ReactNode
}
function Layout({ children }: ILayout) {
    return (
        <>
            <Navbar />
            {children}

        </>
    )
}
export default Layout