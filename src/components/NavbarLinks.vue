<template>
  <ClientOnly>
    <div class="hidden md:block">
      <div class="ml-10 flex items-baseline">
        <g-link
          v-for="edge in $static.navbarLinks.edges"
          :key="edge.node.id"
          :to="edge.node.path"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
          {{ edge.node.title }}
        </g-link>
      </div>
    </div>
  </ClientOnly>
</template>

<static-query>
  query {
    navbarLinks: allNavbarLinks {
      edges {
        node {
          id
          path
          title
          inMenu
        }
      }
    }
  }
</static-query>
