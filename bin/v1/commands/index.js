import { locateSource } from "./core/steps/locateSource.js";
import { locateDestination } from "./core/steps/locateDestination.js";

import { createProject } from "./core/steps/createProject.js";
import { announce } from "./core/steps/announce.js";

import resolveFolderName from "./core/steps/resolveFolderName.js";
import checks from "./core/steps/checks.js";

export default ({
    folderName = "",
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = true
}) => {
    if (showLog) {
        console.log(`Resolving folder name..., folderName : ${folderName}`);
    };

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (showLog) {
        console.log(`\n[1] Running checks..., resolvedFolderName : ${resolvedFolderName}`);
    };

    const fromChecks = checks({
        inFolderName: resolvedFolderName,
        toPath,
        inShowLog: showLog
    });

    if (fromChecks) return false;

    if (showLog) {
        console.log("Locating source...");
    }

    const source = locateSource({
        showLog
    });

    if (showLog) {
        console.log(`source found : ${source}`);
    };

    if (showLog) {
        console.log("Locating destination...");
    };

    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        showLog
    });

    if (showLog) {
        console.log(`Destination is : ${destination}`);
    };

    if (showLog) {
        console.log("Creating project...");
    }

    createProject({
        source,
        destination,
        showLog
    });

    if (inAnnounce) {

        if (showLog) {
            console.log("Announcing...");
        }

        announce({
            inResolvedFolderName: resolvedFolderName,
            showLog
        });
    }
};