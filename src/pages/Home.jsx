import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
	useEffect(() => {
		document.title = "Retiishia | Home";
	}, []);

	return <HeroSection />;
};
