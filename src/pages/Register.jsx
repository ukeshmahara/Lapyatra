const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;