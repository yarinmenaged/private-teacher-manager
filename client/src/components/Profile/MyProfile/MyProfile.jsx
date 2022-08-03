import style from "../Profile.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import { useState } from "react";
import cx from "classnames";
import { useCallback } from "react";
import { Dropdown, Icon, Flex, Slider } from "monday-ui-react-core";
import {
  Email,
  PersonRound,
  Mobile,
  Description,
  Academy,
  Edit,
  Add,
  Location,
} from "monday-ui-react-core/dist/allIcons";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

function MyProfile({
  userInfo,
  editAboutAction,
  allSubjects,
  teacherSubjects,
  addSubjectAction,
  removeSubjectAction,
  editPriceAction,
}) {
  const [showTextbox, setShowTextbox] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const allOptions = allSubjects.map((subject) => ({
    value: subject.Name,
    label: subject.Name,
    id: subject.id,
  }));
  const teacherOptions = teacherSubjects.map((subject) => ({
    value: subject.Name,
    label: subject.Name,
    id: subject.id,
  }));

  const editAbout = useCallback(
    (newAbout) => {
      editAboutAction(newAbout);
      setShowTextbox(false);
    },
    [setShowTextbox, editAboutAction]
  );

  const setTextboxDisplay = useCallback(() => {
    setShowTextbox((showTextbox) => !showTextbox);
  }, [setShowTextbox]);

  const setSliderDisplay = useCallback(() => {
    setShowSlider((showSlider) => !showSlider);
  }, [setShowSlider]);

  const addSubject = useCallback(async (event) => {
    addSubjectAction(event[event.length - 1]);
  }, []);

  const removeSubject = useCallback(async (event) => {
    removeSubjectAction(event);
  }, []);

  const editPrice = useCallback(
    (newPrice) => {
      editPriceAction(newPrice);
      setShowSlider(false);
    },
    [setShowSlider, editPriceAction]
  );

  return (
    <div>
      <NavBar />
      <Flex>
        <div className={style.column}>
          <h3>
            <Icon iconSize={30} icon={Academy} /> {userInfo.Name}
          </h3>
          <p>
            <Icon iconSize={20} icon={Email} /> {userInfo.Email}
          </p>
          <p>
            <Icon iconSize={20} icon={Location} /> {userInfo.Location}
          </p>
          <p>
            <Icon iconSize={20} icon={Mobile} /> {userInfo.Phone}
          </p>
        </div>

        <div className={style.column}>
          <h3>
            <Icon icon={Description} /> About
            <label className={style.edit} onClick={setTextboxDisplay}>
              <Icon icon={Edit} />
            </label>
          </h3>
          {showTextbox ? (
            <EditAboutComponent editAbout={editAbout} About={userInfo.About} />
          ) : (
            <p>{userInfo.About}</p>
          )}
        </div>

        <div className={style.column}>
          <h3>
            <HiOutlineCurrencyDollar /> Price
            <label className={style.edit} onClick={setSliderDisplay}>
              <Icon icon={Edit} />
            </label>
          </h3>
          {showSlider ? (
            <EditPriceComponent editPrice={editPrice} price={userInfo.price} />
          ) : (
            <p>{userInfo.price}</p>
          )}
        </div>
      </Flex>
      <Flex justify={Flex.justify.CENTER}>
        <h3>I'm teaching:</h3>
        <Dropdown
          multiline
          multi
          options={allOptions}
          value={teacherOptions}
          onChange={(event) => addSubject(event)}
          onOptionRemove={(event) => removeSubject(event)}
          clearable={false}
          placeholder={"Add Subjects"}
          className={cx(style.dropDown, "dropdown-stories-styles_with-chips")}
        />
      </Flex>
    </div>
  );
}

function EditAboutComponent({ editAbout, About }) {
  const [inputValue, setInputValue] = useState(About);

  return (
    <div>
      <textarea
        type="text"
        defaultValue={About}
        className={style.textbox}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <br />
      <button className={style.button} onClick={() => editAbout(inputValue)}>
        <Icon iconSize={15} icon={Add} />
      </button>
    </div>
  );
}

function EditPriceComponent({ editPrice, price }) {
  const [priceInputValue, setPriceInputValue] = useState(price);
  return (
    <div>
      <Slider
        id="custom-value-formatter"
        className="my-custom-formatter"
        defaultValue={price}
        min={0}
        max={300}
        indicateSelection={true}
        valueFormatter={(value) => `${value}$`}
        size={Slider.sizes.MEDIUM}
        onChange={(value) => setPriceInputValue(value)}
      />
      <br />
      <button
        className={style.button}
        onClick={() => editPrice(priceInputValue)}
      >
        <Icon iconSize={15} icon={Add} />
      </button>
    </div>
  );
}

export default MyProfile;
