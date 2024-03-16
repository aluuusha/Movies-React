function Footer() {
    return <footer className="page-footer #a1887f brown lighten-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="white-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export {Footer};