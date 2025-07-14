import OTPComponent from "../components/user/OTPComponent";
import ProfilePage from "../components/user/ProfilePage";
import UserLogin from "../components/user/UserLogin";
import { useState } from "react";

export default function Profile() {
    const [login,setLogin]=useState(true)
    const [showOTP, setShowOTP] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [number, setNumber] = useState('')

    const handleOTP = () => {
        setShowOTP(true);
        setLogin(false)
    };
    const handleOTPClose = () => {
        setShowOTP(false)
        if(showProfile==false){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    }
    const handleProfile = () => {
        setShowProfile(true)
        setShowOTP(false)
    }
    return (<>
        <div style={{ width: '100%', height: '100%' }}>
            <div>
                {login && <UserLogin handleOTP={handleOTP} handleOTPClose={handleOTPClose} setNumber={setNumber} number={number}/>}
            </div>
            <div>
                {showOTP && <OTPComponent handleProfile={handleProfile} handleOTPClose={handleOTPClose} number={number} />}
            </div>
            <div>
                {showProfile && <ProfilePage number={number}/>}
            </div>
        </div>
    </>)
}