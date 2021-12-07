import { writeFile, readFileSync } from 'fs';

const data = readFileSync('/Users/geofferykoranteng/Desktop/Projects/Node/server/db/books.json');

const booksDb = JSON.parse(data);

export const writeDb = (data) => {
    writeFile('/Users/geofferykoranteng/Desktop/Projects/Node/server/db/books.json', data, (err) => {
        if (err) throw err;
    });
}

export default booksDb;