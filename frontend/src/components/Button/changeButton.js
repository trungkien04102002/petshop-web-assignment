import React from 'react';
import { changeUserInfo } from '../../api/userApi';
const ChangeButton = ({data,state,setState}) => {
    
    return (
        <>
        {(state)?<button onClick={()=>{setState(!state)}} className="w-fit h-fit rounded-2xl border px-4 py-1 boder-1 border-gray-300 text-gray-500 hover:border-gray-800">Chỉnh sửa</button>
        :<div className="flex flex-row gap-2">
            <button onClick={async()=>{ await changeUserInfo(localStorage.getItem('user'),data); console.log(data)
                setState(!state)}} className="rounded-2xl border px-4 py-1 boder-1 border-orange-400 text-orange-400 hover:border-orange-600">Lưu</button>
            <button onClick={()=>{setState(!state)}} className="rounded-2xl border px-4 py-1 boder-1 border-gray-300 text-gray-500 hover:border-gray-800">Hủy</button>
        </div>}
        </>
    );
}

export default ChangeButton;
