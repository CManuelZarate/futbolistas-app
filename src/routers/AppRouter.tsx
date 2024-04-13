// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FutbolistaById } from '../components/FutbolistaById';
import { Table } from '../components/Table';
import { Sidebar } from '../components/Sidebar';

const AppRouter = () => {
  return (
    <Router>
      <div className="d-flex m-4 flex-wrap">
        <div className="col-12 col-md-3 p-2">
          <Sidebar/>
        </div>
        <div className="col-12 col-md-9 p-2">
          <Routes>
            <Route path="/list" element={<Table/>} />
            <Route path="/byId" element={<FutbolistaById/>} />
            <Route path="*" element={<Navigate to="/list" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;