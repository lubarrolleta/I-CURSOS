import { marked } from "marked";
import { Show, createEffect, createSignal } from "solid-js";

function MarkdownRenderer(props) {
  const [markdown, setMarkdown] = createSignal(props.content || "");
  marked.setOptions({
    breaks: true, // Para saltos de línea automáticos
    gfm: true,    // GitHub Flavored Markdown
    sanitize: true, // Si quieres permitir HTML en el Markdown
  });
  createEffect(() => {
    setMarkdown(props.content);
  });

  return (
    <Show when={markdown()}>
        <div class={props.clase} innerHTML={marked(markdown())}></div>

    </Show>
  );
}

export default MarkdownRenderer;