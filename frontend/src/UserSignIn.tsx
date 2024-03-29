import { Link } from 'react-router-dom';

function UserSignIn() {
  return (
    <div className="bg-white   h-screen flex justify-center items-center">
      <form className="bg-slate-200 w-full max-w-sm mx-auto rounded-lg shadow-md p-6">
        <label htmlFor="email" className="font-bold mb-2">
          Email:
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <label htmlFor="password" className="font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="lname"
          name="lname"
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <br />
       
        <br />
        <Link to="/userpage" className="text-center text-blue-500 ">
          Login to User Page
        </Link>
      </form>
    </div>
  );
}

export default UserSignIn;
