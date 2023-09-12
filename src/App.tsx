import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeSection from "./Components/Home/HomeSection";
import { Box } from "@mui/material";

export const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeSection />}/>
          
          <Route path="*" element={<Navigate to='/home' />}/>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}