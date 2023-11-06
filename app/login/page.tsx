import LoginForm from "@/src/components/auth/login-form";
import { Divider, Link } from "@nextui-org/react";
import Image from "next/image";

const Login = () => {
	return (
		<main className="flex items-center justify-center h-screen p-unit-4">
			<section className="flex flex-col md:flex-row items-center justify-center w-full h-full sm:max-h-[600px] sm:max-w-[400px] sm:shadow-medium sm:rounded-medium md:max-w-[700px] lg:max-w-[900px] dark:sm:border-zinc-600 dark:sm:border-small">
				<section className="flex-1 h-full md:max-w-[300px] lg:max-w-[400px] sm:p-unit-4">
					<header className="flex flex-col items-center justify-center h-full">
						<div className="flex flex-col items-center justify-center w-full gap-4">
							<h1 className="text-2xl font-bold text-center lg:text-2xl md:text-xl">
								Bienvenido a
								<br />
								Kayser One Connect
							</h1>
							<p className="text-sm text-center md:text-tiny text-default-600">
								Kayser One Connect es una plataforma que permite enlazar
								multiples servicios en uno solo.
							</p>
						</div>
						<LoginForm />
						<div className="flex flex-col items-center justify-center w-full gap-2 mt-8">
							<p className="text-sm text-center text-default-600">
								¿Problemas para ingresar?
							</p>
							<Link
								href="#"
								underline="always"
								color="foreground"
								className="text-sm"
							>
								Click aquí
							</Link>
						</div>
					</header>
				</section>
				<Divider orientation="vertical" className="hidden md:block" />
				<article className="relative flex-1 hidden h-full md:flex bg-gradient-to-tr from-blue-500 to-blue-700 rounded-r-medium">
					<Image
						src={"/images/illustration-login.svg"}
						alt="Ilustración de una persona ingresando a un sistema"
						width={1080}
						height={1024}
						className="object-scale-down"
						priority
					/>
				</article>
			</section>
		</main>
	);
};

export default Login;
