function scanVirusRecursive(node) {

    let infectedFiles = [];
    if (node.type === "file") {

        if (node.name.endsWith(".exe")) {
            infectedFiles.push(node.name);
        }
        return infectedFiles;
    }
    if (!node.children || node.children.length === 0) {
        return infectedFiles;
    }
    for (const child of node.children) {

        let resultFromChild = scanVirusRecursive(child);

        infectedFiles.push(...resultFromChild);
    }

    return infectedFiles;
}
