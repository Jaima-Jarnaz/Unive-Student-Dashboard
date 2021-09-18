import { NavBrand, data } from "components/atoms/logo";
import arrow from "assets/image/arrow.png";

type textType = {
  text: string;
};

export const NavLogo: React.FC = () => {
  return (
    <div className="m-sidenav-logo">
      {/* <div className="m-sidenav-logo__img">
        <img src={arrow} alt="credit" />
      </div> */}
      <div className="m-sidenav-logo__content">
        <NavBrand data={data} />
      </div>
    </div>
  );
};
