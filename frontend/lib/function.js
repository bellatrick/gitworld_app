import { CLIENT_BASE_URL } from "../utils/constants";

export const handleLoginWithGithub = () => {
	window.open(`${CLIENT_BASE_URL}/api/auth/github`, "_self");
};