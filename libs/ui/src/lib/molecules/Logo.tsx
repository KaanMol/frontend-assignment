export function Logo({ height, width, fullLogo = true }: { fullLogo: boolean, height: number, width: number }) {
	const smallLogoSrc = 'https://play-lh.googleusercontent.com/VOUp4pC3EpNJEORZldKUCCOdd4rMAAtqCj6Pa2FawizKpIJ5NUDPiHAmtJeGM-eA07c';
	const fullLogoSrc = 'https://www.chargepoint.com/themes/chargepoint/logo.svg';
	return <img
		className={`h-${0} w-${0}`}
		src={fullLogo ? fullLogoSrc : smallLogoSrc}
		alt="ChargePoint"
	/>
}