import imgDesktop from '../images/bg-header-desktop.svg';
import imgMobile from '../images/bg-header-mobile.svg';
const BgFigures: React.FC = () => {
    return (
        <>
            {' '}
            <figure
                className="h-[180px] bg-primaryCyan bg-cover  bg-no-repeat lg:hidden "
                style={{
                    backgroundImage: `url("${imgMobile}")`,
                }}
            ></figure>
            <figure
                className="hidden h-[150px] bg-primaryCyan bg-cover bg-no-repeat  lg:block"
                style={{
                    backgroundImage: `url("${imgDesktop}")`,
                }}
            ></figure>
        </>
    );
};
export default BgFigures;
