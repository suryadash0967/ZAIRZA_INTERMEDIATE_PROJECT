import './SignUp.css'

export default function SignUp() {
  return (
    <>
      <div className="signup-wrapper flex items-center justify-center w-full min-h-screen bg-cover bg-center">
        <div className="bg-gray-800 p-10  rounded-lg shadow-lg z-50">
          <h2 className="text-white text-3xl font-bold mb-10 text-center">
            Welcome !
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-5 rounded-full border border-white bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="you@yourmail.com"
                className="w-full p-5 rounded-full border border-white bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            </div>
            <div className="mb-10">
              <input
                type="password"
                placeholder="Password"
                className=" w-96 p-5 rounded-full border border-white bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-8  bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Sign Up &gt;
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
