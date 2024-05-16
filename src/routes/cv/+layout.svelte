<script>
	import Logo from '$lib/assets/img/avatar.png';
</script>

<div class="px-2 py-[10dvh] flex flex-col items-center sm:text-justify">
	<a class="origin-top-rigth hover:rotate-12 duration-200 ease-in-out transition" href="/">
		<img class="mb-6 size-40 rounded-full" src={Logo} alt="Avatar" />
	</a>
	<div
		class="prose prose-neutral dark:prose-invert md:prose-lg lg:prose-xl hover:prose-a:text-lime-900 hover:dark:prose-a:text-lime-700"
	>
		<slot />
	</div>
</div>
