function Navbar() {
    return (
        <div className="w-full flex justify-center bg-red-950 text-white py-4" >
            <div className="container flex justify-between text-lg">
                Blog Pessoal
                <div className="flex gap-4">
                    Postagens
                    Temas
                    Cadastrar tema
                    Perfil
                    Sair
                </div>
            </div>
        </div>
    )
}

export default Navbar