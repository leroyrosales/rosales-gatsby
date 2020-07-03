import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"

const Contact = () => {
    
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
		}
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://getform.io/f/7476ff97-040e-4736-855f-c4b79865abb9",
			data: new FormData(form)
		})
			.then(r => {
				handleServerResponse(true, "Thanks!", form);
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};
	return (
	
		<section className="py-10">
			<div className="custom-container w-full px-4 lg:px-0">
				<h3>Contact me</h3>
			</div>
			<div className="custom-container w-full md:w-1/3 px-4 lg:px-0">
				<form onSubmit={handleOnSubmit} className="px-8 pb-8 mb-4">
				<div className="mb-5">
						<label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
						<input type="text" name="name" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" id="name" placeholder="Enter your name" required="required"/>
				</div>
				<div className="mb-5">
						<label for="email" required="required" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
						<input type="email" name="email" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" id="email" aria-describedby="label" placeholder="Enter email"/>
				</div> 
				<div className="mb-5">
						<label for="message" required="required" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
						<textarea type="email" name="email" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" id="message" aria-describedby="label" placeholder="Your message"/>
				</div> 
				<button type="submit" className="bg-green-500 text-white hover:bg-white hover:text-green-500 p-3 mt-10 mb-3 border rounded"  disabled={serverState.submitting}>
						Submit
				</button>
				{serverState.status && (
						<p className={!serverState.status.ok ? "errorMsg" : ""}>
						{serverState.status.msg}
						</p>
				)}
				</form>
		</div>
		</section>  
		
	);
};

export default Contact;