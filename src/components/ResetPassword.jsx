import { useState } from "react";
import Instance from "../Instances/Instance";
import { useParams } from "react-router";

function ResetPassword(){
    const { token } = useParams();
    let [password , setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState("");

    let handleResetSubmit = async (e) =>{
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert("Passwords do not match")
        }
        try{
            const res = await Instance.post(`/resetpassword/${token}`,{
                password,
                token
            })
            if(res){
                alert(res.data.message);
            }
            setPassword('');
            setConfirmPassword('');
        }catch(err){
            alert("Token Expired");
        }
    }
    return(
        <>
        <div className="bg-white md:px-[60px] px-[30px] py-[45px] xl:w-2/6 lg:w-2/4 md:w-3/4 mx-[25px] md:mx-auto m-auto shadow-lg md:mt-[150px] mt-[60px] rounded-[10px] text-[#54276c]">
            <h1 className="font-bold text-[18px] text-center mb-[15px]">Reset Password</h1>
            <form onSubmit={handleResetSubmit} >
                <label htmlFor="pwd" className="text-[15px] font-semibold text-left">Password</label>
                <input 
                    type="password"
                    id="pwd"
                    className="mb-[20px] text-[15px] font-semibold border border border-[#54276c] px-[16px] py-[15px] rounded-[4px] focus:border-[#54276c] focus:outline-none mt-[10px] h-[40px] w-full"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    
                ></input><br></br>
                <label htmlFor="confirmpwd" className="text-[15px] font-semibold text-left">Confirm Password</label>
                <input 
                    type="password"
                    id="confirmpwd"
                    className="text-[15px] font-semibold border border border-[#54276c] px-[16px] py-[15px] rounded-[4px] focus:border-[#54276c] focus:outline-none mt-[10px] h-[40px] w-full"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    
                ></input><br></br>
                <button type="submit"  className="text-center bg-[#54276c] py-[10px] text-white text-[16px] font-semibold w-full mt-[25px] rounded-[4px] cursor-pointer">Reset Password</button>
            </form>
        </div>
        </>
    )
}
export default ResetPassword;