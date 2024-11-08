import { PnPClientStorage } from "@pnp/common";
import { useHistory, useLocation } from "react-router-dom";
const pnpStorage = new PnPClientStorage();

interface ProtectedRouteProps {
	component: React.ComponentType;
}

export const ProtectedRoute = ({ component: Component }: ProtectedRouteProps): JSX.Element | null => {
	const location = useLocation();
	const history = useHistory();
	const storage = pnpStorage.local.get("PnP_UserInfo");
	let user = null;

	if (storage) {
		user = storage;
	}

	const isAuthenticated = !!user?.Name && !!user?.Email;

	if (isAuthenticated) {
		return <Component />;
	} else {
		history.push({
			pathname: "/logoff",
			state: { from: location },
		});
		return null;
	}
};
