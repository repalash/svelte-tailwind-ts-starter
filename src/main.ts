import App from './App.svelte';
import "../public/global.css";

const app = new App({
    target: document.body,
    props: {
        title: 'Svelte + Tailwind 2'
    }
});

export default app;

// recreate the whole app if an HMR update touches this module
let hot = (import.meta as any).hot;
if (hot) {
    hot.dispose(() => {
        app.$destroy()
    })
    hot.accept()
}
