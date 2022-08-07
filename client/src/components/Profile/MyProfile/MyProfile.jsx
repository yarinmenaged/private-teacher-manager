import style from "../Profile.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import { useState, useEffect } from "react";
import cx from "classnames";
import { useCallback } from "react";
import { Dropdown, Icon, Flex, Slider } from "monday-ui-react-core";
import {
  Email,
  Mobile,
  Description,
  Academy,
  Edit,
  Check,
  Location,
} from "monday-ui-react-core/dist/allIcons";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import unknownTeacher from '../../../images/unknown-person.png';
import ApiService from "../../../services/ApiService";

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
      console.log(newPrice)
      editPriceAction(newPrice);
      setShowSlider(false);
    },
    [setShowSlider, editPriceAction]
  );

  const [value, reRender] = useState(0);
  const [fileChosen, setFileChosen] = useState(false);
  const [unknownProfileImg, setUnKnownProfileImg] = useState(false);

  useEffect(() => {
    setUnKnownProfileImg(true);
    initProfileImg();
  }, [value]);

  const initProfileImg = useCallback(async () => {
    const img = await ApiService.GetResourceRequest(`users/img/${userInfo.id}`);
    if (img.status) {
      setUnKnownProfileImg(true);
    } else {
      setUnKnownProfileImg(false);
    }
  }, [setUnKnownProfileImg]);

  const submit_file = useCallback(async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const api_req = await ApiService.AddNewResourceRequest(`users/upload/${userInfo.id}`, data);
    if (unknownProfileImg) {
      alert("Profile image saved");
      setUnKnownProfileImg(false);
    } else {
      alert("Profile image saved");
      reRender((e) => e + 1)
    }
  }, [userInfo, setUnKnownProfileImg, reRender]);

  return (
    <div>
      <NavBar />
      <Flex align={Flex.align.START} className={style.profileContainer}>

        <div className={style.column} style={{ width: "10%", paddingLeft: "40px", marginRight: "5%" }}>
          {
            unknownProfileImg
              ? <img src={unknownTeacher} className={style.profileImg} ></img>
              : <img src={`users/img/${userInfo.id}`} className={style.profileImg} ></img>
          }
          <form encType="multipart/form-data" onSubmit={(event) => submit_file(event)}>
            <Flex justify={Flex.justify.SPACE_BETWEEN} className={style.upload}>
              {
                fileChosen &&
                < input style={{ marginRight: "10px" }} type="submit" value="Save" />
              }

              <input type="file" name="profileImg" onChange={() => setFileChosen(true)} />
            </Flex>
          </form>
        </div>
            
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
      <Flex justify={Flex.justify.START} className={style.subjects}>
        <h3>I'm teaching:</h3>
        <Dropdown
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
        <Icon iconSize={15} icon={Check} />
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
        <Icon iconSize={15} icon={Check} />
      </button>
    </div>
  );
}

export default MyProfile;
