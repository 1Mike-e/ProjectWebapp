import { useState } from 'react';
import { Link } from 'react-router-dom';

function OperatorSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form className="bg-slate-100 w-full max-w-sm mx-auto mt-16 rounded-lg shadow-md p-6">
        <label htmlFor="name" className="font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <label htmlFor="email" className="font-bold mb-2">
          Email:
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <label htmlFor="password" className="font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="lname"
          name="lname"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <input
          type="submit"
          value="Enter"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        />
        <Link to="/operatorpage">
        <h3 className="text-right mt-4 text-blue-500 font-bold underline">
          Login
        </h3>
      </Link>
      </form>
      <h5 className="text-center mt-4">
        Already have an account?{' '}
        <Link to="/operatorsignin" className="text-blue-500">
          Sign In
        </Link>
      </h5>
      <br />
      <hr />
      <br />
      
      
      <br />
    </>
  );
}

export default OperatorSignUp;
