const Footer: React.FC = () => {
    return (
        <footer className="mb-12 mt-20 text-center  font-medium text-darkCyan">
            Challenge by{' '}
            <a
                className="font-bold text-primaryCyan"
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
            >
                Frontend Mentor
            </a>
            . Coded by
            <a
                href="https://portfoliosaliol.web.app/"
                target="_blank"
                className="pl-1 font-bold text-primaryCyan"
            >
                Leonel M. Saliol
            </a>
            .
        </footer>
    );
};
export default Footer;
