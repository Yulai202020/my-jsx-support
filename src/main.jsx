import { create, createFragment } from "../paragme"; // important
import product from "./product.csv";
import data from "./file.txt";
import sql from "./db.db";

function main() {
    console.log(product)
    console.log(data)
    
    console.log(sql)
    
    return (
        <>
            <p>HI</p>
            <p>hellow</p>
            <div>
                <p>How are you</p>
                <p>Im ok</p>
            </div>
        </>
    );
}

export default main;