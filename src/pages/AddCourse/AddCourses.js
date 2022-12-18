import classNames from "classnames/bind";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { storage } from "../../firebase";
import { GET_ALL_CATEGORIES, GET_CATEGORY_BY_ID } from "../../redux/types/categoryTypes";
import { ADD_COURSE } from "../../redux/types/courseTypes";
import style from "./AddCourse.module.scss";
import Loader from "../../components/Loader";
import { startLoading } from "../../redux/slices/loaderSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../../routes/routesConstant";

const AddCourse = () => {

  const loading = useSelector(state => state.loader.load);

  const cx = classNames.bind(style);

  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState(0);
  const [cover, setCover] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [decription, setDecription] = useState("");
  const [fileChoose, setFileChoose] = useState(null);

  const category = useSelector(state => state.category.category);

  const categories = useSelector(state => state.category.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_ALL_CATEGORIES });
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(startLoading());
    if (fileChoose == null) return;
    const imageRef = ref(storage, `images/${fileChoose.name + v4()}`)
    uploadBytes(imageRef, fileChoose)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then(url => {
            const course = {
              id: v4().split("-")[0],
              title: courseName,
              price: price,
              decription: decription,
              coverUrl: url,
              manufacture: new Date(),
              category: category
            }
            const newBenefits = [];
            benefits.forEach(b => {
              newBenefits.push({
                id: b.id,
                description: b.description,
                course: course
              });
            });
            dispatch({ type: ADD_COURSE, course: course, benefits: newBenefits });
            navigate(ROUTE_NAME.COURSES);
          });
      })
      .catch(error => console.log(error));
  }

  const handleAddBenefitInput = () => {
    setBenefits([...benefits, {
      id: v4().split("-")[0],
      description: ""
    }]);
  };

  const handleRemoveBenefitIinput = (index) => {
    let newBenefits = [...benefits];
    newBenefits.splice(index, 1);
    setBenefits(newBenefits);
  };

  const handleOnChangeBenefitInput = (value, index) => {
    let newBenefits = [...benefits];
    newBenefits[index] = {
      ...newBenefits[index],
      description: value
    };
    setBenefits(newBenefits);
  };

  const handleOnSelectCategory = (event) => {
    dispatch({ type: GET_CATEGORY_BY_ID, id: event.target.value });
  }

  return (
    <div className="bg-gray-50 w-full h-full p-5">
      {loading && <Loader />}
      <div className="text-center py-5">
        <span className="text-[25px] font-bold">Thêm khóa học</span>
      </div>
      <form className="w-full">
        <div className="flex w-full">
          <div className="grow bg-white p-5 mr-4 shadow-black rounded-xl border border-gray-200">
            <div>
              <span>
                <strong>Tên khóa học</strong>
              </span>
              <input
                type="text"
                id="title"
                className="border px-4 py-2 w-[100%] block outline-none border-neutral-300 rounded-xl"
                value={courseName}
                onChange={(event) => setCourseName(event.target.value)}
                placeholder="Tên khóa học" />
            </div>
            <div className="flex w-full">
              <div className="w-[40%] mr-2 mt-4">
                <span>
                  <strong>Giá</strong>
                </span>
                <input
                  type="number"
                  id="price"
                  className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="Giá" />
              </div>
              <div className="w-[60%] ml-2 mt-4">
                <span><strong>Thể loại</strong></span>
                <select name="category" id="category" className="border border-neutral-300 px-4 py-2 w-[100%] block outline-none h-[35px] rounded-xl" onChange={handleOnSelectCategory}>
                  <option value={null}>none</option>
                  {
                    categories.map(category => {
                      return <option key={category.id} value={category.id}>{category.category}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="mt-4">
              <span><strong>Ảnh bìa</strong></span>
              <div className="flex">
                <div className="w-[40%] h-[20vh] mr-2">
                  <input
                    type="file"
                    id="cover"
                    className="border border-neutral-300 px-4 py-2 w-[100%] h-full block outline-none rounded-xl"
                    onChange={(event) => {
                      setFileChoose(event.target.files[0]);
                    }} />
                </div>
                <div className="w-[60%] h-[20vh] border border-neutral-300 rounded-xl ml-2">
                  {
                    fileChoose != null &&
                    <img src={URL.createObjectURL(fileChoose)} className="h-full m-auto" />
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="grow bg-white p-5 mr-4 shadow-black rounded-xl border border-gray-200">
            <div className="flex justify-between mb-3">
              <span><strong>Lợi ích</strong></span>
              <div className="bg-gradient-to-t from-green-600 to-green-500 px-4 py rounded-xl select-none cursor-pointer" onClick={handleAddBenefitInput}>
                Thêm
              </div>
            </div>
            <div>
              {
                benefits.map((benefit, index) => {
                  return (
                    <div key={index} className="relative">
                      <input
                        type="text"
                        id={"benefit" + index}
                        className={cx("benefit-input") + " border border-neutral-300 px-4 py-2 w-[100%] block  outline-none rounded-xl mt-4 pr-14"}
                        value={benefit.description}
                        placeholder={index + 1 + "."}
                        onChange={(event) => handleOnChangeBenefitInput(event.target.value, index)} />
                      <div
                        onClick={() => handleRemoveBenefitIinput(index)}
                        className={cx("benefit-remove") + " absolute border rounded-xl border-gray-600 p-2 top-2 right-2 hover:border-gray-300 duration-300 cursor-pointer"}>
                        <AiOutlineMinus />
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="my-5">
          <span><strong>Mô tả</strong></span>
          <textarea
            className="block w-full resize-none outline-none p-5 rounded-xl border border-gray-200"
            rows={10}
            placeholder="Nhập mô tả..."
            value={decription}
            onChange={(event) => { setDecription(event.target.value) }} />
        </div>
        <div className="bg-gradient-to-t from-blue-800 to-blue-600 px-8 py-2 rounded-xl float-right font-bold cursor-pointer" onClick={handleSubmit}>
          <span>Lưu khóa học</span>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
