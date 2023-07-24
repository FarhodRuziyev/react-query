import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./style.scss";
import { instance } from "../../components/axios";
import { useEffect } from "react";

export default function Create() {
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit, setValue } = useForm();

  const userData = useQuery(
    ["user", id],
    () => instance.get(`/users/${id}`).then((res) => res.data.data),
    {
      enabled: !!id,
    }
  );

  useEffect(() => {
    setValue("name", userData?.data?.first_name);
    setValue("emeil", userData?.data?.email);
  }, [userData]);

  console.log(userData, "prev");
  const mutation = useMutation((edit) => instance.post("/users", edit));

  const malumot = (value) => {
    mutation.mutate(value, {
      onSuccess: (success) =>
        toast.success(
          id ? `You have edited,${success?.data?.name}` : "You have create"
        ),
      onError: (Error) => toast.error("Error went wrong"),
    });
  };

  return (
    <div className="create">
      <form className="for" onSubmit={handleSubmit(malumot)}>
    
        <input
          className="int"
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
       
        <input
          className="int"
          type="text"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input className="bat" type="submit" />
      </form>
    </div>
  );
}
