import { Route, Switch } from "wouter";
import Index from "./pages/index";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route component={Index} />
    </Switch>
  );
}
