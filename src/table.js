import { initShowTable, initCreate, initTableWithFooter }
    from "../bin/table/v3/commands/table/template/v10/entry.js";

(async () => {
    window.KSTableVersion = "v3.10";

    window.KSTable = {};

    window.KSTable.initShowTable = initShowTable;
    window.KSTable.initCreate = initCreate;
    window.KSTable.initTableWithFooter = initTableWithFooter;
})();