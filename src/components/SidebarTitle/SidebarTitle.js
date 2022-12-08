const SidebarTitle = (props) => {
    return (
        <div className="w-full mt-2 mb-2">
            <span className="text-gray-500 ml-5">{props.name}</span>
        </div>
    );
};

export default SidebarTitle;