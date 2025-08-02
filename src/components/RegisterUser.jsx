import { useState } from "react";
import { Link } from "react-router";
import Instance from "../Instances/Instance";

function RegisterUser() {
    let [name , setname] = useState('');
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');

    let handleReSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await Instance.post('/register', {
                name,
                email,
                password
            });
            if(res){
                alert(res.data.message);
            }

            setname('');
            setEmail('');
            setPassword('');
            
        } catch (err) {
            const status = err?.response?.status;
            if (status === 400) {
                alert("User already exists");
            }else if (status === 500) {
                alert("Please enter a valid email address");
            }
            else{
                alert('Something went wrong , Registration failed'); 
            }
        }

    }
    return(
        <>
            <div className="bg-white md:px-[60px] px-[30px] py-[45px] xl:w-2/6 lg:w-2/4 md:w-3/4 mx-[25px] md:mx-auto m-auto shadow-lg md:mt-[100px] mt-[80px] rounded-[10px] text-[#54276c]">
                <h1 className="font-bold text-[18px] text-center mb-[20px]">Sign Up</h1>
                
                <form onSubmit={handleReSubmit}>
                    <label htmlFor="name" className="text-[15px] font-semibold text-left">Username</label>
                    <input 
                        type="text"
                        id="name"
                        className="mb-[10px] text-[15px] font-semibold border border border-[#54276c] px-[16px] py-[15px] rounded-[4px] focus:border-[#54276c] focus:outline-none mt-[10px] h-[40px] w-full"
                        required
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                        
                    ></input><br></br>
                    <label htmlFor="email" className="text-[15px] font-semibold text-left">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="mb-[10px] text-[15px] font-semibold border border border-[#54276c] px-[16px] py-[15px] rounded-[4px] focus:border-[#54276c] focus:outline-none mt-[10px] h-[40px] w-full"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        
                    ></input><br></br>
                    <label htmlFor="pwd" className="text-[15px] font-semibold text-left">Password</label>
                    <input 
                        type="password"
                        id="pwd"
                        className="text-[15px] font-semibold border border border-[#54276c] px-[16px] py-[15px] rounded-[4px] focus:border-[#54276c] focus:outline-none mt-[10px] h-[40px] w-full"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        minLength= {6}
                        
                    ></input><br></br>
                    
                    <button type="submit"  className="text-center bg-[#54276c] py-[10px] text-white text-[16px] font-semibold w-full mt-[25px] rounded-[4px] cursor-pointer">Sign Up</button>
                </form>
                <p className="mt-[10px] mt-[20px] text-[14px] font-semibold text-center">Already have an account ? <Link to='/login'>Sign In</Link> </p>
                
            </div>
        </>
    )

}

export default RegisterUser;