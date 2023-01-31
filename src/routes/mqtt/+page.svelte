<script>
	import { Card } from 'flowbite-svelte';

	let sensor = {
		temp: 25.6,
		ldr: 68
	};

	import * as mqtt from 'mqtt/dist/mqtt';
	const clientId = 'mqttjs_' + Math.random().toString(8);
	const host = 'ws://broker.hivemq.com:8000/mqtt';
	const options = {
		keepalive: 30,
		clientId: clientId
	};

	import { onMount } from 'svelte';
	onMount(() => {
		console.log('connecting mqtt client');
		const client = mqtt.connect(host, options);

		client.on('error', function (err) {
			console.log(err);
			client.end();
		});

		client.on('connect', function () {
			console.log('client connected:' + clientId);
			client.subscribe('/manalab/dht22/', { qos: 0 });
		});

		client.on('message', function (topic, message, packet) {
			console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic);
			const payload = {
				ldr: message.toString().split(',')[0],
				temp: message.toString().split(',')[1]
			};
			sensor.temp = payload.temp;
			sensor.ldr = payload.ldr;
		});

		client.on('close', function () {
			console.log(clientId + ' disconnected');
		});
	});
</script>
<div class="flex flex-row mt-5 text-xl">
	<h1>KidBright Sensors</h1>
</div>
<div class="flex flex-row">
	<div class="basis-1/3 p-5">
		<Card href="/cards">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
				Temperature
			</h5>
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">
				{sensor.temp}
			</h2>
		</Card>
	</div>
	<div class="basis-1/3 p-5">
		<Card href="/cards">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">LDR</h5>
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">
				{sensor.ldr}
			</h2>
		</Card>
	</div>
</div>
