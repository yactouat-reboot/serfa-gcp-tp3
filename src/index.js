import { writeTestTicket } from "./firebase";

// when my HTML page is full loaded, trigger that code
document.addEventListener('DOMContentLoaded', () => {
    writeTestTicket();
});