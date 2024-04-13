"use client"
import { queryClient } from "@/service/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export default function Providers(props: {children: ReactNode}){
  return(
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
  )
}