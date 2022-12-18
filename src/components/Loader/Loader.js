import loading from "../../assets/images/loading.gif"

const Loader = () => {
    return (
        <div className="bg-gray-700/70 absolute top-0 z-[1] w-[87.5vw] h-[100vh] left-[12.5%]">
            <img className="block mx-auto mt-[10%]" src={loading} />
        </div>
    )
};

export default Loader;