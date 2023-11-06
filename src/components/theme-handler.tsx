"use client";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
	Desktop,
	Moon,
	PaintBrush,
	SunDim,
} from "@phosphor-icons/react/dist/ssr";
import { iconClasses } from "../utils/const";

const menuItems = [
	{
		key: "light",
		icon: <SunDim weight="fill" className={iconClasses} />,
		label: "Claro",
	},
	{
		key: "dark",
		icon: <Moon weight="fill" className={iconClasses} />,
		label: "Oscuro",
	},
	{
		key: "system",
		icon: <Desktop weight="fill" className={iconClasses} />,
		label: "Sistema",
	},
];

const ThemeHandler = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return;

	return (
		<Dropdown
			classNames={{
				content: "min-w-[100px]",
			}}
		>
			<DropdownTrigger>
				<Button
					variant="light"
					isIconOnly
					disableRipple
					className="fixed bottom-4 right-4 z-50"
				>
					<PaintBrush weight="fill" className={iconClasses} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				variant="flat"
				aria-label="Theme Switcher"
				onAction={(key) => setTheme(key as string)}
				disabledKeys={[theme as string]}
				items={menuItems}
			>
				{(item) => (
					<DropdownItem key={item.key} startContent={item.icon}>
						{item.label}
					</DropdownItem>
				)}
			</DropdownMenu>
		</Dropdown>
	);
};

export default ThemeHandler;
