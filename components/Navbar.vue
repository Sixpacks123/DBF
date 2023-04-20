<template>
  <div class="w-full sticky top-0 z-30 block opacity-100 bg-white">
    <nav class="ml-36 mr-36 border-gray-200">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <img  class="w-20" src="/img/Logo.png">
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul
            class="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
        >
          <li>
            <NuxtLink class="md:p-4 py-2 block " to="/"
            >Domicile</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="md:p-4 py-2 block " to="/bibliotheque"
            >Bibliothèque</NuxtLink
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block " href="#"
            >Fréquentation</a
            >
          </li>
          <li>
            <div class="md:p-4 py-2 block">
              <BaseButton title="Mirage" />
            </div>

          </li>
        </ul>
      </div>
      </div>
    </nav>
  </div>

</template>