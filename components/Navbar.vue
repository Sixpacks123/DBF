<template>
  <div class="container mx-auto">
    <nav class="flex flex-wrap items-center justify-between w-full text-lg text-gray-700 bg-white">
      <div>
        <a href="#">
          ICI le LOGO
        </a>
      </div>
      <a href="#">
        <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </a>
      <div class="hidden w-full md:flex md:items-center md:w-auto " id="menu">
        <ul
            class="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
        >
          <li>
            <a class="md:p-4 py-2 block " href="#"
            >Domicile</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block " href="#"
            >Bibliothèque</a
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
    </nav>
  </div>
</template>