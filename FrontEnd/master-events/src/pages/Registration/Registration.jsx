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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="w-11/12 md:w-2/3 lg:w-1/2 rounded-lg p-8 bg-gray-300" style={{ boxShadow: 'inset 2px 2px 6px #ffffff99, inset -2px -2px 6px #ffffff99', borderRadius: '20px' }}>
                {isUserSection ? (
                    <form onSubmit={handleUserSubmit} className="bg-gray-300">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Creacion de Usuario</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                name="nombre"
                                placeholder="Nombre"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />

                            <input
                                name="apellido"
                                placeholder="Apellido"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                type="date"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="numeroIdentificacion"
                                placeholder="Número de Identificación"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                type="email"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="direccion"
                                placeholder="Dirección"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="pais"
                                placeholder="País"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="telefono"
                                placeholder="Teléfono"
                                type="tel"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="ciudad"
                                placeholder="Ciudad"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="departamento"
                                placeholder="Departamento / Provincia"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="contrasena"
                                placeholder="Contraseña"
                                type="password"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="contrasena-confirmation"
                                placeholder="Confirmar Contraseña"
                                type="password"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="block font-bold py-3 px-6 rounded-lg w-1/2 mx-auto mt-4 bg-gray-350 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
                            style={{ borderRadius: '25px', boxShadow: '2px 2px 6px #babecc, -5px -5px 10px #ffffff73' }}
                        >
                            Registrarse
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleUserSubmit} className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center" style={{ color: "#442432" }}>Creacion de Organizador de Eventos</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="nombre"
                                placeholder="Nombre"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="apellido"
                                placeholder="Apellido"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                type="date"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="numeroIdentificacion"
                                placeholder="Número de Identificación"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                type="email"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="direccion"
                                placeholder="Dirección"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="pais"
                                placeholder="País"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="telefono"
                                placeholder="Teléfono"
                                type="tel"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="ciudad"
                                placeholder="Ciudad"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="departamento"
                                placeholder="Departamento / Provincia"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="contrasena"
                                placeholder="Contraseña"
                                type="password"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                            <input
                                name="contrasena-confirmation"
                                placeholder="Confirmar Contraseña"
                                type="password"
                                onChange={handleUserChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                                style={{ borderRadius: '25px', boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #FFFFFF73' }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="block font-bold py-3 px-6 rounded-lg w-1/2 mx-auto mt-4 bg-gray-350 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
                            style={{ borderRadius: '25px', boxShadow: '2px 2px 6px #babecc, -5px -5px 10px #ffffff73' }}
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
