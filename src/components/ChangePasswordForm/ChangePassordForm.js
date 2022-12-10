const ChangePasswordForm = () => {

    return (
        <form>
            <div className="text-4xl mb-10">
                <strong>Thay đổi mật khẩu</strong>
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Mật khẩu cũ</strong>
                <input 
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text" />
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Mật khẩu mới</strong>
                <input 
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text" />
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Nhập lại mật khẩu</strong>
                <input 
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text" />
            </div>
            <div className="mt-10 h-10">
                <button className="float-right bg-green-500 px-5 py-3 rounded-xl text-white hover:bg-green-700 duration-300">Lưu thông tin</button>
            </div>
        </form>
    );

}

export default ChangePasswordForm;