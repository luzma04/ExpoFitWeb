import { useState } from "react";

const Form = ({fields, onSubmit}) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
            {fields.map(({name, label, type}) => (
                <div key={name}>
                <label className="block mb-1 font-medium text-[#1E1E1E]">{label}</label>
                <input
                  type={type}
                  name={name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-gray-200"
                />
              </div>
            ))
            }
            <div className="flex justify-center">
                <button
                type="submit"
                className="bg-[#F4004A] text-white px-4 py-2 rounded"
                >
                enviar
                </button>
            </div>
        </form>
    )
};

export default Form;