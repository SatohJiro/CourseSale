import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GET_ALL_ORDER, GET_BY_ORDER_ID } from "../../redux/types/orderTypes";

const OrderList = () => {

    const orders = useSelector(state => state.order.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: GET_ALL_ORDER
        })
    })

    const columns = [
        {
            name: "Id",
            selector: (row) => row.id
        },
        {
            name: "Tên người đặt",
            selector: (row) => row.user.fname
        },
        {
            name: "Ngày đặt",
            selector: (row) => row.purchaseDate
        },
        {
            name: "",
            selector: (row) => {
                return (
                    <div className="flex">
                        <Link to="/order-detail" onClick={() => handleShowOrderDetail(row.id)}>
                            <div className="bg-green-700 text-3xl p-3 rounded-xl hover:bg-green-600 cursor-pointer text-white" >
                                <span>Xem chi tiết</span>
                            </div>
                        </Link>
                    </div>
                )
            }
        }
    ];

    const handleShowOrderDetail = (id) => {
        dispatch({
            type: GET_BY_ORDER_ID,
            id: id,
        });
    }

    return (
        <div className="bg-gray-50 p-5">
            <DataTable
                title="Danh sách hóa đơn"
                columns={columns}
                data={orders}
                pagination
                actions={
                    <div className="bg-green-500 text-3xl px-5 py-2 rounded-xl select-none cursor-pointer text-white hover:bg-green-400 duration-300">
                        <span>Thêm chương</span>
                    </div>
                } />
        </div>
    )
};

export default OrderList;