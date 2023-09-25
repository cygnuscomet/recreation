import Navbar from "@/components/navbar";

import Image from "next/image";

import styles from './home.module.css'
import ButtonComponent from "@/components/buttonComponent";
import LearnMoreComponent from "@/components/learnMoreComponent";
import Footer from "@/components/footerComponent";

export default function Home() {
	return (
		<>
			<section className={`${styles.home0}`}>
				<Navbar />
				
				<div className='grid grid-cols-2 px-36 py-10 gap-4 place-items-center'>
					<div>
						<div className="flex gap-4">
							<Image src='/top-post-badge.svg' height='260' width='260' alt='' className=""/>
							<Image src='/top-post-badge-2.svg' height='260' width='260' alt='' className=""/>
						</div>
						<div className='mt-8 text-5xl font-bold bg-gradient-to-r from-black via-red-800 to-red-600 text-transparent bg-clip-text'>
							Boost your customer support productivity with ChatGPT-4
						</div>
						<div className='text-lg mt-4'>
							Smart chatbot based on the latest AI technology, that talks like a human, and creates CTA for your customers.
						</div>
						<div className="mt-10 font-bold text-lg">
							<ButtonComponent text="Free Trial"/>
						</div>
					</div>
					<div>
						<Image src='/h0p1.png' height='500' width='500' alt='' className=""/>
					</div>
				</div>
			</section>

			<div className="grid grid-cols-2 px-36 py-10 gap-4 place-items-center mt-2">
				<Image src='/h1p1.png' height='600' width='600' alt='' className=""/>
				<div>
					<div className="text-4xl font-bold">
						Replying to general and user-specific questions
					</div>
					<div className="text-lg mt-4">
						Our AI chatbot can handle both general inquiries and complex questions. To do this, it utilizes actions upon user requests to retrieve all relevant information about the user, including their support history, account details, and even banking information.
						<LearnMoreComponent />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 px-36 py-10 gap-8 place-items-center mt-2">
				<div>
					<div className="text-4xl font-bold">
						Adding Call to Action when needed
					</div>
					<div className="text-lg mt-4">
					You can set conditions under which requests will be transferred to a human agent, and set a Call to Action - for example, invite the user to visit the office or book a call.
					<LearnMoreComponent />
					</div>
				</div>
				<Image src='/h2p1.png' height='600' width='600' alt='' className=""/>
			</div>

			<section className={`${styles.home1} py-16`}>
				<div className="font-bold text-3xl flex items-center justify-center">
					Join now and elevate your business with AI
				</div>
				<div className="mt-2 flex items-center justify-center text-lg">
					Unlock Unlimited Potential with Our Free Trial
				</div>
				<div className="mt-6 flex items-center justify-center font-bold">
					<ButtonComponent text="Free Trial"/>
				</div>
			</section>

			<div className="grid grid-cols-2 px-36 py-10 gap-8 place-items-center mt-2">
				<Image src='/h3p1.png' height='600' width='600' alt='' className=""/>
				<div>
					<div className="text-4xl font-bold">
						Connecting with your data in a couple of clicks
					</div>
					<div className="text-lg mt-4">
					Our AI chatbot ioni easily trains with your company data. YOu may upload data to Knowledge Base via HTML, Text or by an individual URL upload option.
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 px-36 py-10 gap-8 place-items-center mt-2">
				<div>
					<div className="text-4xl font-bold">
						Multilingual support
					</div>
					<div className="text-lg mt-4">
						Grow your business without engaging multilingual customer support agents - our chatbot recognises 80+ languages and automatically translates questions and answers.
					</div>
				</div>
				<Image src='/h4p1.png' height='600' width='600' alt='' className=""/>
			</div>

			<div className="grid grid-cols-3 px-40 py-10 gap-2 place-items-center my-2">
				<div className="flex flex-col items-center">
					<div className="font-bold text-8xl bg-gradient-to-r from-black via-red-800 to-red-600 text-transparent bg-clip-text">
						92%
					</div>
					<div className="mt-2">
					Average response accuracy
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="font-bold text-8xl bg-gradient-to-r from-black via-red-800 to-red-600 text-transparent bg-clip-text">
						+88%
					</div>
					<div className="mt-2">
					Agent productivity
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="font-bold text-8xl bg-gradient-to-r from-black via-red-800 to-red-600 text-transparent bg-clip-text">
						3x
					</div>
					<div className="mt-2">
					Reduce resolution times for general questions
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center my-10">
				<div className="text-5xl font-bold">
					Features
				</div>
				<div className="text-lg mt-6">
					Automate customer service and bring its efficiency to a new level
				</div>	
			</div>

			<div className="grid grid-cols-2 grid-rows-3 gap-4 my-6 px-36">
					<div className="rounded bg-gray-100 p-10 h-64 flex flex-col justify-center">
						<Image src='/f1.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
							AI Assistant
						</div>
						<div className="text-lg mt-2">
							Get 'ready to send' draft or instruct AI briefly on what you want to say to get an extended answer.
						</div>
						<LearnMoreComponent />
					</div>
					<div className="rounded bg-gray-100 p-10 h-64 flex flex-col justify-center">
						<Image src='/f2.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
						AI Chatbot
						</div>
						<div className="text-lg mt-2">
						Automatically resolve typical customer inquiries with AI, just as human agents do.
						</div>
						<LearnMoreComponent />
					</div>
					<div className="rounded bg-gray-100 p-10 h-64 flex flex-col justify-center">
						<Image src='/f3.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
						AI Search
						</div>
						<div className="text-lg mt-2">
						Search that provides genuine results for any queries.
						</div>
						<LearnMoreComponent />
					</div>
					<div className="rounded bg-gray-100 p-10 h-64 flex flex-col justify-center">
						<Image src='/f4.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
						AI Widget Builder
						</div>
						<div className="text-lg mt-2">
						Create your personalized AI Chatbot Widget in a couple of clicks.
						</div>
						<LearnMoreComponent />
					</div>
					<div className="rounded bg-gray-100 p-10 h-64 flex flex-col justify-center">
						<Image src='/f5.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
						AI Conversation Analytics
						</div>
						<div className="text-lg mt-2">
						Improve CSAT score by analyzing AI conversations with customers.
						</div>
						<LearnMoreComponent />
					</div>
					<div className="rounded bg-gray-100 p-10 h-64 flex flex-col justify-center">
						<Image src='/f6.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
						Chatbot to Human
						</div>
						<div className="text-lg mt-2">
						Transfer your customer from AI chatbot to a human agent whenever needed.
						</div>
						<LearnMoreComponent />
					</div>
			</div>

			<section className={`${styles.home1} flex items-center justify-center gap-36 py-16 mt-20`}>
				<div className="font-bold text-4xl">
					Start your AI journey with us!
				</div>
				<div className="font-bold text-lg">
					<ButtonComponent text="Get Started"/>
				</div>
			</section>

			<div className="flex flex-col justify-center items-center my-16">
				<div className="flex flex-col justify-center items-center">
					<div className="font-bold text-5xl">
						How does ioni work?
					</div>
					<div className="text-lg my-6">
						Three easy steps to get started exploring Ioni
					</div>
				</div>
				<div className="grid grid-cols-3 px-40 py-2 gap-16 place-items-center my-2">
					<div className="flex flex-col items-center">
						<Image src='/w1.png' height='600' width='600' alt='' className=""/>
						<div className="font-bold text-3xl mt-10">
							1. Add Data
						</div>
						<div className="text-base mt-2 h-10">
						Add HTML and text pages to your Al database and start testing the chat.
						</div>
					</div>
					<div className="flex flex-col items-center">
						<Image src='/w2.png' height='600' width='600' alt='' className=""/>
						<div className="font-bold text-3xl mt-10">
							2. Create AI Assistant
						</div>
						<div className="text-base mt-2 h-10">
						Create and customize a personal chatbot that perfectly matches the brand voice and your business visual style.
						</div>
					</div>
					<div className="flex flex-col items-center">
						<Image src='/w3.png' height='600' width='600' alt='' className=""/>
						<div className="font-bold text-3xl mt-10">
							3. Analyze Conversations
						</div>
						<div className="text-base mt-2 h-10">
							Create and customize a personal chatbot that perfectly matches the brand voice and your business visual style.
						</div>
					</div>
				</div>
			</div>

			<div className="bg-gray-100 py-10">
				<div className="mx-32 my-24">
					<div className="text-5xl font-bold">
					Benefits
				</div>
					<div className="text-lg mt-6">
						Streamline your workflow with AI
					</div>	
				</div>

				<div className="grid grid-cols-2 grid-rows-2 gap-4 px-36">
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
								Immediate responses
							</div>
							<div className="text-lg mt-2">
							Bring your CSAT Scores to a new level,  resolving customer issues in the shortest possible time.
							</div>
						</div>
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Human-in-the-loop
							</div>
							<div className="text-lg mt-2">
							To ensure the quality of using AI generated text, you can always keep a human in the workflow to verify all answers before sending them.
							</div>
						</div>
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Self-learning
							</div>
							<div className="text-lg mt-2">
							The AI system is constantly learning and self-improving with each interaction. When an agent rejects the draft and provides feedback, the AI algorithm adapts and fine-tunes its search and suggestion capabilities.
							</div>
						</div>
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Human-level recognition
							</div>
							<div className="text-lg mt-2">
							AI recognizes customer inquiries at a human-level by analyzing the intent and meaning behind them. Accurate interpretation enables the AI system to provide the most pertinent solutions.
							</div>
						</div>
				</div>
			</div>

			<div className="bg-gray-800 py-10">
				<div className="flex items-center">
					<div className="mx-32 my-24">
						<div className="text-5xl text-white font-bold">
						Use cases
						</div>
						<div className="text-lg mt-6 text-white">
						Learn how ioni can drive your customer support
						</div>	
					</div>
					<div className="ml-96">
						<ButtonComponent text='Contact Sales' secondary={true} />
					</div>
				</div>

				<div className="grid grid-cols-2 grid-rows-2 gap-4 px-36">
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Replying for general non-specific questions
							</div>
							<div className="text-lg mt-2">
							Standard inquiries now can be answered in a matter of seconds. The quality of responses is even higher than that of human agents, as ioni uses the latest AI technology, and is not susceptible to the influence of human factors.
							</div>
						</div>
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Replying to user-specific questions
							</div>
							<div className="text-lg mt-2">
							For solving complex questions, this AI tool utilizes actions upon user request to retrieve all relevant information about the user, including their support history, account details, and even banking information.
							</div>
						</div>
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Replying for RAQs
							</div>
							<div className="text-lg mt-2">
							ioni is capable of answering even difficult questions if the necessary information is available in the documentation or if a ticket with a similar question has been created before. It performs auto-improvement of your AI database and easily finds context-related queries within it.
							</div>
						</div>
						<div className="rounded bg-white p-10 h-64 flex flex-col justify-center">
							<div className="font-bold text-2xl">
							Smooth newcomers onboarding
							</div>
							<div className="text-lg mt-2">
							Training new customer support agents always takes time, but with automation of many processes, new employees no longer need to memorize a vast amount of information and can be effectively productive from day one.
							</div>
						</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center my-16">
				<div className="flex flex-col justify-center items-center">
					<div className="font-bold text-5xl mb-16">
						See why people choose ioni
					</div>
				</div>
				<div className="grid grid-cols-2 px-40 py-2 gap-16 place-items-center my-2">
					<div className="rounded-xl bg-gray-100 p-10 h-72 flex flex-col justify-center">
						<Image src='/quote.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
						“ioni is an exceptional solution for customer support automation!.”
						</div>
						<div className="text-lg mt-2">
						The AI ticket assistant is truly impressive, efficiently resolving  our customer queries
						</div>
						<div className="flex flex-row items-center mt-4">
							<Image src="/why1.png" height='50' width='50' alt=''/>
							<div className="ml-2 flex flex-col">
								<div className="font-bold">
									Vitaly Romanchenko
								</div>
								<div>
									CEO in elai.io
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gray-100 p-10 h-72 flex flex-col justify-center rounded-xl">
						<Image src='/quote.svg' height='35' width='35' alt='' className="my-2"/>
						<div className="font-bold text-2xl">
							“The #1 AI assistant”
						</div>
						<div className="text-lg mt-2">
							“I have tried various tools to assist my customer support team, but nothing worked the way it should. However, using ChatGPT for message generation took Ioni to a whole new level!”
						</div>
						<div className="flex flex-row items-center mt-4">
							<Image src="/why2.jpg" height='50' width='50' alt=''/>
							<div className="ml-2 flex flex-col">
								<div className="font-bold">
									Vitaly Romanchenko
								</div>
								<div>
									CEO in elai.io
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />

		</>
	)
}
