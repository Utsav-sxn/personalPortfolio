import { useState } from "react";
import Swal from "sweetalert2";

const MyForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "f1aae1e8-8848-4511-88b3-e3f71d83dec7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Message sent Successfully",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500
        });

        event.target.reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col sm:pl-[9rem] justify-center items-center">
            <form action="" method="POST" className="w-[80%] h-fit flex flex-col lg:flex-row gap-2 text-center justify-center items-center p-4" onSubmit={onSubmit}>
                <h1 className="font-semibold text-5xl lg:text-8xl bg-gradient-to-b from-purple-100 to-purple-400 bg-clip-text text-transparent text-start p-4 selection:bg-blue-400 selection:text-black">Want to <br /> Collaborate?</h1>
                <div className="flex flex-col gap-6 lg:border-l-2 lg:border-gray-800 p-4 w-[45%] items-center">
                    <div className="flex gap-4 items-center">
                        <label htmlFor="name" className="w-32 text-start font-medium text-2xl bg-gradient-to-b from-gray-100 to-[#a1a1a6] bg-clip-text text-transparent p-1">Username</label>
                        <input type="text" name="name" id="username" className="w-48 rounded-md p-1 focus:w-64 transition-all duration-150  border-2" placeholder="Enter Name" autoComplete="off" required/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label htmlFor="email" className="w-32 text-start font-medium text-2xl bg-gradient-to-b from-gray-100 to-[#a1a1a6] bg-clip-text text-transparent p-1">Email</label>
                        <input type="email" name="email" id="email" className="w-48 rounded-md p-1 focus:w-64 transition-all duration-150  border-2" placeholder="Enter Email" autoComplete="off" required/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label htmlFor="message" className="w-32 text-start font-medium text-2xl bg-gradient-to-b from-gray-100 to-[#a1a1a6] bg-clip-text text-transparent p-1">Message</label>
                        <textarea name="message" id="message" className="w-48 p-1 border-2 rounded-md focus:w-64 transition-all duration-150 " placeholder="Enter Message" required></textarea>
                    </div>
                    <button type="submit" className="w-32 p-1 rounded-3xl bg-gradient-to-r from-gray-200 to-[#a1a1a8] transition-all duration-150 text-gray-900 hover:bg-gradient-to-br">Submit</button>
                </div>
            </form>
    </div>
  )
}

export default MyForm