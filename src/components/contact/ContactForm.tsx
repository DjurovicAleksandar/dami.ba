"use client";
import { ContanctForm } from "@/types/contact";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContanctForm>();

  const onSubmit: SubmitHandler<ContanctForm> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-10 gap-y-10 w-full"
    >
      <div className="flex flex-col">
        <input
          placeholder="Ime *"
          className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full focus:outline-none focus:border-b-black/30"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-600">Ovo polje je obavezno</span>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="Prezime *"
          className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full focus:outline-none focus:border-b-black/30"
          {...register("surname", { required: true })}
        />
        {errors.surname && (
          <span className="text-red-600">Ovo polje je obavezno</span>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="Telefon *"
          className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full focus:outline-none focus:border-b-black/30"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-red-600">Ovo polje je obavezno</span>
        )}
      </div>
      <div className="flex flex-col">
        <input
          placeholder="Email"
          className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full focus:outline-none focus:border-b-black/30"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col col-span-2">
        <textarea
          placeholder="Poruka *"
          className={`rounded-lg px-4 py-8 bg-gray-50 w-full h-[15rem] resize-none`}
          {...register("message", { required: true })}
        />
        {errors.phone && (
          <span className="text-red-600">Ovo polje je obavezno</span>
        )}
      </div>
      <div className="flex justify-center col-span-2">
        <input
          className="w-full mx-auto cursor-pointer bg-darkBlue font-semibold rounded-md text-white py-2 px-4 hover:bg-transparent hover:text-darkBlue hover:border-[1px] duration-300 ease-linear"
          type="submit"
          value="Pošaljite"
        />
      </div>
    </form>
  );
}
