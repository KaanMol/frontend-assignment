import { BusStatisticsData } from "@front-end-assignment/ui";
import { t } from "i18next";
import { BusData } from "../types/busData";

export const toBusStatisticsData: (data: BusData) => BusStatisticsData = (data) => ({
	time: {
		title: t('general.time'),
		value: data.time.toLocaleTimeString(),
	},
	odometer: {
		title: t('general.odometer'),
		value: `${data.odo} km`,
	},
	energy: {
		title: t('general.energy'),
		value: `${data.energy} kW`,
	},
	speed: {
		title: t('general.speed'),
		value: data.speed,
		suffix: `km/h`,
	},
	charge: {
		title: t('general.state_of_charge'),
		value: data.soc,
		suffix: '%',
	},
})
