import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/slices/orderSlices";
import { UPDATE_ORDER } from "../../redux/types/orderTypes";
import { ADD_COURSE_TO_COURSE_OF_USER } from "../../redux/types/userTypes";

const OrderDetail = () => {
    const order = useSelector(state => state.order.order);
    const dispatch = useDispatch();

    const getTotal = () => {
        let total = 0;
        if (order != undefined) {
            order.courses.forEach(course => {
                total += course.price;
            })
        }
        return total;
    }

    const handleActiveCourses = () => {
        if(!order) return;
        dispatch({
            type: UPDATE_ORDER,
            order: {
                ...order,
                status: 'Đã thanh toán'
            }
        });
        dispatch({
            type: ADD_COURSE_TO_COURSE_OF_USER,
            userId: order.user.id,
            courses: order.courses
        })
    };

    return (
        <div>
            <div className="w-[60%] m-auto font-bold text-5xl">
                <span>Chi tiết hóa đơn {order && order.id}</span>
            </div>
            <div>
                {
                    order &&
                    order.courses.map(course => {
                        return (
                            <div key={course.id} className="flex w-[60%] h-[200px] shadow-xl border m-auto mt-[20px]">
                                <div className="w-[35%] border">
                                    <img className="w-[100%] h-[100%]" src={course.coverUrl} />
                                </div>
                                <div className="w-[65%] p-5">
                                    <div className="font-bold text-4xl h-[50%] flex items-center">
                                        <span>{course.title}</span>
                                    </div>
                                    <div className="text-3xl">
                                        <span>Giá: <strong className="text-4xl">{course.price} $</strong></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-4xl border shadow-xl w-[60%] h-[140px] mt-[40px] m-auto flex justify-between items-center px-10">
                <div className="w-[50%]">
                    <span>Tổng giá: <strong>{getTotal()} $</strong></span>
                    <span className="mt-2 block text-3xl">Trạng thái: {order && order.status}</span>
                </div>
                {
                    order && order.status === 'Đang đợi thanh toán' &&
                    <div className="bg-green-500 py-4 px-8 rounded-3xl text-white hover:bg-green-400 select-none cursor-pointer duration-300" onClick={handleActiveCourses}>
                        <span>Kích hoạt khóa học</span>
                    </div>
                }

            </div>
        </div>
    )
}

export default OrderDetail;