import { templateVersion } from "./version.js";

(async () => {
    const {
        initShowTable,
        initCreate,
        initTableWithFooter
    } = await import(
        `../bin/table/v2/commands/table/template/${templateVersion}/entry.js`
    );

    window.KSTableVersion = "v2.2.6";

    window.KSTable = {};

    window.KSTable.initShowTable = initShowTable;
    window.KSTable.initCreate = initCreate;
    window.KSTable.initTableWithFooter = initTableWithFooter;
})();