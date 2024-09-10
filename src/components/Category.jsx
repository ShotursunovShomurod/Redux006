import React, { useState, useRef } from "react";
import {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../redux/api/category-api";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

const Category = () => {
  const [updateCategoryItem, setUpdateCategoryItem] = useState(null);
  const { isLoading, data } = useGetCategoryQuery();
  const [createCategory, { isLoading: createLoading }] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const genderSelectRef = useRef(null);

  const handleCreateCategory = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    createCategory(data)
      .unwrap()
      .then(() => {
        event.target.reset(); 
        genderSelectRef.current.value = ""; 
      });
  };

  const handleUpdateCategory = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    updateCategory({ id: updateCategoryItem.id, body: data })
      .unwrap()
      .then(() => setUpdateCategoryItem(null));
  };

  return (
    <div className="container flex flex-row gap-6">
      <div className="w-[400px] mt-3">
        <form
          className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-md fixed md:static top-6 w-full md:w-[400px] mx-auto"
          onSubmit={handleCreateCategory}
        >
          <h2 className="text-xl font-bold text-center text-gray-700">
            Create Category
          </h2>
          <input
            type="text"
            name="fname"
            required
            placeholder="First Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          <input
            type="text"
            required
            name="job"
            placeholder="Job Title"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          <select
            name="gender"
            required
            ref={genderSelectRef} // Attach the ref to the select element
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <textarea
            name="bio"
            required
            placeholder="Bio"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            rows="3"
          />
          <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
            {createLoading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>


      {updateCategoryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative">
            <h3 className="text-lg font-bold mb-4">Edit Category</h3>
            <form onSubmit={handleUpdateCategory}>
              <input
                defaultValue={updateCategoryItem.fname}
                type="text"
                name="fname"
                required
                className="px-4 py-2 mb-2 border border-gray-300 rounded-md w-full"
              />
              <input
                defaultValue={updateCategoryItem.lname}
                type="text"
                name="lname"
                required
                className="px-4 py-2 mb-2 border border-gray-300 rounded-md w-full"
              />
              <input
                defaultValue={updateCategoryItem.job}
                type="text"
                name="job"
                required
                className="px-4 py-2 mb-2 border border-gray-300 rounded-md w-full"
              />

              <select
                name="gender"
                required
                value={updateCategoryItem.gender}
                onChange={(e) =>
                  setUpdateCategoryItem({
                    ...updateCategoryItem,
                    gender: e.target.value,
                  })
                }
                className="px-4 py-2 mb-2 border border-gray-300 rounded-md w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <textarea
                required
                defaultValue={updateCategoryItem.bio}
                name="bio"
                className="px-4 py-2 mb-4 border border-gray-300 rounded-md w-full"
                rows="3"
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setUpdateCategoryItem(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {isLoading && <h3>Loading...</h3>}


      <div className="flex flex-wrap gap-4 my-3 justify-center">
        {data?.map((category) => (
          <div className={`${category.gender === "male" ? "bg-green-400" : "bg-pink-400"} w-full sm:w-[300px] rounded-[20px] py-[20px] px-[20px] flex flex-col gap-4 shadow-md`} key={category.id}>
            <img
              className="w-full h-[200px] object-contain rounded-md"
              src={category.gender === "male" ? boy : girl}
              alt={category.gender === "male" ? "Boy" : "Girl"}
            />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold">First Name:</span>
                <span>{category.fname}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Last Name:</span>
                <span>{category.lname}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Job:</span>
                <span>{category.job}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Gender:</span>
                <span>{category.gender}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Bio:</span>
                <span title={category.bio} className="text-wrap w-[100%] line-clamp-2">{category.bio}</span>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => deleteCategory(category.id)}
                className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => setUpdateCategoryItem(category)}
                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;