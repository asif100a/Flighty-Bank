import { FcMoneyTransfer } from "react-icons/fc";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";

const UserRoute = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid gap-12 mt-10 grid-cols-2 lg:flex">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <GiPayMoney className="text-2xl" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Send Money</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <GiReceiveMoney className="text-2xl" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Cash Out</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <FcMoneyTransfer className="text-2xl" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Cash In</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <IoDocumentTextOutline className="text-2xl" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Transaction History</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRoute;