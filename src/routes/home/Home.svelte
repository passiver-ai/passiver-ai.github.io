<script>
  // import HookDetail from '../../components/HookDetail.svelte';
  // import BlogTeaser from '../../components/BlogTeaser.svelte';
  // import Clock from '../../components/Clock.svelte';
  import Time from "svelte-time";

  export let data, helpers, settings;

  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({
  //   ...hook,
  //   link: helpers.permalinks.hooks({ slug: hook.hook.toLocaleLowerCase() }),
  // }));
</script>

<svelte:head>
  <title>Pages Network</title>
  <meta name="description" content="Pages" />
<!--  <link href="{settings.origin}/" rel="canonical" />-->
</svelte:head>


<div class="mx-auto max-w-2xl lg:max-w-5xl">
  <div class="text-2xl">
    Latest Articles
  </div>
  <div class="mt-16 sm:mt-20">
    <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="flex max-w-3xl flex-col space-y-16">

        {#each data.post as post, index}
          <article class="md:grid md:grid-cols-4 md:gap-4 relative">
            <div>
              <div class="bg-cover bg-center h-32 relative z-10" style="background-image: url('{post.firstImageUrl}')"></div>
            </div>
            <div class="md:col-span-3 group relative flex flex-col items-start">
              <div class="flex flex-row w-full justify-between">
                <div class="text-base text-semibold text-gray-800">
                  <a href="/@{post.blogName}">
                    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span class="relative z-10">@{ post.blogName }</span>
                  </a>
                </div>
                <time class="relative z-10 mb-1 items-center text-sm text-zinc-400 dark:text-zinc-500" datetime="{post.updatedAt}">
                  <Time timestamp="{post.updatedAt}" format="MMMM D, YYYY"></Time>
                </time>
              </div>
              <div class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href="/@{post.blogName}/{post.slug}">
                  <span class="absolute -inset-x-4 inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <h2 class="relative z-10">{post.title}</h2>
                </a>
              </div>
              <div class="w-full overflow-hidden h-20">
                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-clip">
                  {post.metaDescription}
                </p>
              </div>
<!--              <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">-->
<!--                Read article-->
<!--                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">-->
<!--                  <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>-->
<!--                </svg>-->
<!--              </div>-->
            </div>
<!--            <time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime="{post.updatedAt}">-->
<!--                <span class="text-base text-semibold text-gray-800 pr-2">-->
<!--                  <a href="/@{post.blogName}">-->
<!--                    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>-->
<!--                    <span class="relative z-10">@{ post.blogName }</span>-->
<!--                  </a>-->
<!--                </span>-->
<!--              <Time timestamp="{post.updatedAt}" format="dddd @ h:mm A"></Time>-->
<!--              <Time timestamp="{post.updatedAt}" format="MMMM D, YYYY"></Time>-->
<!--            </time>-->
          </article>
        {/each}

      </div>
    </div>
  </div>
</div>
