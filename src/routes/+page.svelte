<script>
	import Logo from '$lib/assets/img/avatar.png';

	let turtle = $state(false);
	function handleTurtle() {
		turtle = !turtle;
	}
</script>

<div class="pt-[30dvh] pb-[5dvh] flex place-content-center">
	<div class:animate-shake={turtle} class="max-w-fit flex flex-col items-center">
		<img class="my-1 size-40 rounded-full shadow-2xl dark:shadow-none" src={Logo} alt="Avatar" />
		<h1 class="my-1 text-xl sm:text-3xl font-medium">Junior DevOps Engineer</h1>
		<p class:animate-red={turtle} class="my-1 text-md sm:text-xl font-light">
			Website in the works.. <button onclick={handleTurtle}>🐢</button>
		</p>
		<a
			href="/cv"
			class="my-1 text-md sm:text-xl font-bold hover:text-lime-900 hover:dark:text-lime-700">CV</a
		>
	</div>
</div>
