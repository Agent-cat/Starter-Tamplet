import { Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const AppRoutes = ({ onLogin }) => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn onLogin={onLogin} />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default AppRoutes; 