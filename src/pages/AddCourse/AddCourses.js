import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { AiOutlineClear, AiOutlineMinus } from "react-icons/ai";
import style from "./AddCourse.module.scss";

const AddCourse = () => {

  const cx = classNames.bind(style);

  const [benefits, setBenefits] = useState([""]);

  const handleAddBenefitInput = () => {
    setBenefits([...benefits, ""]);
  };

  const handleRemoveBenefitIinput = (index) => {
    let newBenefits = [...benefits];
    newBenefits.splice(index, 1);
    setBenefits(newBenefits); 
  };

  const handleOnChangeBenefitInput = (value, index) => {
    let newBenefits = [...benefits];
    newBenefits[index] = value;
    setBenefits(newBenefits); 
  };

  useEffect(() => {
    console.log(benefits);
  }, [benefits]);

  return (
    <div className="bg-gray-50 w-full h-full p-5">
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
                placeholder="Tên khóa học" />
            </div>
            <div className="flex w-full">
              <div className="w-[40%] mr-2 mt-4">
                <span><strong>Giá</strong></span>
                <input
                  type="text"
                  id="price"
                  className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl"
                  placeholder="Giá" />
              </div>
              <div className="w-[60%] ml-2 mt-4">
                <span><strong>Thể loại</strong></span>
                <select name="category" id="category" className="border border-neutral-300 px-4 py-2 w-[100%] block outline-none h-[35px] rounded-xl">
                  <option value="1">Lập trình</option>
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
                    className="border border-neutral-300 px-4 py-2 w-[100%] h-full block outline-none rounded-xl" />
                </div>
                <div className="w-[60%] h-[20vh] border border-neutral-300 rounded-xl ml-2">
                  {/* Them anh sau */}
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
                        value={benefit}
                        placeholder={index + 1 + "."}
                        onChange={(event) => handleOnChangeBenefitInput(event.target.value,index)}/>
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
            placeholder="Nhập mô tả..." />
        </div>
        <div>
          <input
            type="submit"
            className="bg-gradient-to-t from-blue-800 to-blue-600 px-8 py-2 rounded-xl float-right font-bold cursor-pointer"
            value="Lưu khóa học" />
        </div>
      </form>
    </div>
  );

};

export default AddCourse;
