import { Box } from "@mui/material";
import Header from "../Header";

function Layout({ children }) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' 
        }}
      >
        <Header />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            overflow: 'auto',
            marginTop: '64px'  // This margin-top is typically the height of the AppBar. Adjust as needed.
          }}
        >
          {children}
        </Box>
      </Box>
    );
  }
  

  export default Layout;