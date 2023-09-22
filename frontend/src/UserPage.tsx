function UserInterface() {
  return (
    <div className="bg-white min-h-screen">
      {/* Ribbon */}
      <div className="bg-teal-950 py-2 px-4 text-white flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Interface</h1>
        <a href="/profile" className="text-white">
          User Profile
        </a>
      </div>

      {/* Dashboard */}
      <div className="p-4">
        <div className="flex items-center mb-4">
          {/* Week Buttons */}
          <div className="flex space-x-2">
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Monday
            </button>
            {/* Add the remaining days of the week buttons */}
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Tuesday
            </button>
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Wednesday
            </button>
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Thursday
            </button>
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Friday
            </button>
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Saturday
            </button>
            <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Sunday
            </button>
          </div>
        </div>
     <div className="grid grid-cols-2 gap-4">
        {/* Current */}
        <div className="bg-white rounded-lg p-4 text-left">
            <h2 className="text-3xl font-bold"> Current</h2>
            <p className="text-2xl font-bold">2°C</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>

        {/* Voltage */}
        <div className="bg-white rounded-lg p-4 text-left">
            <h2 className="text-3xl font-bold"> Voltage</h2>
            <p className="text-2xl font-bold">2°C</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
        </div>

        {/* Internal Temperature */}
        <div className="bg-white rounded-lg p-4 text-left">
            <h2 className="text-3xl font-bold">Internal Temperature</h2>
            <p className="text-2xl font-bold">25°C</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>

        {/* Ambient Temperature */}
        <div className="bg-white rounded-lg p-4 text-left">
            <h2 className="text-3xl font-bold"> Ambient Temperature</h2>
            <p className="text-2xl font-bold">2°C</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>
     </div>
        {/* Energy Consumption */}
        
        <div className="bg-white rounded-lg p-4 text-center">
            <h2 className="text- 3xl font-bold">Energy Consumption</h2>
            <p className="text-2xl font-bold">1kWh</p>
            <div className="mt-4">
              {/* Graph region */}
              <div className="bg-gray-200 h-40"></div>
            </div>
          </div>
        
        
      </div>
    </div>
  );
}

export default UserInterface;

