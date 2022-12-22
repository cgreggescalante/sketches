import Header from "./header";

const Layout = ({ children }: { children: any }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
