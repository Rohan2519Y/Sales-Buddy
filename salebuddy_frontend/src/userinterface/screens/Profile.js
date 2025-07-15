import OTPComponent from "../components/user/OTPComponent";
import ProfilePage from "../components/user/ProfilePage";
import UserLogin from "../components/user/UserLogin";
import { useState } from "react";

export default function Profile() {
    return (<>
        <div style={{ width: '100%', height: '100%' }}>
            <div>
                <ProfilePage  />
            </div>
        </div>
    </>)
}