import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import ButtonNeu from '../../components/ButtonNeu/ButtonNeu';

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100">
            <div className="w-11/12 md:w-2/3 lg:w-1/2 rounded-lg p-8 bg-zinc-300" style={{ boxShadow: 'inset 2px 2px 6px #ffffff99, inset -2px -2px 6px #ffffff99', borderRadius: '20px' }}>
                {isUserSection ? (
                    <form onSubmit={handleUserSubmit} className="bg-zinc-300">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Creacion de Usuario</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                name="nombre"
                                placeholder="Nombre"
                                onChange={handleUserChange}

                            />

                            <InputField
                                name="apellido"
                                placeholder="Apellido"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                type="date"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="numeroIdentificacion"
                                placeholder="Número de Identificación"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                type="email"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="direccion"
                                placeholder="Dirección"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="pais"
                                placeholder="País"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="telefono"
                                placeholder="Teléfono"
                                type="tel"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="ciudad"
                                placeholder="Ciudad"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="departamento"
                                placeholder="Departamento / Provincia"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="contrasena"
                                placeholder="Contraseña"
                                type="password"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="contrasena-confirmation"
                                placeholder="Confirmar Contraseña"
                                type="password"
                                onChange={handleUserChange}

                            />
                        </div>
                        <ButtonNeu
                            type="submit"
                            text='Registrarse'
                        />
                    </form>
                ) : (
                    <form onSubmit={handleUserSubmit} className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center" style={{ color: "#442432" }}>Creacion de Organizador de Eventos</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <InputField
                                name="nombre"
                                placeholder="Nombre"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="apellido"
                                placeholder="Apellido"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                type="date"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="numeroIdentificacion"
                                placeholder="Número de Identificación"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                type="email"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="direccion"
                                placeholder="Dirección"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="pais"
                                placeholder="País"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="telefono"
                                placeholder="Teléfono"
                                type="tel"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="ciudad"
                                placeholder="Ciudad"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="departamento"
                                placeholder="Departamento / Provincia"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="contrasena"
                                placeholder="Contraseña"
                                type="password"
                                onChange={handleUserChange}

                            />
                            <InputField
                                name="contrasena-confirmation"
                                placeholder="Confirmar Contraseña"
                                type="password"
                                onChange={handleUserChange}

                            />
                        </div>
                        <ButtonNeu
                            type="submit"
                            text='Registrarse'
                        />
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
