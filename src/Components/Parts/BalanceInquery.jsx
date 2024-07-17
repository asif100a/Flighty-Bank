import { GiMoneyStack } from 'react-icons/gi';

const BalanceInquery = () => {
    return (
        <div className='mt-12'>
            <div className="flex flex-col items-center justify-center text-center w-fit h-fit p-2 mx-auto border-2 border-pink-500 rounded-full">
                <span className="p-6 text-pink-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <GiMoneyStack className="text-4xl" />
                </span>
            </div>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white text-center">Tap to see balance</h2>
        </div>
    );
};

export default BalanceInquery;