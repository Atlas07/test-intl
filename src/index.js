import "./styles.css";

const getLanguageFromCode = (hospitalCulture, patientCulture) => {
  try {
    const languageNames = new Intl.DisplayNames([hospitalCulture], {
      type: "language"
    });

    return languageNames.of(patientCulture);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const test1 = getLanguageFromCode("en", "en");
const test2 = getLanguageFromCode("ru", "ru");

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  <p>test1: ${test1}</p>
  <p>test2: ${test2}</p>
</div>
`;
