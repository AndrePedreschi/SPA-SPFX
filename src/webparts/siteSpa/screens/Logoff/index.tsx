import { useEffect } from "react";

import { PnPClientStorage } from "@pnp/common";
import { useHistory } from "react-router-dom";
const pnpStorage = new PnPClientStorage();

export function Logoff(): JSX.Element | null {
  const history = useHistory();

  useEffect(() => {
    pnpStorage.local.delete("PnP_UserInfo");
    history.push("/");
  }, [history]);

  return null;
}
