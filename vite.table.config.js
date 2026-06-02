export default {
    build: {
        lib: {
            entry: "src/table.js",
            name: "KSTable",
            formats: ["umd"],
            fileName: () => "kstable.js",
        },
        outDir: "Public/v6",
        emptyOutDir: false
    }
};