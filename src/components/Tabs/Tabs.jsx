import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FullStack from '../Projects/FullStack';
import Android from '../Projects/Android';
import AI from '../Projects/A.I';
import Blog from '../Blogs/Blog';

export default function ProjectTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label=""variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    centered
                    sx={{
                      '.MuiTabs-flexContainer': {
                          justifyContent: 'center',
                      },
                      '@media (max-width: 600px)': {
                        '.MuiTabs-flexContainer': {
                            justifyContent: 'flex-start',
                        },
                      }
                    }}
                    >
                    <Tab value="1" label="Full Stack engineering" />
                    <Tab value="2" label="Android engineering" />
                    <Tab value="3" label="A.I engineering" />
                    <Tab value="4" label="Engineering Articles" />
                </TabList>
            </Box>

            <TabPanel value="1">
                <FullStack />
            </TabPanel>
            <TabPanel value="2">
                <Android />
            </TabPanel>
            <TabPanel value="3">
                <AI />
            </TabPanel>
            <TabPanel value="4">
                <Blog />
            </TabPanel>
      </TabContext>
    </Box>
  );
}
