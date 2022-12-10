import DataTable from "react-data-table-component";
import "./Courses.module.scss";

const Courses = () => {

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id
    },
    {
      name: "Tên khóa học",
      selector: (row) => row.title
    },
    {
      name: "Giá",
      selector: (row) => row.price
    }
  ];

  const data = [
    {
      id: "1",
      title: "Lập trình",
      price: "1000"
    },
  ];

  const customizeTableStyles = {
    headCell: {
      style: {
        background: "black"
      }
    }
  };

  return (
    <div className="bg-gray-50 w-full h-full p-5 relative z-[-1]">
      <DataTable
        title="Danh sách khóa học"
        columns={columns}
        data={data}
        pagination/>
    </div>
  );
};

export default Courses;