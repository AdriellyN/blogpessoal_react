
function Home() {
    return (
        <div className="flex justify-center bg-red-950">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col items-center justify-center gap-4 py-4">
                    <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                    <p className="text-xl" >
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>
                    <div className="flex justify-around gap-4 ">
                        <div className="rounded border-white border-solid border-2 py-2 px-4 text-white">
                            Nova Postagem
                        </div>
                    </div>
                </div>

            


                <div className="flex justify-content">
                    <img
                        src="https://ik.imagekit.io/u4ctxhv0m/Blog%20Pessoal/programmer%20steps.svg?updatedAt=1739587057865"
                        alt="Imagem da Página Home"
                        className="w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
