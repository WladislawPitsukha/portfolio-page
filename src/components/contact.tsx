function ContactSect() {
    return (
        <section className="flex flex-col max-w-lg mx-auto p-5 rounded-lg shadow-md">
        <article className="">

        </article>
        <form className="space-y-4">
            <div className="flex">
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="firstName">
                        First Name
                    </label>
                </div>
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                    />
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="lastName">
                        Last Name
                    </label>
                </div>
            </div>
            <div className="flex">
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                    />
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="phone">
                        Phone
                    </label>
                </div>
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="email">
                        Email
                    </label>
                </div>
            </div>
            <div className="flex">
                <div>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service"
                    >
                        <option>Web Design</option>
                        <option>Web Applications</option>
                        <option>Mobile Web Applications</option>
                    </select>
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="service">
                        Choose a Service
                    </label>
                </div>
                <div>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows={4}
                        placeholder="Enter your message"
                    ></textarea>
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="message">
                        Message
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Send
            </button>
            </div>
        </form>
        </section>
    );
}

export default ContactSect;