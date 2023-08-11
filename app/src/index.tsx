import { render } from 'preact';
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react"
import App from './App'
import { BrowserRouter, useNavigate } from "react-router-dom";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const pk = import.meta.env.VITE_CLERK_KEY;

const ClerkAndConvex = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={pk}
                  navigate={navigate}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <App></App>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )

}

const Root = () =>
  <BrowserRouter basename="/app">
    <ClerkAndConvex/>
  </BrowserRouter>

render(<Root />, document.getElementById('app'));
