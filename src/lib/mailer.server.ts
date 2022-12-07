import { MailtrapClient } from "mailtrap";


const TOKEN = import.meta.env.VITE_SMTP_PASS;
const ENDPOINT = "https://send.api.mailtrap.io/";


export const emailSender = {
    email: "web-shop.contact@ochuko.me",
    name: "Web Shop Contact",
};
export const recipients = [
    {
        email: "oghenochuko.oke@edu.prakticum.fi",
    }
];

export const emailClient = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });