import { Price } from "@cale-app/sdk";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(price: Price) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: price.currency,
	});
	return formatter.format(Number(price.amount));
}
