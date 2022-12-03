import PageContainer from "~/components/page-container";

export default function Contact() {
    return <PageContainer>
        <header class="mt-10 border-b-2 border-b-foreground">
            <h1 class="text-4xl">Contact</h1>
            <p class="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repellat, ut, rerum cupiditate odio officia recusandae adipisci, consequuntur quasi ducimus ipsam corrupti omnis.</p>
        </header>
        <main>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="block p-6 rounded-lg shadow-lg bg-foreground max-w-md my-5">
                    <form>
                        <div class="mb-6">
                            <label for="name" class="sr-only">name</label>
                            <input type="text"
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label for="email" class="sr-only">email</label>
                            <input type="email"
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="email"
                                placeholder="Email"
                                required />
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="sr-only">subject</label>
                            <input type="text"
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="subject"
                                placeholder="Subject"
                                required />
                        </div>
                        <div class="mb-6">
                            <label for="message" class="sr-only">Message (Optional)</label>
                            <textarea
                                class="block w-full px-3 py-1.5 text-base font-normal placeholder:text-foreground-3 text-foreground bg-background-2 border-foreground-2 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-foreground focus:bg-background focus:border-background-2 focus:outline-none"
                                id="message"
                                rows="3"
                                placeholder="Message (Optional)"
                            ></textarea>
                        </div>
                        <div class="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                class=" --appearance-none-- h-4 w-4 border border-primary rounded-sm bg-foreground checked:bg-background checked:border-background focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="send-copy" checked />
                            <label class="form-check-label inline-block text-background" for="send-copy">Send me a copy of this message</label>
                        </div>
                        <button
                            type="submit"
                            class="w-full px-6 py-2.5 bg-background text-foreground font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background-2 hover:shadow-lg focus:bg-background-2 focus:shadow-lg focus:outline-none focus:ring-0 active::bg-background-1 active:shadow-lg transition duration-150 ease-in-out"
                        >Send</button>
                    </form>
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