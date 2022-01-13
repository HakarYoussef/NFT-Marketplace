import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { makeStyles } from '@mui/styles';

export default function UserProfileTab({ created, collected }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles({
    tabs: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#00b7be',
        height: 3,
      },
      '& .MuiTab-root.Mui-selected': {
        color: '#00b7be',
      },
    },
  });

  const classes = useStyles();

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginLeft: '75px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className={classes.tabs}
          >
            <Tab label="Created" value="1" />
            <Tab label="Collected" value="2" />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: '0', margin: ' 20px 0' }} value="1">
          {created}
        </TabPanel>
        <TabPanel sx={{ padding: '0', margin: ' 20px 0' }} value="2">
          {collected}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
