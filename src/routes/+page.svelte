<script>
	import { Card } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	export let data;
	console.log(data.province);
</script>

<h1 class="text-2xl">Welcome to the Thailand Covid-19 Data Dashboard.</h1>
<p class="text-sm">
	Here, you will find the most up-to-date statistics and information on the current situation of the
	pandemic in Thailand. Our data is sourced from the Ministry of Public Health and is updated on a
	daily basis. On our dashboard, you can view the number of confirmed cases, recovered cases, and
	deaths in Thailand. Additionally, you can view information on testing and vaccination efforts, as
	well as a breakdown of cases by province. We hope that this dashboard will provide you with
	valuable information to help you stay informed and stay safe during the pandemic. Please note that
	all data and statistics presented on this website are for informational purposes only and should
	not be used for decision-making without consulting with appropriate medical and public health
	experts.
</p>

<div class="flex flex-row mt-5 p-5">
	<div class="basis-1/3 p-5">
		<Card href="/cards">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">New cases</h5>
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">
				{data.daily.new_case.toLocaleString('th-TH')}
			</h2>
		</Card>
	</div>
	<div class="basis-1/3 p-5">
		<Card href="/cards">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
				Total cases
			</h5>
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">
				{data.daily.total_case.toLocaleString('th-TH')}
			</h2>
		</Card>
	</div>
	<div class="basis-1/3 p-5">
		<Card href="/cards">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
				New deaths
			</h5>
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">
				{data.daily.new_death.toLocaleString('th-TH')}
			</h2>
		</Card>
	</div>
	<div class="basis-1/4 p-5">
		<Card href="/cards">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
				Total deaths
			</h5>
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white">
				{data.daily.total_death.toLocaleString('th-TH')}
			</h2>
		</Card>
	</div>
</div>

<div class="mt-5">
	<Table class="text-center">
		<TableHead>
			<TableHeadCell class="text-left">Province</TableHeadCell>
			<TableHeadCell>New cases</TableHeadCell>
			<TableHeadCell>Total cases</TableHeadCell>
			<TableHeadCell>Total deaths</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each data.province as province}
				<TableBodyRow>
					<TableBodyCell class="thai text-left">{province.province}</TableBodyCell>
					<TableBodyCell>{province.new_case.toLocaleString('th-TH')}</TableBodyCell>
					<TableBodyCell>{province.total_case.toLocaleString('th-TH')}</TableBodyCell>
					<TableBodyCell>{province.total_death.toLocaleString('th-TH')}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
