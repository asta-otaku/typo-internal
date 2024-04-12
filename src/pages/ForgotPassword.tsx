import { useNavigate } from "react-router-dom";
import logo from "../assets/authlogo.svg";
import { useState, useRef, ChangeEvent } from "react";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [otp, setOTP] = useState<string[]>(Array(6).fill(""));
  const inputs = Array(6)
    .fill(0)
    .map(() => useRef<HTMLInputElement>(null));

  const handleChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus on next input or previous if value is deleted
    if (value && index < 5) {
      inputs[index + 1].current?.focus();
    } else if (!value && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text/plain").trim().slice(0, 6);
    const newOTP = Array.from(pastedText.padEnd(6, " ").slice(0, 6));
    setOTP(newOTP);
    newOTP.forEach((char, index) => {
      if (char !== " ") {
        inputs[index].current!.value = char;
      }
    });
  };

  return (
    <div className="bg-[#F5F5F5] w-screen h-screen flex justify-center items-center p-4">
      <div className="max-w-xs flex flex-col items-center w-full">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        {
          {
            1: (
              <form className="mt-5 flex flex-col w-full gap-3">
                <h2 className="text-[#667085] font-semibold">Reset Password</h2>
                <label className="text-[#667085] text-sm">
                  Enter your email address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2.5 bg-transparent outline-none w-full rounded-md placeholder:text-[#667085] text-[#667085] border border-solid border-[#D0D5DD]"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setStep(2);
                  }}
                  className="bg-primary mt-5 rounded-md py-2.5 text-white"
                >
                  Continue
                </button>
                <p className="text-center text-[#667085] text-sm">
                  Already have an account?{" "}
                  <a href="/signin" className="text-primary">
                    Sign In
                  </a>
                </p>
              </form>
            ),
            2: (
              <form className="mt-5 flex flex-col w-full gap-3">
                <h2 className="text-[#667085] font-semibold">Reset Password</h2>
                <label className="text-[#667085] text-sm">
                  Enter OTP sent to your email address
                </label>
                <div className="flex items-center gap-3 justify between p-2 w-full">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      ref={inputs[index]}
                      className="w-8 h-8 text-center placeholder:text-[#667085] text-[#667085] bg-transparent outline-none rounded-md p-1 border border-[#667085] text-lg font-semibold"
                      type="text"
                      maxLength={1}
                      value={value}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange(index, e.target.value)
                      }
                      onPaste={handlePaste}
                    />
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/reset");
                  }}
                  className="bg-primary mt-5 rounded-md py-2.5 text-white"
                >
                  Continue
                </button>
                <p className="text-center text-[#667085] text-sm">
                  Already have an account?{" "}
                  <a href="/signin" className="text-primary">
                    Sign In
                  </a>
                </p>
              </form>
            ),
          }[step]
        }
      </div>
    </div>
  );
}

export default ForgotPassword;
