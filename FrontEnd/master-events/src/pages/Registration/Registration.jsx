import React, { useState } from 'react';

const Registration = () => {
    const [isUserSection, setIsUserSection] = useState(true);
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        numeroIdentificacion: '',
        correoElectronico: '',
        direccion: '',
        pais: '',
        telefono: '',
        ciudad: '',
        departamento: '',
        contrasena: '',
    });

    const handleUserChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        // Add user registration submission logic here
    };

    const toggleSection = () => {
        setIsUserSection(!isUserSection);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
            <div className="w-11/12 md:w-2/3 lg:w-1/2 rounded-lg p-8 shadow-md" style={{ backgroundColor: "#43777A", opacity: 0.8 }}>
                {isUserSection ? (<form onSubmit={handleUserSubmit} className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: "#442432" }}>Creacion de Usuario</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            name="nombre"
                            placeholder="Nombre"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="apellido"
                            placeholder="Apellido"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="fechaNacimiento"
                            placeholder="Fecha de nacimiento"
                            type="date"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="numeroIdentificacion"
                            placeholder="Número de Identificación"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="correoElectronico"
                            placeholder="Correo electrónico"
                            type="email"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="direccion"
                            placeholder="Dirección"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="pais"
                            placeholder="País"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="telefono"
                            placeholder="Teléfono"
                            type="tel"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="ciudad"
                            placeholder="Ciudad"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="departamento"
                            placeholder="Departamento / Provincia"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="contrasena"
                            placeholder="Contraseña"
                            type="password"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <input
                            name="contrasena-confirmation"
                            placeholder="Confirmar Contraseña"
                            type="password"
                            onChange={handleUserChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <button
                            type="submit"
                            className="block font-bold py-2 px-4 rounded w-1/2 mx-auto mt-4"
                            style={{ color: '#442432' , backgroundColor: '#6E75A8'}}
                        >
                            Registrarse
                        </button>
                </form>
                ) : (
                    <form onSubmit={handleUserSubmit} className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: "#442432" }}>Creacion de Organizador de Eventos</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="nombre"
                                placeholder="Nombre"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="apellido"
                                placeholder="Apellido"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                type="date"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="numeroIdentificacion"
                                placeholder="Número de Identificación"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                type="email"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="direccion"
                                placeholder="Dirección"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="pais"
                                placeholder="País"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="telefono"
                                placeholder="Teléfono"
                                type="tel"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="ciudad"
                                placeholder="Ciudad"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="departamento"
                                placeholder="Departamento / Provincia"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="contrasena"
                                placeholder="Contraseña"
                                type="password"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <input
                                name="contrasena-confirmation"
                                placeholder="Confirmar Contraseña"
                                type="password"
                                onChange={handleUserChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="block font-bold py-2 px-4 rounded w-1/2 mx-auto mt-4"
                            style={{ color: '#442432' , backgroundColor: '#A9A9A9'}}
                        >
                            Registrarse
                        </button>
                    </form>
                )}
                <div className="mt-4">
                    <button
                        onClick={toggleSection}
                        className="text-blue-500 hover:underline focus:outline-none font-semibold"
                        style={{ color: "#442432" }}
                    >
                        {isUserSection ? 'O registrate como Organizador de eventos' : 'O registrate como Usuario'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
