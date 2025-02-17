function Footer() {
    return (
        <div className="w-full flex flex-col items-center text-white py-4 bg-gradient-to-t from-black to-red-950">
            <div className="text-xl font-bold">
                Blog Pessoal Adrielly | Copyright: 2025
            </div>
            <div className="">
                Acesse minhas redes sociais
            </div>
            <div className="flex justify-center gap-2">
                <a href="https://www.linkedin.com/in/adrielly-do-nascimento-ramos/">
                    <img src="https://ik.imagekit.io/u4ctxhv0m/Icons/linkedin-logo-branco.svg?updatedAt=1739586157569" alt="Logo LinkedIn" />
                </a>
                <a href="https://github.com/AdriellyN">
                    <img src="https://ik.imagekit.io/u4ctxhv0m/Icons/github-logo-branco.svg?updatedAt=1739586142607" alt="Logo Github" />
                </a>
                <a href="https://www.instagram.com/adriellyramos1/">
                    <img src="https://ik.imagekit.io/u4ctxhv0m/Icons/instagram-logo-branco.svg?updatedAt=1739586128438" alt="Logo Instagram" />
                </a>
            </div>
        </div>
    )
}

export default Footer