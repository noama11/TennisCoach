import { useState, useRef } from "react";
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser' // functionality to our contact form so people can send us emails
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
import { TennisCanvas } from "./canvas";


// const Contact = () => {
//     const formRef = useRef();
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: '',
//     })

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         // Makes what the user types visible (re-render the form) 
//         setForm({ ...form, [name]: value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();   // prevent the auto refresh of the browser on submit
//         setLoading(true); // replace the submit button with the loading icon img

//         // Public key: bVTdpjOwY-jo1po-U
//         //temp id: template_4ylicx9
//         //server id : service_ysyu1lj
//         emailjs.send("service_ysyu1lj", "template_4ylicx9",
//             {
//                 form_name: form.name,
//                 to_name: 'Noam Cohen',
//                 from_email: form.email,
//                 to_email: "nosm199712@gmail.com",
//                 message: form.message,
//             },
//             "bVTdpjOwY-jo1po-U").then(() => {
//                 setLoading(false);
//                 alert("Thank you. I will get back to you as soon as possible");
//                 setForm({
//                     name: '',
//                     email: '',
//                     message: '',
//                 })
//             }, (error) => {
//                 setLoading(false);
//                 console.log(error);
//                 alert("Somthing went wrong")
//             })

//         return (
//             <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//                 {/* flex-[0.75] meaning that we want to take 3/4 of the screen */}
//                 <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
//                     className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//                 >
//                     <p className={styles.sectionSubText}>Get in touch </p>
//                     <h3 className={styles.sectionHeadText}>Contact</h3>
//                     <form ref={formRef} onSubmit={handleSubmit}
//                         className="mt-12 flex flex-col gap-8"
//                     >
//                         <label className="flex flex-col">
//                             <span className="text-white font-medium mb-4"> Your Name</span>
//                             <input type="text"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 placeholder="What's your name?"
//                                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
//                             />
//                         </label>
//                         <label className="flex flex-col">
//                             <span className="text-white font-medium mb-4"> Your Email</span>
//                             <input type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 placeholder="What's your email?"
//                                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
//                             />
//                         </label>
//                         <label className="flex flex-col">
//                             <span className="text-white font-medium mb-4"> Your Message</span>
//                             <textarea
//                                 rows={7}
//                                 name="message"
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 placeholder="What do you want to say?"
//                                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
//                             />
//                         </label>
//                         <button type="submit"
//                             className="bg-tertiary py-3 px-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//                         >
//                             {loading ? 'Sending...' : 'Send'}
//                         </button>

//                     </form>
//                 </motion.div>

//                 <motion.div
//                     variants={slideIn('right', 'tween', 0.2, 1)}
//                     // flex-1 said that on arge devices the 3D img and the form will be on the samg line
//                     className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//                 >
//                     <TennisCanvas />
//                 </motion.div>
//             </div>
//         )

//     }
// }

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Makes what the user types visible (re-render the form) 
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();   // prevent the auto refresh of the browser on submit
        setLoading(true); // replace the submit button with the loading icon img

        // Public key: bVTdpjOwY-jo1po-U
        //temp id: template_4ylicx9
        //server id : service_ysyu1lj
        emailjs.send("service_ysyu1lj", "template_4ylicx9",
            {
                form_name: form.name,
                to_name: 'Noam Cohen',
                from_email: form.email,
                to_email: "nosm199712@gmail.com",
                message: form.message,
            },
            "bVTdpjOwY-jo1po-U").then(() => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible");
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert("Somthing went wrong")
            })

    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch </p>
                <h3 className={styles.sectionHeadText}>Contact</h3>
                <form ref={formRef} onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4"> Your Name</span>
                        <input type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4"> Your Email</span>
                        <input type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4"> Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
                        />
                    </label>

                    <button type="submit"
                        className="bg-tertiary py-3 px-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                    </button>

                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                // flex-1 said that on arge devices the 3D img and the form will be on the samg line
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <TennisCanvas />

            </motion.div>
        </div>


        // <TennisCanvas />
    )
}

export default SectionWrapper(Contact, "contact")