import { useState } from "react";
import Instance from "../Instances/Instance";

function ForgetPassword(){
    let [email , setEmail] =useState('');

    let handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await Instance.post('/forgetpassword', {email});
            if(res){
                alert(res.data.message);
            }
            setEmail('');
            
        } catch (err) {
            alert("Something went wrong , Your Mail id was not registerd"); 
        }

    }
    return(
        <>
            <div className="bg-white md:px-[60px] px-[30px] py-[45px] xl:w-2/6 lg:w-2/4 md:w-3/4 mx-[25px] md:mx-auto m-auto shadow-lg md:mt-[150px] mt-[80px] rounded-[10px] text-[#54276c] text-center">
                <h1 className="font-bold text-[18px]">Forgot your password ?</h1>
                <p className="mt-[10px] mb-[30px] text-[14px] font-semibold">Enter your email to reset it</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        className="text-[15px] font-semibold border border border-[#54276c] px-[16px] py-[15px] rounded-[4px] focus:border-[#54276c] focus:outline-none mt-[10px] h-[40px] w-full"
                        placeholder="Enter Email here"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        
                    ></input><br></br>
                    <button type="submit"  className="text-center bg-[#54276c] py-[10px] text-white text-[16px] font-semibold w-full mt-[25px] rounded-[4px] cursor-pointer">Confirm</button>
                </form>
                
            </div>
        </>
    )
}

export default ForgetPassword;