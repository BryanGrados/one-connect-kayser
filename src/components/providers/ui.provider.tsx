"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import ThemeHandler from "../theme-handler";

const UIProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<Toaster />
				<ThemeHandler />
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
};

export default UIProvider;
