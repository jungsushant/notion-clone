'use client'

import { ReactNode } from "react"
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_COVEX_URL as string);


export const ConvexClientProvider = ({children}:{children:ReactNode;}=>{
    return(
        <ClerkProvider publishableKey="pk_test_...">
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
    )
})