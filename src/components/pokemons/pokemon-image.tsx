import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  backImage?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 300, backImage = false }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
      track(() => id);

      imageLoaded.value = false;
    });

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <span>{imageLoaded ? "" : "Cargando"}</span>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            backImage ? "back/" : ""
          }${id}.png`}
          alt="pokemon"
          style={{ width: `${size}px` }}
          onLoad$={() => (imageLoaded.value = true)}
        />
      </div>
    );
  }
);
