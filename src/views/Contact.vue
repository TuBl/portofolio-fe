<template>
	<form class="contact-form" @submit.prevent="sendEmail">
		<div class="subject" data-aos="slide-right" data-aos-duration="1000">
			<label>Subject</label>
			<input type="text" name="user_subject" v-model="subject" />
		</div>
		<div class="name" data-aos="slide-left" data-aos-duration="1000">
			<label>Name</label>
			<input type="text" name="user_name" v-model="name" />
		</div>
		<div class="email" data-aos="slide-right" data-aos-duration="1000">
			<label>Email</label>
			<input type="email" name="user_email" v-model="email" />
		</div>

		<div class="message" data-aos="slide-left" data-aos-duration="1000">
			<label>Message</label>
			<textarea name="message" v-model="message"></textarea>
		</div>

		<input
			type="submit"
			value="Send"
			class="btn"
			data-aos="flip-up"
			data-aos-duration="1000"
		/>
		<div
			class="result"
			:class="{ 'result--success': success, 'result--fail': fail }"
		>
			{{ result }}
		</div>
		<div
			class="btnx btnx1"
			data-aos="slide-down-left"
			data-aos-delay="250"
			data-aos-duration="1000"
		>
			<div class="insider">
				<router-link to="/" v-scroll-to="'#main'">Back to top</router-link>
			</div>
		</div>
	</form>
</template>

<script>
	import emailjs from "emailjs-com";

	export default {
		name: "Contact",
		data() {
			return {
				subject: "",
				name: "",
				email: "",
				message: "",
				result: "",
				success: false,
				fail: false,
			};
		},
		methods: {
			async sendEmail(e) {
				await emailjs
					.sendForm(
						"gmail",
						"template_a",
						e.target,
						"user_gkN4Q6d6mTihVG9tUYPhK"
					)
					.then(
						(result) => {
							console.log("SUCCESS!", result.status, result.text);
							this.result = "Thank you!";
							this.success = true;
						},
						(error) => {
							console.log("FAILED...", error);
							this.result = "Something went wrong!";
							this.fail = true;
						}
					)
					.then((this.subject = this.name = this.email = this.message = ""));
			},
		},
	};
</script>
<style lang="scss" scoped>
	label {
		color: #fffffc;
		font-size: 1em;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		position: absolute;
		top: -35px;
	}
	input {
		padding: 1.2em;
		font-size: 1em;
		width: 100%;
		border: none;
		box-shadow: 10px 10px 10px #586f7c;
		width: 100%;
	}
	textarea {
		padding: 1.2em;
		font-size: 1.5em;
		width: 100%;
		height: 250px;
		resize: none;
		border: none;
		box-shadow: 10px 10px 10px #586f7c;
	}
	.contact-form {
		height: 100vh;
		width: 100vw;
		padding: 5em;
		gap: 1.2em;
		position: relative;
		background: url("../assets/test.jpeg");
		background-size: cover;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		display: grid;
		text-align: justify;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 2fr 1fr;
		grid-template-areas:
			".  subject ."
			".  name    ."
			".  email   ."
			".  message ."
			".  btn     ."
			".  result     .";
		.subject {
			grid-area: subject;
			position: relative;
		}
		.name {
			grid-area: name;
			position: relative;
		}
		.email {
			grid-area: email;
			position: relative;
		}
		.message {
			grid-area: message;
			position: relative;
		}
		.btn {
			grid-area: btn;
			height: 50%;
			border-radius: 30px;
		}
		.btn:hover {
			transform: scale(0.98);
		}
		.result {
			grid-area: result;
			opacity: 0;
			font-size: 2em;
			color: #fffffc;
			text-align: center;
			width: 100%;
			position: absolute;
			bottom: 5%;
		}
		.result--success {
			opacity: 0;
			background: rgb(111, 228, 111);
			animation: test 2000ms ease-in-out forwards;
		}
		@keyframes test {
			from {
				opacity: 1;
			}
			to {
				opacity: 0;
			}
		}
		.result--fail {
			opacity: 1;
			background: rgb(224, 86, 86) (197, 109, 109);
			animation: test 2000ms ease-in-out forwards;
		}

		.btnx {
			position: absolute;
			height: 5%;
			width: 9%;
			z-index: 10000;
			font-size: 1em;
			border-radius: 3%;
			color: black;
			text-align: center;

			background: #fffffc;
		}
		.btnx1 {
			top: 3%;
			right: 2%;
		}
		.insider {
			height: 100%;
			width: 100%;
			padding: 1em;
			text-align: center;
			vertical-align: center;
			background: #fffffc;
			font-size: 1em;
			border-radius: 3%;
			cursor: pointer;
			a {
				display: inline-block;
				color: black;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
