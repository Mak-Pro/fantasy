import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <>
      <h2>Sign In</h2>
      <Link to="/reset">Reset Password</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </>
  );
};
