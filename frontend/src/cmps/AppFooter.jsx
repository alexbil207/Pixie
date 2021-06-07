export function AppFooter() {

    return (
        <footer>
            <div className="container flex wrap ">
                <div className="text-center copyrights-text">&copy; All rights reserved to Pixie Technologies</div>

                <div className="icns-container">
                    <span className="fab pointer footer-icn facebook"></span>
                    <span className="fab pointer footer-icn twiter"></span>
                    <span className="fab pointer footer-icn linked-in"></span>
                </div>
            </div>
        </footer>
    );
}