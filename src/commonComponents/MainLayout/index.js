import { Header } from "../Header";

export const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};
