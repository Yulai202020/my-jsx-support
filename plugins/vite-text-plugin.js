import fs from "fs";

function escapeSpecialChars(str) {
    return str
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/`/g, '\\`');
}

export default () => {
    const name = "vite:txt_convertor"

    return {
        name: name,
        transform(src, id) {
            if (/\.txt$/.test(id)) {
                var fileContent = fs.readFileSync(id, 'utf8');
                fileContent = escapeSpecialChars(fileContent);

                return {
                    code: `export default "${fileContent}"`
                }
            }
        }
    };
}