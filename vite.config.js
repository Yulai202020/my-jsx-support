import Inspect from "vite-plugin-inspect";
import text_plugin from "./plugins/vite-text-plugin";
import csv_plugin from "./plugins/vite-csv-plugin";
import sql_plugin from "./plugins/vite-sql-plugin";

export default {
    esbuild: {
        jsxFactory: 'create',
        jsxFragment: "createFragment",
        jsxInject: ''
    },

    plugins: [
        csv_plugin(), text_plugin(), sql_plugin(), Inspect()
    ],

    envPrefix: "VITE_",
};