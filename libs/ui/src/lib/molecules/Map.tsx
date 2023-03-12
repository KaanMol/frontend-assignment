import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { Card, Title } from '../atoms';
import { Button } from '../button';

export function Map({ title, position, lockMap = false }: { lockMap?: boolean, position: [number, number] }) {
	return <Card>
		<Title>{title}</Title>
		<MapContainer className="h-96" zoomControl={!lockMap} center={position as LatLngExpression} zoom={13} scrollWheelZoom={true}>
			<CenterMap position={position} lock={lockMap} />
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position as LatLngExpression} />
			<Control prepend position='topright'>
				<Button text="Lock" />
			</Control>
		</MapContainer>
	</Card>;
}

function CenterMap({ position, lock }: { position: [number, number], lock: boolean }) {
	const map = useMap();

	useEffect(() => {
		if (lock === true) {
			map.setView(position);

			// Disable all movement options when marker is locked in center
			map.dragging.disable();
			map.touchZoom.disable();
			map.doubleClickZoom.disable();
			map.scrollWheelZoom.disable();
			map.boxZoom.disable();
			map.keyboard.disable();
			return;
		}

		// Enable all movement options when marker is not locked
		map.dragging.enable();
		map.touchZoom.enable();
		map.doubleClickZoom.enable();
		map.scrollWheelZoom.enable();
		map.boxZoom.enable();
		map.keyboard.enable();

	}, [position, lock]);

	return null;
}