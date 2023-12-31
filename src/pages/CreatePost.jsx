import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FormField } from "../Components";

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setform] = useState({
        name: '',
        prompt: '',
        photo: '',
    })
    const [generatingImg, setgeneratingImg] = useState(false);
    const [loading, setloading] = useState(false)

    const handleSubmit = () => { };

    const handleChange = (e) => { }

    const handleSurpriseMe = () => { }

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and visually stunning images through by DALL-E and share them with the community.</p>
            </div>

            <form className="mt-16 max-w-3xl"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-5">
                    <FormField
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />

                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="panda mad scientist mixing sparkling chemicals, digital art"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />
                </div>
            </form>
        </section>
    )
}

export default CreatePost