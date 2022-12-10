import Header from "../Header"

const NoneSideBarLayout = (props) => {
    return (
        <div>
            <Header></Header>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default NoneSideBarLayout;