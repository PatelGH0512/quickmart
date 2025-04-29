import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Importing a spinner icon

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for form submission

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const { data } = await axios.post("/api/seller/login", {
        email,
        password,
      });

      if (data.success) {
        setIsSeller(true);
        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller, navigate]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center justify-center text-sm text-gray-600 bg-gray-100"
      >
        <div className="flex flex-col gap-6 m-auto items-center p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 bg-white">
          <p className="text-2xl font-medium m-auto text-primary">
            <span className="text-primary">Seller</span> Login
          </p>

          {/* Email Input */}
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 rounded w-full p-3 mt-2 outline-primary"
              required
            />
          </div>

          {/* Password Input */}
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="border border-gray-200 rounded w-full p-3 mt-2 outline-primary"
              required
            />
          </div>

          {/* Submit Button with Loading Spinner */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-primary text-white w-full py-2 rounded-md cursor-pointer ${
              loading && "opacity-50"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
