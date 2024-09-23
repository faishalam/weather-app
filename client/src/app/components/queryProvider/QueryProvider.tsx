"use client";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { WeatherProvider } from "@/app/providers/WeatherProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

export default function QueryProvider({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <WeatherProvider>
                    {children}
                </WeatherProvider>
            </ThemeProvider>
            <ToastContainer />
        </QueryClientProvider>
    );
}
