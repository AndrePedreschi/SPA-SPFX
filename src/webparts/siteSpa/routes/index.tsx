//import * as React from 'react';
//Esse tipo de import do react é desnecessário e antigo, para corrigir a necessidade dele:
/* 
no arquivo tsconfig.json
{
	"compilerOptions": {
		...
		"jsx": "react-jsx"
		...
	},
} */

import { ReactElement, useEffect } from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import { CommitsConfiguration } from "../screens/CommitsConfiguration";
import { Home } from "../screens/Home";
import { LintConfiguration } from "../screens/LintConfiguration";
import { Login } from "../screens/Login";
import { Logoff } from "../screens/Logoff";
import { NewUser } from "../screens/NewUser";
import { NotFound } from "../screens/NotFound";
import { Products } from "../screens/Products";
import { ProductOverview } from "../screens/Products/ProductOverview";
import { StartNewProject } from "../screens/StartNewProject";
import { UnecessaryCss } from "../screens/UnecessaryCss";
import { ISiteSpaWebPartProps } from "../SiteSpaWebPart";
import { useZustandStore } from "../store";

export function App({
  //productsList,
  userList,
  context,
}: ISiteSpaWebPartProps): ReactElement {
  const { updateContext, updateUserList, updateSP } = useZustandStore();

  useEffect(() => {
    updateContext(context);
    updateSP();
    updateUserList(userList);
  }, [context, userList, updateContext, updateUserList, updateSP]);

  /* {loading && <Loader />} */
  return (
    <div>
      <HashRouter>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/start" component={StartNewProject} />
          <Route path="/lint" component={LintConfiguration} />
          <Route path="/commits" component={CommitsConfiguration} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/login" component={Login} />
          <Route path="/logoff" component={Logoff} />
          {/* usamos esse tipo de escrita quando precisamos passar algum dado por props para o componente que vai ser renderizado na rota */}
          <Route
            path="/produtos"
            component={() => <ProtectedRoute component={Products} />}
          />
          <Route
            path="/produto/:id"
            component={() => <ProtectedRoute component={ProductOverview} />}
          />
          <Route path="/css" component={UnecessaryCss} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}
