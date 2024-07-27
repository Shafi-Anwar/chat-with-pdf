import { Button } from "@/components/ui/button"
import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
    {
        name:"Store your PDF documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon: GlobeIcon,
        id:1
    },

    {
        name:"Store your PDF documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon: BrainCogIcon,
        id:2
    },


    {
        name:"Store your PDF documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon: EyeIcon,
        id:3
    },


    {
        name:"Store your PDF documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon: MonitorSmartphoneIcon,
        id:4
    },
    {
        name:"Store your PDF documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon: ZapIcon,
        id:5
    },
    {
        name:"Store your PDF documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon: ServerCogIcon,
        id:6
    },
]

export default function Home() {
    return(
        <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-green-500">
            <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow">
                <div className="flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-green-900">Your interaction Document Companion</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform your PDF's into Interactive Conversations</p>
                        <p>Introducing {" "}
                            <span className="font-bold text-green-600">Chat with your PDF</span>
                            <br />Chat
                            <br />
                            Upload the document, and our chatbot will answer questions, summarize content, and anwers all your Questions. Ideal for everyone
                           <span className="text-green-600">Chat with your pdf</span> {" "}
                           turns static information into {" "}
                           <span className="font-bold">dynamic conversations </span>
                           enhancing productivity 10x fold effectively
                        </p>
                    </div>
                    <Button asChild className="mt-10">
                        <Link href="/dashboard">Get started</Link>
                    </Button>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <Image
                        src="https://i.imgur.com/VciRSTI.jpeg"
                        width={2432}
                        height={1442}
                        alt="App screenshot"
                        className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        />
                        <div aria-hidden='true' className="relative">
                            <div className="absolute bottom-0 inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grids-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <feature.icon 
                                    aria-hidden="true"
                                    className="absolute left-1 top-1 h-5 w-5 text-green-600"
                                    />
                                </dt>
                                <dd>
                                    {feature.description}
                                </dd>
                            </div>
                        )) }
                        </dl>
                </div>
            </div>
        </main>
    )
}

