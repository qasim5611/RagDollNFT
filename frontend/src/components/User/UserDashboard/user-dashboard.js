import Welcome from './welcome-page/welcome';
import Box from "@mui/material/Box";
import Card from './cards/card';
import Activity from './activity/activity';

export default () => {
    return <Box sx={{
        background: '#F5F6FA',
    }} >
        <Welcome />
        <Card />
        <Activity />
    </Box>
}