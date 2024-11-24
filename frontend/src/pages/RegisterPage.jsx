import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/comics");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Cómics
        </h1>
        <h2 className="text-xl font-medium text-gray-700 text-center mb-6">
          Registro
        </h2>
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center rounded-md mb-4" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">Por favor proporciona tu nombre</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Correo"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Por favor ingresa un correo válido</p>}
          </div>

          <div className="mb-4">
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">La contraseña es obligatoria</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirmar contraseña"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
