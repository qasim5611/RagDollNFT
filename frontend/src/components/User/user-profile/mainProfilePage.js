import Profile_part from "./profile/profile_part"
import Box from '@mui/material/Box';
import UserAccount from "./account/userAccount";
import User_security from "./security/user_security";
import UserProfileActivity from "./activity/userProfileActivity";
export default () => {
    return <Box sx={{
        background: '#F5F6FA',

    }}>
        <Profile_part />
        <UserAccount />
        <User_security />
        <UserProfileActivity />
    </Box>
}