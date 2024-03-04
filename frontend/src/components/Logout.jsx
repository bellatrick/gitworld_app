import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/authContext";
import { CLIENT_BASE_URL } from "../../utils/constants";


const Logout = () => {
	const { authUser, setAuthUser } = useAuthContext();

	const handleLogout = async () => {
		try {
			const res = await fetch(`${CLIENT_BASE_URL}/api/auth/logout`, { credentials: "include" });
			const data = await res.json();
			console.log(data);
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<>
			<img src={authUser?.avatarUrl} className='w-10 h-10 rounded-full border border-gray-800' />

			<div
				className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'
				onClick={handleLogout}
			>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout;