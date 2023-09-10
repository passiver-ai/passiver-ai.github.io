<script>
  // import HookDetail from '../../components/HookDetail.svelte';
  // import BlogTeaser from '../../components/BlogTeaser.svelte';
  // import Clock from '../../components/Clock.svelte';
  export let data, helpers, settings;

  // add permalinks to the hook list so we can link to the posts.
  const hooks = data.hookInterface.map((hook) => ({
    ...hook,
    link: helpers.permalinks.hooks({ slug: hook.hook.toLocaleLowerCase() }),
  }));
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Blog" />
  <link href="{settings.origin}/" rel="canonical" />
</svelte:head>

<div>
  <h1>Blog</h1>
</div>
