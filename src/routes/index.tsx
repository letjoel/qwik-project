import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal<number>(1);
  const showBackImage = useSignal(false);

  const handleChange = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-6xl">HOLA</span>
      <span class="text-9xl">{pokemonId.value}</span>

      <PokemonImage id={pokemonId.value} backImage={showBackImage.value} />

      <div class="mt-2">
        <button onClick$={() => handleChange(-1)} class="btn btn-primary mr-2">
          Anterior
        </button>
        <button onClick$={() => handleChange(+1)} class="btn btn-primary mr-2 ">
          Siguiente
        </button>
        <button
          onClick$={() => (showBackImage.value = !showBackImage.value)}
          class="btn btn-primary "
        >
          Reverse
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Project",
  meta: [
    {
      name: "app",
      content: "Qwik site description",
    },
  ],
};
