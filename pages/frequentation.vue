<template>
  <div class="h-screen w-full py-20 flex flex-row">
    <div class="basis-1/2">
      <div>
        <h1 class="xl:text-7xl md:text-6xl sm:text-5xl font-title font-medium tracking-normal ">Un projet ?</h1>
        <h1 class="xl:text-7xl md:text-6xl sm:text-5xl font-title font-medium tracking-normal ">Une idée ?</h1>
      </div>
      <div>
        <hr>
        <BaseText
            text="Nous mettons un point d’honneur à être un studio proche de nos clients. N’hésitez pas à nous envoyer vos projets même si ces derniers ne sont pas encore tout
            à fait établi. À bientôt chez DBF !"/>
      </div>
    </div>
    <div class="basis-1/2">
      <div class="bg-gray p-5 rounded-xl">
        <div class="relative flex flex-col justify-center  overflow-hidden">
            <form class="mt-6">
              <div class="relative mb-8">
                <input id="nom" name="nom" type="text"
                       class="w-full h-10 text-gray-900 bg-gray placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-600"
                       placeholder=" " />
                <label for="nom"
                       class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nom
                </label>
              </div>
              <div class="relative mb-8">
                <input id="email" name="email" type="text"
                       class="w-full h-10 text-gray-900 bg-gray placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-600"
                       placeholder=" " />
                <label for="email"
                       class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                  Mail
                  </label>
              </div>
              <div class="relative mb-8">
                <input id="sujet" name="sujet" type="text"
                       class="w-full h-10 text-gray-900 bg-gray placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-600"
                       placeholder=" " />
                <label for="sujet"
                       class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Sujet
                </label>
              </div>
              <div class="relative mb-8">
                <input id="message" name="message" type="textarea"
                       class="w-full h-10 text-gray-900 bg-gray placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-600"
                       placeholder=" " />
                <label for="message"
                       class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">message
                </label>
              </div>

            </form>
          </div>
          </div>
      </div>
    </div>
</template>