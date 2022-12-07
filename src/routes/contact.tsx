
import { createServerAction$ } from "solid-start/server";
import PageContainer from "~/components/page-container";
import { recipients, emailClient, emailSender } from "~/lib/mailer.server";


const sleep = (t: number) => new Promise(resolve => setTimeout(resolve, t))

export default function Contact() {
    const [enrolling, { Form }] = createServerAction$(async (formData: FormData) => new Promise(async (resolve, reject) => {
        let data = {
            name: (formData.get("name")),
            email: (formData.get("email")),
            subject: (formData.get("subject")),
            message: (formData.get("message")),
            sendCopy: formData.get("send-copy")
        }

        if (!(typeof data.name === "string")) return reject("Name missing.");
        if (!(typeof data.email === "string")) return reject("Email missing.");
        if (!(typeof data.subject === "string")) return reject("Subject missing.");
        if (data.message && typeof data.message !== "string") return reject("Message invalid");

        try {


            // let sent = await emailClient.send({
            //     from: emailSender,
            //     to: recipients,
            //     bcc: [{ email: data.email }],
            //     subject: data.subject,
            //     text: `
            //         ${data.email}

            //         _______________________________________________
            //         ${data.message || "No message."}
            //     `
            // });

            await sleep(2440);

            reject("Message Sent")

        } catch (error) {
            reject("Failed sending email.")

        }
    }));


    return <PageContainer>
        <header class="mt-10 border-b-2 border-b-foreground">
            <h1 class="text-4xl">Contact</h1>
            <p class="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repellat, ut, rerum cupiditate odio officia recusandae adipisci, consequuntur quasi ducimus ipsam corrupti omnis.</p>
        </header>
        <main>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="block p-6 rounded-lg shadow-lg bg-foreground max-w-md my-5">
                    <Form>
                        <div class="mb-6">
                            <label for="name" class="sr-only">name</label>
                            <input type="text"
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label for="email" class="sr-only">email</label>
                            <input type="email"
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required />
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="sr-only">subject</label>
                            <input type="text"
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                required />
                        </div>
                        <div class="mb-6">
                            <label for="message" class="sr-only">Message (Optional)</label>
                            <textarea
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="message"
                                name="message"
                                rows="3"
                                placeholder="Message (Optional)"
                            ></textarea>
                        </div>
                        <div class="text-center mb-6">
                            <input type="checkbox"
                                class=" --appearance-none-- h-4 w-4 border border-primary rounded-sm bg-foreground checked:bg-background checked:border-background focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="send-copy"
                                name="send-copy"
                            />
                            <label class="inline-block text-background" for="send-copy">Send me a copy of this message</label>
                        </div>
                        <button
                            type="submit"
                            class="w-full px-6 py-2.5 bg-background text-foreground font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background-2 hover:shadow-lg focus:bg-background-2 focus:shadow-lg focus:outline-none focus:ring-0 active::bg-background-1 active:shadow-lg transition duration-150 ease-in-out"
                        >Send</button>
                        {enrolling.pending && (
                            <div class="text-background flex justify-around mt-4">
                                <div class="animate-spin inline-block w-8 h-8 border-4 rounded-full border-background border-b-background-1 borde-l first-letter:-background-2" role="status"></div>
                                <div class="p-2">Sending Message ... </div>
                            </div>
                        )}
                        {enrolling.error && (
                            <div class="text-foreground bg-danger text-center mt-4">
                                {enrolling.error}
                            </div>
                        )}
                    </Form>
                </div>
                <div class="p-3">
                    <h1 class="text-3xl">Other contact information</h1>
                    <ul class=" list-none flex flex-col gap-3 px-4 my-5 text-xl">
                        <li>Email: <a href="mailto:contact@moyer-gar.com">contact@moyer-gar.com</a></li>
                        <li>Address: 304 Parker Gardens</li>
                        <li>Zip Code: 88863</li>
                        <li>City: Kellihaven</li>
                        <li>State: Minnesota</li>
                        <li>Country: USA</li>
                    </ul>
                </div>
            </div>
        </main>
    </PageContainer>
}