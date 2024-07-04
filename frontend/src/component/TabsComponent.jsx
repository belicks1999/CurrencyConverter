import ConverterForm from './ConverterForm';
import TransferHistory from './TransferHistory';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const TabsComponent = () => {
    const [selectedTab, setSelectedTab] = useState(0); // State to manage the selected tab index

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

     // Function to handle tab change
    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            minHeight="100vh"
            bgcolor="gray"
            
            
        >
            <Paper 
                elevation={3} 
                sx={{ width: '900px', height: '600px', display: 'flex', flexDirection: 'column' }}
            >
                <Tabs 
                    value={selectedTab} 
                    onChange={handleTabChange}
                    centered
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Transfer" />
                    <Tab label="History" />
                </Tabs>
                <Box sx={{ flexGrow: 1, overflow: 'auto',width:'800'}}>
                    {selectedTab === 0 && <ConverterForm />}
                    {selectedTab === 1 && <TransferHistory isActiveTab={true} />}
                </Box>
            </Paper>
        </Box>
    );
};

export default TabsComponent;
