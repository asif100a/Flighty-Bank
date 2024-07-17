const Registration = () => {
    

    return (
        <section>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#fbf7f9] rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-24" src="/favicon.png" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Provide your name"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="mobile_number">Mobile Number</label>
                        <input
                            type="number"
                            id="mobile_number"
                            name="mobile_number"
                            placeholder="Provide mobile number"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">5-digit PIN</label>
                        <input
                            type="number"
                            id="PIN"
                            name="PIN"
                            placeholder="Provide 5 digit PIN"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Provide your email address"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mt-6">
                        <input type="submit" value={'Sign In'} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;