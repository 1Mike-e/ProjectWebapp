import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-950">
      <div className="bg-slate-100 py-4">
        <ul className="flex justify-center">
          <li className="mx-4">
            <Link to="/about" className="text-green-500 font-bold hover:text-blue-500">
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/contact" className="text-green-500 font-bold hover:text-blue-500">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-grow justify-center items-center flex-col">
        <h1 className="text-4xl text-white mt-12 mb-8 font-bold">Welcome! </h1>
        
        <h3 className="text-white text-center mb-10 font-bold">This is a web app interface that allows monitoring of refrigerating loads </h3>
        
        <div className="flex justify-center mb-8">
          <Link to="/operatorsignup" className="mr-6">
            <div className="flex items-center bg-green-500 hover:bg-blue-500 text-white py-2 px-4 rounded font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12h20" />
              </svg>
              Operator
            </div>
          </Link>
          <Link to="/usersignup">
            <div className="flex items-center bg-green-500 hover:bg-blue-500 text-white py-2 px-4 rounded font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12h20" />
              </svg>
              User
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default App;
