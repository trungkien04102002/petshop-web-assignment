import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../Header/adminHeader";
import { cate } from "../../../../data/data";

function UpdateCategory () {
    const navigate=useNavigate();
    const {cateID} = useParams();
    const id=cateID;
    let res = cate.find( ({ cateID }) => cateID === parseInt(id));

    return (
       <>
        <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
            <AdminHeader/>

            <div className="flex justify-center items-center h-screen w-full">
                <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                    <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update category</h1>
                    <form action="/" method="post">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_name">Category Name</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="cate_name" id="cate_name" defaultValue={res.cateName}></input>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_id">Category ID</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="cate_id" id="cate_id" defaultValue={res.cateID}/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Category Image Link</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" defaultValue={res.image}/>
                        </div>
                        <div className="flex">

                        <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Update</button>
                        <button className="block bg-red-400 hover:bg-red-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Remove</button>
                        </div>

                    </form>
                    <div className="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer" type="submit"
                    onClick={()=>{navigate('/admin/cate')}}>Back to Category</div>
                </div>
                
            </div>
            
        </div>
        
     
       </>
    );
}

export default UpdateCategory;
