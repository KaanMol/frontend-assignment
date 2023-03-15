import { EventEmitter } from 'events';
import csvParse from 'csv-parse';
import fs from 'fs';
import { Writable } from 'stream';
import path from 'path';

export class Broadcaster extends EventEmitter {
	private broadcasting: boolean;

	constructor() {
		super();
		this.broadcasting = false;
	}

	start() {
		this.broadcasting = true;
		const broadcast = () => {
			const fileStream = fs.createReadStream(path.resolve(`${__dirname}/../../../src/meta/route.csv`));

			fileStream
				// Filestream piped to csvParse which accept nodejs readablestreams and parses each line to a JSON object
				.pipe(csvParse({ delimiter: ",", columns: true, cast: true }))
				// Then it is piped to a writable streams that will push it into nats
				.pipe(new Writable({
					objectMode: true,
					write: (obj, enc, cb) => {
						if (!this.broadcasting) {
							return cb();
						}

						// setTimeout in this case is there to emulate real life situation
						// data that came out of the vehicle came in with irregular interval
						// Hence the Math.random() on the second parameter
						setTimeout(() => {
							this.emit("data", obj);
							cb();
						}, Math.ceil(Math.random() * 150));
					}
				}))
				.once("finish", () => {
					console.log("Finished broadcasting");

					if (this.broadcasting) {
						console.log("Re-broadcast");
						return broadcast();
					}

					console.log("Stopped broadcast");
				});

		}
		broadcast();
	}

	end() {
		this.broadcasting = false;
	}
}
