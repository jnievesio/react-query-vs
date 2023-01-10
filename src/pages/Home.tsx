import { useNavigate } from "react-router-dom";
import { useLogoutMutate } from "../hooks/auth";

//import { useGetUserQuery } from "../hooks/bids";
export default function Home() {
    const navigate = useNavigate();
    //const { data, isLoading, error } = useGetUserQuery();
    const { mutate: logout, isLoading } = useLogoutMutate();

    return (
        <div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md dark:text-white">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 text-center">
                    <h3>Bienvenido</h3>
                    <button
                        className={` ${
                            isLoading && "disabled"
                        } bg-gray-300 dark:bg-white h-[50px] w-[100px] rounded hover:bg-gray-200`}
                        onClick={() => {
                            logout();
                            navigate("/auth");
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
