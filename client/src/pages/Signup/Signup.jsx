import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axios from "axios";
import { toast } from "react-toastify";
import API_URL from "../../utils/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // sign up api
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/signup`,
        { username: name, email, password },
        { withCredentials: true }
      );

      if (res.data.success === false) {
        setError(res.data.message);
        toast.error(res.data.message);
        return;
      }

      toast.success(res.data.message);

      setError("");

      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-28">
        <div className="py-10 bg-white border rounded w-96 px-7">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="pb-1 text-sm text-red-500">{error}</p>}

            <button type="submit" className="btn-primary">
              SIGN UP
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-[#2B85FF] underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
