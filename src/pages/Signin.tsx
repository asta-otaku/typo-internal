import logo from "../assets/authlogo.svg";

function Signin() {
  return (
    <div className="bg-[#F5F5F5] w-screen h-screen flex justify-center items-center p-4">
      <div className="max-w-xs flex flex-col items-center w-full">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <form className="mt-5 flex flex-col w-full gap-3">
          <label className="text-[#667085] text-sm">
            Enter the correct details
          </label>
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2.5 bg-transparent outline-none w-full rounded-md placeholder:text-[#667085] text-[#667085] border border-solid border-[#D0D5DD]"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 px-3 py-2.5 bg-transparent outline-none w-full rounded-md placeholder:text-[#667085] text-[#667085] border border-solid border-[#D0D5DD]"
          />
          <a
            href="/forgot-password"
            className="self-end text-[#667085] text-sm"
          >
            Forgot Password?
          </a>
          <button className="bg-primary mt-5 rounded-md py-2.5 text-white">
            Sign In
          </button>
          <p className="text-center text-[#667085] text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Create Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
