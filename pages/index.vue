<template>
  <div>
    <Hero
        title1="Studio expérimental &"
        title2="design graphique"
        text="DBF, c’est un studio qui est parti d’un projet sur les rêves (Voir Mirage). Et puis on s’est dit : « pourquoi pas faire un studio ? » alors on l’a fait. Venez découvrir DBF. La flèche juste ici là. Là." />
    <div class= "">
      <BaseTitle text="Petite Histoire" />
      <hr>
      <BasePagination number="1"/>
      <BaseText class="italic xl:w-1/2 text-base mb-15" text="Gauthier a fait une licence gagna à Angers. Guillaume a multiplié les expériences et formations à Nior, Bordeaux, Nantes et Metz. Mathilde, fantôme à LISAA Rennes depuis 5 ans. Ils n’étaient pas destinés à se rencontrer, et pourtant les voici tous trois réunis à travailler pour obtenir leur diplôme final : le Mastère. Travailler ensemble coule de source, c’est pourquoi le studio graphique est né. Né d’une idée saugrenue de prolonger l’expérience du rêve, avant de rencontrer Tristan Moir et de se rendre compte que l’idée n’est pas saugrenue du tout. Elle est même carrément révolutionnaire (mais là, on s’emballe peut-être un peu). Pourquoi donc s’arrêter à un seul projet, lorsque l’on peut créer Studio DBF ?"/>
      <BaseTitle text="Les valeurs du studio" />
      <hr>
      <BasePagination number="2"/>

      <div class="flex flex-row">
        <div>
          <BaseText text="Chaque sujet est décortiqué et analysé, afin de prendre du recul sur celui-ci et de choisir un axe innovant. Objectif de se démarquer en proposant une nouvelle approche, auquel on ne pense pas forcément."/>
        </div>
        <div>
          <BaseText text="On aime bousculer, cela ne fait aucun doute. Notre mantra est de toujours innover, proposer de nouvelles choses, et faire comprendre au client que le graphisme n’a aucune limite."/>
        </div>
        <div>
          <BaseText text="Terme artisanal. Le studio est composé de passionnées qui aiment toucher à tout. Mais surtout, qui ne délaissera jamais le print au profit du web. Ça, JAMAIS : le graphiste est avant tout un artisan."/>
        </div>

      </div>

      <BaseTitle text="L'équipe" />
      <hr>
      <BasePagination number="3"/>
      <hr>
      <BaseTitle text="Nos Projets" />
      <BasePagination number="4"/>
      <GridProjet/>
    </div>
  </div>
</template>
<script setup lang="ts">
import BasePagination from "~/components/Base/BasePagination.vue";
</script>