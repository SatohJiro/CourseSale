const UserForm = () => {
    return (
        <form>
            <div className="font-bold text-4xl mb-10">
                <span>Thông tin người dùng</span>
            </div>
            <div className="my-5 flex">
                <strong className="block w-[20%]">ID:</strong> <span>1234</span>
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Họ và tên:</strong>
                <input
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text" />
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Email:</strong>
                <input
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text" />
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Sđt:</strong>
                <input
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text" />
            </div>
            <div className="mt-10 h-10">
                <button className="float-right bg-green-500 px-5 py-3 rounded-xl text-white hover:bg-green-700 duration-300">Lưu thông tin</button>
            </div>
        </form>
    );
};

export default UserForm;