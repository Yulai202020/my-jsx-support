import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function get_data(db_path) {
    const db = await open({
        filename: db_path,
        driver: sqlite3.Database
    });

    async function fetchTables() {
        const list = [];
    
        // Get the list of tables
        const tables = await db.all("SELECT name FROM sqlite_master WHERE type='table'");
    
        // Fetch rows from each table
        for (const table of tables) {
            const rows = await db.all(`SELECT * FROM ${table.name}`);
            list.push({ [table.name]: rows });
        }
    
        return list;
    }

    try {
        const data = await fetchTables();
        return data;
    } catch (err) {
        console.error('Error:', err);
        return -1;
    }
}

export default () => {
    const name = "vite:sql";

    return {
        name: name,
        async transform(src, id) {
            if (/\.db$/.test(id)) {
                const data = await get_data(id);

                if (data === -1) {
                    throw new Error('Failed to get data from the database');
                }

                return {
                    code: `export default ${JSON.stringify(data)}`
                };
            }
        }
    };
}
