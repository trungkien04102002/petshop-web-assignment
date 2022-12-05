import { useNavigate } from "react-router-dom";
import AdminHeader from "../../../Header/adminHeader";

function AddCategory () {
    const navigate=useNavigate();

    return (
        <>
            <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
            <AdminHeader/>

            <div class="flex justify-center items-center h-screen w-full">
                <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                    <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Creat category</h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="cate_name">Category Name</label>
                            <input class="border py-2 px-3 text-grey-800" type="text" name="cate_name" id="cate_name" ></input>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="cate_id">Category ID</label>
                            <input class="border py-2 px-3 text-grey-800" type="text" name="cate_id" id="cate_id" />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="cate_img">Category Image Link</label>
                            <input class="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" />
                        </div>
                        <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Creat</button>
                    </form>
                    <div class="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer" type="submit"
                    onClick={()=>{navigate('/admin/cate')}}>Back to Category</div>
                </div>
                
            </div>
            
        </div>
        </>
    );
}

export default AddCategory;
