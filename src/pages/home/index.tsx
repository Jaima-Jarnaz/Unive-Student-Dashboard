import { SideNavImages, SideMenu } from "components/atoms/navicons";
import { ActiveProgramsItem } from "components/molecules/active-programs-item";
import { ActiveProgramsTop } from "components/molecules/active-programs-top";
import { MessengerTop } from "components/molecules/messenger-top";
import { MyDayItem } from "components/molecules/my-day-items";
import { Card } from "components/organisms/Card";
import { Searchbar } from "components/organisms/searchbar";
import { SideNavBar } from "components/organisms/sidenav";
import { UpcomingSeasonItems } from "components/organisms/upcoming-season-items";
import { ItemMessenger } from "components/organisms/messenger-item";
import { SearchbarSmall } from "components/organisms/searchbar-small";
import { MobileNav } from "components/molecules/mobile-nav";
import customize_logo from "../../assets/icons/customize-icon.png";
import arrow from "assets/image/arrow.png";
import menu from "../../assets/icons/menu.png";
import { useState } from "react";

const Home = () => {
  const [click, setClick] = useState(false);
  const [variant, setVariant] = useState("on");

  const handleNavbar = () => {
    setClick(!click);
    if (click) setVariant("on");
    else setVariant("off");
  };

  return (
    <div className="p-home">
      <div className={`p-home__navbar p-home__navbar-${variant}`}>
        {!click && (
          <div className="p-home__navbar-arrow">
            <button onClick={handleNavbar}>
              <img
                className="p-home__navbar-arrow-btn"
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
        )}

        {click && (
          <div className="p-home__navbar-menu">
            <button onClick={handleNavbar}>
              <img
                className="p-home__navbar-menu-button"
                src={menu}
                alt="menu"
              />
            </button>
            <SideNavImages menu={SideMenu} />
          </div>
        )}

        {!click && (
          <div className="p-home__navbar-side">
            <SideNavBar />
          </div>
        )}
      </div>

      <div className={`p-home__content p-home__content-${variant}`}>
        <div className="p-home__content-searchbar-normal">
          <Searchbar></Searchbar>
        </div>
        <div className="p-home__content-searchbar-small">
          <SearchbarSmall></SearchbarSmall>
        </div>

        <div className="p-home__content-greeting">
          <div className="p-home__content-greeting-name">
            <p className="p-home__content-greeting-name-text">Hello, Mia!</p>
          </div>
          <div className="p-home__content-greeting-customize">
            <img
              className="p-home__content-greeting-customize-logo"
              src={customize_logo}
              alt="customize logo"
            />
            <p className="p-home__content-greeting-customize-text">Customize</p>
          </div>
        </div>

        <div className="p-home__content-body">
          <div className="p-home__content-body-program">
            <div className="p-home__content-body-program-active">
              <div>
                <ActiveProgramsTop
                  title="Active Programs"
                  menuSrc="src/assets/images/active-programs-heading-menu.png"
                />
              </div>
              <div className="p-home__content-body-program-active-items">
                <ActiveProgramsItem
                  logoSrc="src/assets/images/placeholder.png"
                  deptName="MASTER OF COMPUTER SCIENCE"
                  uniName="University of Upstate at Brookstone"
                  rightItemFirstLogo="src/assets/images/1.png"
                  rightItemFirstText="src/assets/images/Overdue Assignments.png"
                  rightItemSecondLogo="src/assets/images/5.png"
                  rightItemSecondText="src/assets/images/Remaining Absenses.png"
                  rightItemThirdLogo="src/assets/images/A-.png"
                  rightItemThirdText="src/assets/images/AcademicAverage.png"
                  rightItemFourthLogo="src/assets/images/Group 1082.png"
                  rightItemFourthText="src/assets/images/Completion.png"
                />
              </div>
              <div className="p-home__content-body-program-active__border"></div>
              <div className="p-home__content-body-program-active-items">
                <ActiveProgramsItem
                  modifier="special-case"
                  logoSrc="src/assets/images/placeholdersecond.png"
                  deptName="CERTIFICATE UX/UI DESIGN"
                  uniName="Academy of Art and Technology at Dursburg"
                  rightItemFirstLogo="src/assets/images/0.png"
                  rightItemFirstText="src/assets/images/Overdue Assignments.png"
                  rightItemSecondLogo="src/assets/images/6.png"
                  rightItemSecondText="src/assets/images/Remaining Absenses.png"
                  rightItemThirdLogo="src/assets/images/--.png"
                  rightItemThirdText="src/assets/images/AcademicAverage.png"
                  rightItemFourthLogo="src/assets/images/Group 1083.png"
                  rightItemFourthText="src/assets/images/Completion.png"
                />
              </div>
            </div>
            <div className="p-home__content-body-program-other">
              <div className="p-home__content-body-program-other-research">
                <Card />
              </div>
              <div className="p-home__content-body-program-other-upcoming-season">
                <UpcomingSeasonItems />
              </div>
            </div>
          </div>

          {/* Messenger Section */}
          <div className="p-home__content-body-messenger">
            <div className="p-home__content-body-messenger-top">
              <MessengerTop
                modifiers="messenger_pic"
                profilePic="src/assets/images/messenger-top-profile.png"
                headingText="Messaging"
                searchIconSrc="src/assets/images/messenger-top-search.png"
                createIconSrc="src/assets/images/messenger-top-create.png"
                menuIconSrc="src/assets/images/messenger-top-menu.png"
                hideIconSrc="src/assets/images/messenger-top-hide.png"
              />
            </div>
            <div className="p-home__content-body-messenger-myday">
              <MyDayItem></MyDayItem>
              <div className="p-home__content-body-messenger-myday-border"></div>
            </div>
            <div className="p-home__content-body-messenger-message-section">
              <ItemMessenger />
            </div>
          </div>
          <div className="p-home__content-body-bottom-nav">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
