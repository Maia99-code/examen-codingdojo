import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h1>
        {signinErrors.map((error, i) => (
          <div
            className="bg-red-500 p-2 text-white text-center rounded-md mb-4"
            key={i}
          >
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Correo"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Por favor ingresa tu correo
              </p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Por favor ingresa tu contraseña
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
