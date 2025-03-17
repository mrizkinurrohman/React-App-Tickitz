import logo from "../../assets/svg/logo.svg";
import fb from "../../assets/svg/fb.svg";
import google from "../../assets/svg/google.svg";
import eye from "../../assets/svg/eye.svg";

function Login() {
    return (
        <>
            <main className="bg-[url(/bg.png)] h-screen max-sm:bg-cover flex justify-center">
                <div className="flex flex-col justify-center p-10 md:w-lg">
                    <section className="flex justify-center">
                        <img src={logo} alt="Tickitz" width={200} />
                    </section>
                    <section className="bg-white flex flex-col p-6 rounded-2xl gap-3">
                        <div className="steps">
                            <h1>Welcome Back👋</h1>
                            <p>
                                Sign in with your data that you entered during
                                your registration
                            </p>
                        </div>
                        <form action="" className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className="border-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <div className="flex border-1 border-gray-400 rounded-sm justify-between">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter You Password"
                                        className="border-none outline-none "
                                    />
                                    <img
                                        src={eye}
                                        alt="eye"
                                        className="flex px-2"
                                    />
                                </div>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <p className="flex justify-end">
                            Forgot your password?
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-full h-[1px] bg-gray-400"></div>
                            <p>Or</p>
                            <div className="w-full h-[1px] bg-gray-400"></div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href=""
                                className="w-full bg-white shadow-2xl flex justify-center p-3 gap-2 rounded-sm hover:sky-blue-200"
                            >
                                <img src={google} alt="google" />
                                <p>Google</p>
                            </a>
                            <a
                                href=""
                                className="w-full bg-white shadow-2xl flex justify-center p-3 gap-2 rounded-sm hover:sky-blue-200"
                            >
                                <img src={fb} alt="facebook" />
                                <p>Facebook</p>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Login;
